class API::V1::Groups::SearchInfo

  include StandardService::Wrapper
  attr_accessor :ids

  service do
    search_info
  end

  def search_info
    parts = ids.each_slice(300).to_a

    parts.each do |part|

      groups = VkClient.groups.get_by_id(group_ids: part, fields: [
        :members_count,
        :photo_50,
      ])

      groups.map do |group|
        model = Group.where(screen_name: group["screen_name"]).take
        set_attributes_vk(model, group) if model.present?
      end

    end
  end

  def set_attributes_vk(model, object)
    model.update_attributes(
      gid: object['gid'],
      name: object['name'],

      members_count: object['members_count'],
      photo_50: object['photo_50'],
    )
  end

end

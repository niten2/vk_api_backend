class API::V1::Groups::GetInfo

  include StandardService::Wrapper
  attr_accessor :group

  FIELDS = [
    :members_count,
    :photo_50,
  ]

  service do
    if group.nil?
      add_condition :group_not_defined, "group_not_defined"
      return nil
    end

    search_info
  end

  def search_info
    response = VkClient.groups.get_by_id(group_id: group.screen_name, fields: FIELDS).first
    set_attributes_vk(group, response)
  end

private

  def set_attributes_vk(group, response)
    group.update_attributes(
      screen_name: response['screen_name'],
      gid: response['gid'],
      name: response['name'],

      members_count: response['members_count'],
      photo_50: response['photo_50'],
    )
  end

end

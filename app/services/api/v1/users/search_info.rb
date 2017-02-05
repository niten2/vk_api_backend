class API::V1::Users::SearchInfo

  include StandardService::Wrapper
  attr_accessor :uids, :uid

  FIELDS = [
    :sex,
    :bdate,
    :city,
    :followers_count,
    :personal,
    :status,
    :crop_photo,
  ]

  COUNT_UIDS = 400

  service do
    search_info if uids.present?
    search_uid if uid.present?
  end

  # add blacklisted
  def search_info
    parts = uids.each_slice(COUNT_UIDS).to_a

    parts.each do |part|

      users = VkClient.users.get(user_ids: part, fields: FIELDS)

      users.map do |response, index|

        user = User.where(uid: response["uid"]).take

        if user.present?
          set_attributes_vk(user, response)
        else
          puts "user not found #{user["uid"]}"
        end
      end

    end
  end

  def search_uid
    user = User.find_by_uid(uid)
    response = VkClient.users.get(user_id: uid, fields: FIELDS).first
    set_attributes_vk(user, response)
  end

  def set_attributes_vk(user, response)
    puts "User with uid update #{user.uid}"

    user.update_attributes(
      first_name: response['first_name'],
      last_name: response['last_name'],
      followers_count: response['followers_count'],
      city: response['city'],
      bdate: response['bdate'],
      crop_photo_url: response.dig("crop_photo", "photo", "src"),
      sex: response['sex'],
    )
  end

  # def check_uids
  #   if uids.instance_of? User::ActiveRecord_Relation
  #     @uids = uids.map(&:uid)
  #   end
  # end

end

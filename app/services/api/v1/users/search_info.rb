class API::V1::Users::SearchInfo

  include StandardService::Wrapper
  attr_accessor :ids

  service do
    search_info
  end

  # add blacklisted
  def search_info
    parts = ids.each_slice(300).to_a

    parts.each do |part|

      users = VkClient.users.get(user_ids: part, fields: [
        :sex,
        :bdate,
        :city,
        :followers_count,
        :personal,
        :status,
        :crop_photo,
      ])

      users.map do |user, index|
        model = User.where(uid: user["uid"]).take
        set_attributes_vk(model, user) if model.present?
      end

    end
  end

  def set_attributes_vk(model, user)
    puts "User with uid update #{model.uid}"

    model.update_attributes(
      first_name: user['first_name'],
      last_name: user['last_name'],
      followers_count: user['followers_count'],
      city: user['city'],
      bdate: user['bdate'],
      crop_photo_url: user.dig("crop_photo", "photo", "src"),
      sex: user['sex'],
    )
  end

end

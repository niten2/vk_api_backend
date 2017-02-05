class API::V1::Users::CreateUser

  include StandardService::Wrapper
  attr_accessor :params

  service do
    test
    # check_ids
    # search_info
  end

  def test
    # binding.pry

    uid = params[:url].gsub("https://vk.com/", "").gsub("id", "")

    tag = Tag.find(params[:tag_id])


    user = User.find_or_create_by!(uid: uid)

    result = API::V1::Users::SearchInfo.call(ids: [user.uid]) if user.valid?

    if tag.present?
      user.tags << tag if user.tags.where(name: tag.name).take.nil?
    end

    user.reload

    return user


    # url = User.parse_screen_name(params[:url])
    # tag_id = params[:tag_id]

    # group = Group.find_or_create_by!(screen_name: screen_name)

    # if group.valid?

    #   API::V1::Groups::GetInfo.call(group: group)

    #   if tag_id.present?
    #     tag = Tag.find(tag_id)

    #     group.tags << tag if group.tags.where(name: tag.name).take.nil?
    #   end

    #   # API::V1::Groups::SearchInfo.call(ids: [ group.id ] )

    #   render json: group, status: 200
    #   # render json: group, status: :ok, serializer: API::V1::UserDeviceSerializer
    # else
    #   render json: { errors: group.errors }, status: 422
    # end






  end

  # # add blacklisted
  # def search_info

  #   parts = @ids.each_slice(300).to_a

  #   parts.each do |part|

  #     users = VkClient.users.get(user_ids: part, fields: [
  #       :sex,
  #       :bdate,
  #       :city,
  #       :followers_count,
  #       :personal,
  #       :status,
  #       :crop_photo,
  #     ])

  #     users.map do |user, index|
  #       model = User.where(uid: user["uid"]).take
  #       if model.present?
  #         set_attributes_vk(model, user)
  #       else
  #         puts "model not found #{user["uid"]}"
  #       end
  #     end

  #   end
  # end

  # def set_attributes_vk(model, user)
  #   puts "User with uid update #{model.uid}"

  #   model.update_attributes(
  #     first_name: user['first_name'],
  #     last_name: user['last_name'],
  #     followers_count: user['followers_count'],
  #     city: user['city'],
  #     bdate: user['bdate'],
  #     crop_photo_url: user.dig("crop_photo", "photo", "src"),
  #     sex: user['sex'],
  #   )
  # end

  # def check_ids
  #   if ids.instance_of? User::ActiveRecord_Relation
  #     @ids = ids.map(&:uid)
  #   end
  # end

end

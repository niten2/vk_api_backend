class Api::V1::UsersController < ApplicationController

# urls = [
#   "http://vk.com/club107619435",
#   "http://vk.com/club105945053",
#   "http://vk.com/club60793626",
# ]

  def index
    # binding.pry
    # @token = request.headers["Authorization"].gsub("Bearer ", "")
    # @vk = VkontakteApi::Client.new(@token)


    # @vk.groups.get_by_id(group_id: 90116995, fields: [:members_count])

    # @vk.groups.get_by_id(group_id: 90116995, fields: [:members_count])

    # users = @vk.users.get(user_ids: ["niten2", "maks.petrov_krsk", "olehouse24"], fields: [:sex, :bdate, :city, :followers_count, :personal, :status, ])

    # @token = VkontakteApi.authorize(code: params[:code]).token

    # @vk_url = VkontakteApi.authorization_url(scope: [:friends, :groups, :offline, :notify])
    # redirect_to @vk_url
  end

  # def callback
  #   redirect_to "#{ENV["FRONTEND_REDIRECT_URI"]}?token=#{@token}"

    # @vk.groups.get_by_id(group_id: 90116995, fields: [:members_count])

    # @objects = []

    # urls.map do |url|
    #   id = url.gsub("http://vk.com/", "")
    #   group = @vk.groups.get_by_id(group_id: id, fields: [:members_count]).first

    #   object = {
    #     name: group["name"],
    #     count: group["members_count"],
    #     url: url,
    #   }

    #   @objects.push(object)
    # end



  #   session[:token] = @vk.token
  #   session[:vk_id] = @vk.user_id

  #   redirect_to root_url
  # end


  # def destroy
  #   session[:token] = nil
  #   session[:vk_id] = nil

  #   redirect_to root_url

end


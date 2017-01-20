class Api::V1::GroupsController < ApplicationController

  def index
    groups = Group.all
    render json: groups, status: 200
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


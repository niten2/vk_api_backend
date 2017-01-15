class AuthController < ApplicationController

  def vk
    @vk_url = VkontakteApi.authorization_url(scope: [:friends, :groups, :offline, :notify])
    redirect_to @vk_url
  end

  def vk_callback
    @token = VkontakteApi.authorize(code: params[:code]).token
    redirect_to "#{ENV["FRONTEND_REDIRECT_URI"]}?token=#{@token}"
  end

end

VkontakteApi.configure do |config|
  config.app_id       = ENV['VK_APP_ID']
  config.app_secret   = ENV['VK_APP_SECRET']
  config.redirect_uri = ENV['VK_REDIRECT_URI']

  # Faraday adapter to make requests with:
  # config.adapter = :net_http

  # Logging parameters:
  # log everything through the rails logger
  config.logger = Rails.logger

  # log requests' URLs
  # config.log_requests = true

  # log response JSON after errors
  # config.log_errors = true

  # log response JSON after successful responses
  # config.log_responses = false
end

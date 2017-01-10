require_relative 'boot'
require 'rails/all'

Bundler.require(*Rails.groups)

Dotenv::Railtie.load

module VkRails
  class Application < Rails::Application

    # config.from_file 'settings.yml'

    # config.api_only = true
  end
end

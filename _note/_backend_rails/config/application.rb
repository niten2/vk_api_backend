require_relative 'boot'
require 'rails/all'

Bundler.require(*Rails.groups)

Dotenv::Railtie.load

module VkRails
  class Application < Rails::Application

    config.autoload_paths << Rails.root.join('lib/extensions')
    config.autoload_paths << Rails.root.join('app/services/**/')
    config.autoload_paths << Rails.root.join('lib')
    # config.from_file 'settings.yml'

    # config.api_only = true

    config.middleware.insert_before 0, Rack::Cors do
      allow do
        origins '*'
        resource '*', headers: :any, methods: [:get, :post, :patch, :put, :delete, :options]
      end
    end

  end
end

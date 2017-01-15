Rails.application.routes.draw do
  # root "main#index"
  # get "callback" => "main#callback"

  get "auth/vk" => "auth#vk"
  get "auth/vk/callback" => "auth#vk_callback"

  namespace :api do
    namespace :v1 do
      resources :users
      resources :filters

    end
  end

end

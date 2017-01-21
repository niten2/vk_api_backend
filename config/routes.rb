Rails.application.routes.draw do

  get "auth/vk" => "auth#vk"
  get "auth/vk/callback" => "auth#vk_callback"

  namespace :api do
    namespace :v1 do

      resources :users do
        get :inactive, on: :member
      end

      resources :groups
      resources :filters

    end
  end

end

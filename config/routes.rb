Rails.application.routes.draw do
  root "main#index"
  get "callback" => "main#callback"
end

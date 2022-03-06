Rails.application.routes.draw do
  
  resources :comments
  resources :yoga_poses, only: [:index, :show]
  resources :users, only: [:index, :create, :destroy]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

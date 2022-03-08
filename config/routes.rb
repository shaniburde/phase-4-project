Rails.application.routes.draw do
  
  # resources :sessions, only: [:create]
  resources :comments
  resources :yoga_poses, only: [:index, :show]
  resources :users, only: [:index, :show, :create, :destroy]
  post "/login", to: "sessions#login"
  delete "/logout", to: "sessions#logout"
  get "/me", to: "users#show"
  get '/authorized_user', to: 'users#show'
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

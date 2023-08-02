Rails.application.routes.draw do
  devise_for :users
  root 'root#index'

  namespace :api do
    namespace :v1 do
      resources :cars
      resources :reservations
    end
  end

  get '*path', to: 'root#index', constraints: ->(req) { !req.path.starts_with?('/api') }
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end

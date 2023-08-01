Rails.application.routes.draw do

  resources :session, only: [:create]
  resources :registrations, only: [:create]
  delete :logout, to: 'session#logout'
  get :logged_in, to: "session#logged_in"
  root 'root#index'
  get '*path', to: 'root#index', constraints: ->(req) { !req.path.starts_with?('/api') }
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end

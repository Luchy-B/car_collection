Rails.application.routes.draw do
  mount Rswag::Ui::Engine => '/api-docs'
  mount Rswag::Api::Engine => '/api-docs'

  resources :session, only: [:create]
  resources :registrations, only: [:create]
  delete :logout, to: 'session#logout'
  get :logged_in, to: "session#logged_in"
  root 'root#index'

  namespace :api do
    namespace :v1 do
      resources :cars
      resources :reservations
    end
  end

  get '/ITEMS','/RESERVE_FORM(/:path)', '/MY_RESERVATION', '/ADD_ITEM', '/DETAILS/*path', '/DELETE_ITEM', to: 'root#index'

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end

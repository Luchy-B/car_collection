Rails.application.routes.draw do
  devise_for :users
  root 'root#index'

  namespace :api do
    namespace :v1 do
      resources :cars
      resources :reservations
    end
  end

  get '/ITEMS','/RESERVE_FORM', '/MY_RESERVATION', '/ADD_ITEM', '/DETAILS', '/DELETE_ITEM', to: 'root#index'

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end

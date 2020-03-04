# frozen_string_literal: true

Rails.application.routes.draw do
  
  devise_for :users
  
  resources :product, only: [:show]
  resources :category, only: [:show]
  resource :cart, only: %i[destroy show] do
    resources :cart_items, only: %i[destroy create]
  end  
  resources :search, only: [:index]

  root to: 'main#index'
end

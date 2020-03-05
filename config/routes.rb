Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json} do
    resources :businesses, only: [:index, :show] do
      resources :reviews, only: [:create]
    end
    resources :reviews, only: [:index]
    resources :users, only: [:create, :update, :destroy]
    resource :session, only: [:create, :destroy, :show]
  end

  root to: "static_pages#root"
end

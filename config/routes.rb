Rails.application.routes.draw do
  namespace :api do 
    resources :users do
      resources :characters 
      resources :stories do
        resources :pages
      end 
    end
  end
end

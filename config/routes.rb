Rails.application.routes.draw do
  namespace :api do 
    resources :users do
      resources :characters
    end
  end
end

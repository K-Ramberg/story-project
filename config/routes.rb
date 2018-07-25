Rails.application.routes.draw do
  namespace :api do 
    resources :users do
      resources :characters, :stories
    end
  end
end

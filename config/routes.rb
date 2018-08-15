Rails.application.routes.draw do
  namespace :api do 
    resources :users do
      resources :characters do
        resources :stories do
          resources :pages
        end
      end 
    end
  end
end

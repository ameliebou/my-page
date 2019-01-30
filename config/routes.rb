Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#index'
  get '/resume', to: 'pages#resume'
  get '/portfolio', to: 'pages#portfolio'
  get '/about-me', to: 'pages#contact'
end

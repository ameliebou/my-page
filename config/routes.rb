Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#index'
  get '/resume', to: 'pages#resume'
end

AorD3::Application.routes.draw do
  resources :categories, :only => :index

  root :to => 'index#index'
end

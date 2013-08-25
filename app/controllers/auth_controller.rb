class AuthController < ApplicationController
  def login
    name = params[:username]
  	user = User.find_by_name(name)
  	if user and user.authenticate(params[:password])
  		response = user.api_key.create()
      response[:name] = name
  		render :json => response
  	else
      render :status => 401, :json => {
        :success => false, 
        :error => 'Login failed.'
      }
  	end
  end

  def logout
  	key = ApiKey.find_by_access_token(params[:access_token])
    key.destroy
  end
end

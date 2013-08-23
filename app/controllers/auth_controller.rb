class AuthController < ApplicationController
  def login
  	user = User.find_by_name(params[:name])
  	if user and user.authenticate(params[:password])
  		key = user.api_key.create()
  		render :json => key
  	else
      head :no_content
  	end
  end

  def logout
  	key = ApiKey.find_by_access_token(params[:access_token])
    key.destroy
  end
end

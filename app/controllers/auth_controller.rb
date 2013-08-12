class AuthController < ApplicationController
  def login
  	user = User.find_by_name(params[:name])
  	if user and user.authenticate(params[:password])
  		key = ApiKey.new
  		key.user_id = user.id
  		key.save
  		render :json => key
  	else

  	end
  end

  def logout
  	# key = ApiKey.find_by_access_token
  end
end

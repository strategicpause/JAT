class UsersController < ApplicationController
  # GET /users
  def index
    @users = User.order(:name)
    render :json => @users
  end

  # GET /users/1
  def show
    @user = User.find(params[:id])
    render :json => @user
  end

  # GET /users/1/tweets
  def tweets
    @user = User.find(params[:id])

  end

  # POST /users
  def create
    @user = User.new
    @user.name = params[:username]
    @user.password = params[:password]
    @user.password_confirmation = params[:password_confirm]
    if @user.save
      @key = @user.api_key.create
      render :json => @key, :status => :created
    else
      render :json => @user.errors, :status => :unprocessable_entity
    end
  end

  # PUT /users/1
  def update
    @user = User.find(params[:id])
    if @user.update_attributes(params[:user])
      head :no_content
    else
      render :json => @user.errors, :status => :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user = User.find(params[:id])
    @user.destroy
    head :no_content
  end
end

class TweetsController < ApplicationController
  # GET /tweets
  # GET /tweets.json
  def index
    user = user_from_token
    @tweets = user.tweets
    render :json => @users
  end

  # GET /tweets/1
  # GET /tweets/1.json
  def show
    user = user_from_token
    @tweet = user.tweets.where(:id => params[:id])
    render :json => @tweet
  end

  # POST /tweets
  # POST /tweets.json
  def create
    user = user_from_token
    @tweet = user.tweets.new()
    @tweet.tweet = params[:tweet]
    if @tweet.save
      render :json => @tweet, :status => :created
    else
      render :json => @tweet.errors, :status => :unprocessable_entity
    end
  end

  # PUT /tweets/1
  # PUT /tweets/1.json
  def update
    head :no_content
  end

  # DELETE /tweets/1
  # DELETE /tweets/1.json
  def destroy
    user = user_from_token
    user.tweets.destroy(params[:id])
    head :no_content
  end

private 
  def user_from_token
    ApiKey.find_by_access_token(params[:access_token]).user
  end
end

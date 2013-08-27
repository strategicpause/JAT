class Tweet < ActiveRecord::Base
  belongs_to :user
  attr_accessible :tweet

  def as_json
  	super(:only => [:id, :tweet, :created_at])
  end
end

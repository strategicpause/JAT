class User < ActiveRecord::Base
	validates :name, :presence => true, :uniqueness => true
	has_secure_password
	has_many :api_key
	has_many :tweets

	def as_json(options)
		super(:only => [:id, :name])
	end
end

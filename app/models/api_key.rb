class ApiKey < ActiveRecord::Base
  before_create :generate_access_token
  belongs_to :user

	def as_json(options)
		super(:only => [:access_token], :include => { 
			:user => { :only => [:id, :name] }
		})
	end

private
  @@EXPIRATION = 24 * 60 * 60
  def generate_access_token
    begin
      self.access_token = SecureRandom.hex
    end while self.class.exists?(:access_token => access_token)
    self.expires_at = Time.now + @@EXPIRATION
  end
end

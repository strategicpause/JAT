var UserView = Backbone.View.extend({
	el: $('div#body'),
	template: $("#template-user").html(),
	events: {
		'keypress textarea#tweet': 'count',
		'click button#submit': 'submit'
	},
	initialize: function(){
	  _.bindAll(this, 'render', 'submit'); // every function that uses 'this' as the current object should be in here
	  this.model.on('change', this.render);
    this.model.fetch();
	},
	render: function() {
		var self = this;
	  var context = {
	  	id: self.model.get('id'),
	  	name: self.model.get('name'),
	  	current_user: window.current_user === self.model.id
	  }
	  var template = Handlebars.compile(this.template);
	  this.$el.html(template(context));
	  var tweets = self.model.get('tweets');
	  _.each(tweets, function(tweet) {
	  	self.appendTweet(tweet);	
	  });
	},
	count: function() {
		var tweet = $('#tweet').val();
		var count = tweet.length
		$('#chars').text(count);
	},
	submit: function() {
		var self = this;
		var tweet = $('#tweet').val();
		this.model.tweet(tweet, {
			success: function(data) {
				self.appendTweet(data);
				$('#tweet').val('');
				$('#chars').text(0);
			}
		});
	},
	appendTweet: function(tweet) {
		var tweetView = new TweetView({ model: new Tweet(tweet) });
		var tweets = $('ul#tweets');
		tweets.append(tweetView.render());
	},
	close : function() {
		this.remove();
		this.unbind();
	}
});
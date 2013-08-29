var UserView = Backbone.View.extend({
	el: $('div#body'),
	template: $("#template-user").html(),
	events: {
		'keypress textarea#tweet': 'count',
		'click button#submit': 'submit'
	},
	initialize: function(){
	  _.bindAll(this, 'render'); // every function that uses 'this' as the current object should be in here
	  this.model.on('change', this.render);
    this.model.fetch();
	},
	render: function() {
		var self = this;
	  var context = {
	  	id: self.model.get('id'),
	  	name: self.model.get('name'),
	  	tweets: self.model.get('tweets'),
	  	current_user: window.current_user === self.model.id
	  }
	  var template = Handlebars.compile(this.template);
	  this.$el.html(template(context));
	},
	count: function() {
		var tweet = $('#tweet').val();
		var count = tweet.length
		$('#chars').text(count);
	},
	submit: function() {
		var tweet = $('#tweet').val();
		this.model.tweet(tweet, {
			success: function(data) {
				console.log(data);
				var tweets = $('#tweets');
				tweets.append('<li>' + tweet + '</li>');
				$('#tweet').val('');
			}
		});
	},
	close : function() {
		this.remove();
		this.unbind();
	}
});
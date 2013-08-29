var User = Backbone.Model.extend({
	urlRoot: '/users',
	tweet: function(tweet, options) {
		var params = {
			type: 'POST',
			data: {
				tweet: tweet.length > 140 ? tweet.substring(0, 140) : tweet,
				access_token: window.access_token
			}
		}
		$.ajax('/tweets', _.extend(params, options));
	}
});
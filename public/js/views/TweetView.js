var TweetView = Backbone.View.extend({
	tagName: 'li',
	className: 'tweet',
	events: {
		'click': 'delete'
	},
	initialize: function(){
	  _.bindAll(this, 'render', 'delete');
	},
	render: function() {
		return this.$el.html(this.model.get('tweet'));
	},
	delete: function () {
		var self = this;
		this.model.destroy({ 
			data: { access_token: window.access_token, id: self.model.id },
			processData: true
		});
		this.close();
	},
	close : function() {
		this.remove();
		this.unbind();
	}
});
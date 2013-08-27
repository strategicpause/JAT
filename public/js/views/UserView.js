var UserView = Backbone.View.extend({
	el: $('div#body'),
	template: $("#template-user").html(),
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
	  	tweets: self.model.get('tweets')
	  }
	  var template = Handlebars.compile(this.template);
	  this.$el.append(template(context));
	}
});
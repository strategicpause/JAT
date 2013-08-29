var RegisterView = Backbone.View.extend({
	el: $('div#body'),
	template: $("#template-register").html(),
	events: {
	  'click button#submit': 'register'
	},
	initialize: function(){
	  _.bindAll(this, 'render', 'remove', 'register');
	  this.render();
	},
	render: function(){
	  var template = Handlebars.compile(this.template);
	  this.$el.html(template);
	},
	remove: function() {
		this.$el.empty().detach();
		return this;
	},
	register: function(){
	  var username = $('#username').val();
	  var password = $('#password').val();
	  var password_confirm = $('#password_confirm').val();
	  $.ajax({
	    type: 'POST',
	    url: 'users',
	    data: {
	      username: username,
	      password: password,
	      password_confirm: password_confirm
	    },
	    success: function(data) {
	      console.log(data);
	    },
	    error: function(data) {
	      console.log(data);
	    }
	  });
	}
});
var LoginView = Backbone.View.extend({
	el: $('div#body'),
	template: $("#template-login").html(),
	events: {
	  'click button#submit': 'login'
	},
	initialize: function(){
	  _.bindAll(this, 'render', 'login'); // every function that uses 'this' as the current object should be in here
	  this.render();
	},
	render: function(){
	  var template = Handlebars.compile(this.template);
	  this.$el.append(template);
	},
	login: function(){
	  var username = $('#username').val();
	  var password = $('#password').val();
	  $.ajax({
	    type: 'POST',
	    url: 'auth/login',
	    data: {
	      username: username,
	      password: password
	    },
	    success: function(data) {
	      // Redirect to user screen
	    },
	    error: function(data) {
	      // Display error message
	    }
	  });
	}
});
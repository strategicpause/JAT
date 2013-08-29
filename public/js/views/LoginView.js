var LoginView = Backbone.View.extend({
	el: $('div#body'),
	template: $("#template-login").html(),
	events: {
	  'click button#submit': 'login'
	},
	initialize: function(){
	  _.bindAll(this, 'render', 'remove', 'login');
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
	      window.access_token = data.access_token
	      window.current_user = data.user.id
	      window.location.replace('/#user/' + current_user);
	    },
	    error: function(data) {
	      $('#error').html(data.responseJSON.error);
	    }
	  });
	},
	close : function() {
		this.remove();
		this.unbind();
	}
});
(function($) {
  window.Router = Backbone.Router.extend({
    routes: {
        "": "login",
        "login" : "login",
        "register": "register",
        "user/:id": "user"
    },
    login: function() {
        var loginView = new LoginView();
    },
    register: function() {
      var registerView = new RegisterView();
    },
    user: function(id) {
      var user = new User({ id: id });
      var userView = new UserView({ model: user });
    }
  });
  app = new Router();
  Backbone.history.start();
  // Globals
  window.access_token = null;
  window.current_user = 0;
})(jQuery);
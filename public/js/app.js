(function($) {
  $.ajaxSetup({
    statusCode: {
        401: function(){
            // Redirec the to the login page.
            window.location.replace('/#login');
        },
        403: function() {
            // 403 -- Access denied
            window.location.replace('/#denied');
        }
    }
  });
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

    }
  });
  app = new Router();
  Backbone.history.start();
})(jQuery);

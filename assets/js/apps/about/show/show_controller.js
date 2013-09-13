ContactManager.module('AboutApp.Show', function(Show, ContactManager, Backbone, Marionette, $, _){
  Show.Controller = {
    showAbout: function() {
      var aboutView = new Show.About({});
      ContactManager.mainRegion.show(aboutView);
    }
  }
});
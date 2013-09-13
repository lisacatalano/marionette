ContactManager.module('AboutApp.Show', function(Show, ContactManager, Backbone, Marionette, $, _){

  Show.About = Marionette.ItemView.extend({
    template: "#about-message"
  });
});
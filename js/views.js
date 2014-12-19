ContactManager.module("Common.Views", function(Views, ContactManager, Backbone, Marionette, $, _){
  Views.Loading = Marionette.ItemView.extend({
    template: "#loading-view",

    title: "Loading Data",
    message: "Please wait, data is loading.",

    serializeData: function(){
      return {
        title: Marionette.getOption(this, "title"),
        message: Marionette.getOption(this, "message")
      }
    },

    onShow: function(){
      var opts = {
        lines: 13, 
        length: 20, 
        width: 10, 
        radius: 30, 
        corners: 1, 
        rotate: 0, 
        direction: 1, 
        color: "#000", 
        speed: 1, 
        trail: 60, 
        shadow: false, 
        hwaccel: false, 
        className: "spinner", 
        top: "30px", 
        left: "auto" 
      };
      $("#spinner").spin(opts);
    }
  });
});

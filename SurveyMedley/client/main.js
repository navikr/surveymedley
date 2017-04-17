import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';


Template.main.events({
  'click .js-login': function(event) {
    // increment the counter when button is clicked
    console.log("Came here")
    $('#login_form').modal('show');
    //Router.go("/signup");
  },
  'click .js-home': function(event) {
    // increment the counter when button is clicked
    console.log("Came here")
    Router.go("/userHome");
    //Router.go("/signup");
  },
  'click .js-signup': function(event) {
    // increment the counter when button is clicked
    console.log("Came here")
    $('#signup_form').modal('show');
    //Router.go("/signup");
  }
});

/*Template.updates.events({
  'click .btn-primary': function(event){
      $(".collapse").collapse('toggle');
  },
  'click .js-update-toggle': function(event){
    console.log("came in even of", this._id);
    id=this._id;
    $("#"+id).collapse('toggle')
  }
});*/
Template.updates.helpers({
  CAupdates: function()
  {
    return Updates.find({});
  }
});

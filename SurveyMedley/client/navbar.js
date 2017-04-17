
Template.navbar.events({
  "click .js-logout-a": function(event){
    event.preventDefault();
      Meteor.logout();
      Router.go('/');
  }
});

Template.navbar.helpers({
  loginUserName:function(){
      return Meteor.user().username;
  },
  siteLoyalty:function(){
    siteId=Meteor.user().profile.siteId;
    Session.set("SiteId",siteId);
    siteDetails=Sites.find({siteId:parseInt(siteId)}).fetch();
    if(siteDetails.length >0)
    {
      Session.set("SiteLoyalty",siteDetails[0].siteLoyalty);
      return siteDetails[0].siteLoyalty;
    }
    return false;
  }
});

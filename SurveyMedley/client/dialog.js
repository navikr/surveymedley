Template.surveyForm.onRendered(function(){
  osat=$('#OSAT').slider();
  osatp=$('#OSATP').slider();
  ltr=$('#LTR').slider();
  cse=$('#CSE').slider();
  pres=$('#PRES').slider();
  $('#osatval').text(osat.slider('getValue'));
  $('#osatpval').text(osatp.slider('getValue'));
  $('#ltrval').text(ltr.slider('getValue'));
  $('#cseval').text(cse.slider('getValue'));
  $('#presval').text(pres.slider('getValue'));
});
Template.surveyForm.events({
  "click .slider":function(event){
    event.preventDefault();
    osat.slider('setValue',osat.slider('getValue'));
    $('#osatval').text(osat.slider('getValue'));
    osatp.slider('setValue',osatp.slider('getValue'));
    $('#osatpval').text(osatp.slider('getValue'));
    ltr.slider('setValue',ltr.slider('getValue'));
    $('#ltrval').text(ltr.slider('getValue'));
    cse.slider('setValue',cse.slider('getValue'));
    $('#cseval').text(cse.slider('getValue'));
    pres.slider('setValue',pres.slider('getValue'));
    $('#presval').text(pres.slider('getValue'));
  },
  "click .js-survey-save-btn":function(event){
    Surveys.update({_id:Session.get("FeedbackId")},{$set:{OSAT:osat.slider('getValue'),OSATWithProduct:osatp.slider('getValue'),LTR:ltr.slider('getValue'),contactSupportEasy:cse.slider('getValue'),promptResponse:pres.slider('getValue'),status:SurveyStatus.Incompleted}});
  },
  "click .js-survey-submit-btn":function(event){
    Surveys.update({_id:Session.get("FeedbackId")},{$set:{OSAT:osat.slider('getValue'),OSATWithProduct:osatp.slider('getValue'),LTR:ltr.slider('getValue'),contactSupportEasy:cse.slider('getValue'),promptResponse:pres.slider('getValue'),status:SurveyStatus.Completed}});
    existingLoyalty=Session.get("SiteLoyalty");
    existingLoyalty=existingLoyalty+10;
    sitedetailIds=Sites.find({siteId:parseInt(Session.get("SiteId"))}).fetch();
    currentsiteId=sitedetailIds[0]._id;
    Sites.update({_id:currentsiteId},{$set:{siteLoyalty:existingLoyalty}});
  }
});
Template.surveyForm.helpers({
  feedbackSurvey:function(){
    return Surveys.find({_id:Session.get("FeedbackId")});
  }
});


Template.signup.events({
  "click .js-register-user-btn": function(event){
    event.preventDefault();
    console.log("Form Submitted");
        var email = $('[name=email]').val();
        var password = $('[name=pwd]').val();
        var username = $('[name=username]').val();
        var firstname=$('[name=firstname]').val();
        var lastname=$('[name=lastname]').val();
        var siteId=$('[name=siteId]').val();
        var userObject={
          email:email,
          username:username,
          password:password,
          profile:{
            firstname:firstname,
            lastname:lastname,
            siteId:siteId
          }
        }
        var id=Accounts.createUser(userObject, function(err){
          if(err)
          {
            Bert.alert('Unable to add User! '+ err.reason, 'danger');
            $("#signup_form").modal('hide');
          }
          else{
            Bert.alert('User successfully created', 'success');
            $("#signup_form").modal('hide');
            $("#signup_form").find('input').val('');
            $('.modal-backdrop').remove();
            Router.go('userHome');
          }
        });
    }//end of add-user
});

Template.login.events({
  "click .js-login-usr-btn": function(event){
    //event.preventDefault();
    var email = $('[name=emailId]').val();
    var password = $('[name=password]').val();

    Meteor.loginWithPassword(email,password, function(err){
      if(err)
      {
        Bert.alert('Invalid Login! '+ err.reason, 'danger');
      }
      else {
        console.log("login successful");
        $("#login_form").modal('hide');
        //$('body').removeClass('modal-open');
        $('.modal-backdrop').remove();
        Router.go('userHome');
      }
    });
  }
});//login template end

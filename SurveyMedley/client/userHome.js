Template.userHome.helpers({
  IncompletedSurveys: function(){
     return Surveys.find({status:SurveyStatus.Incompleted});
  },
  NotStartedSurveys:function()
  {
    return Surveys.find({status:SurveyStatus.NotStarted});
  },
  IncompletedSurveysCount:function()
  {
     return Surveys.find({status:SurveyStatus.Incompleted}).count();
  },
  NotStartedSurveysCount:function()
  {
    return Surveys.find({status:SurveyStatus.NotStarted}).count();
  },
});
Template.userHome.events({
  'click #fbtn':function(event){
    event.preventDefault();
    Session.set("FeedbackId",this._id);
    $("#survey_form").modal('show');
  }
});

Updates = new Mongo.Collection("Updates");
Surveys=new Mongo.Collection("Surveys");
Sites=new Mongo.Collection("Sites");
console.log("Total Updates Count: " + Updates.find().count());
console.log("Total Surveys Count: " + Surveys.find().count());
console.log("Total Unfilled Surveys: ")+ Surveys.find({status:"Incomplete"})
SurveyStatus={
  NotStarted:0,
  Incompleted:1,
  Completed:2
}

Template.projectSubmission.events({
  // project submission events
  'submit form': function(){
    event.preventDefault();
    var projectNameVar = event.target.projectName.value;
    var projectIDVar = event.target.projectID.value;
    Projects.insert({
      project_name: projectNameVar,
      project_id: projectIDVar
    })
    event.target.projectName.value="";
    event.target.projectID.value="";
  }
})

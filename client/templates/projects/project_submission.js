Template.projectSubmission.events({
  // project submission events todo clean up
//   'submit form': function() {
//     event.preventDefault();
//     form={};
//
//     $.each($('#myform').serializeArray(), function() {
//         form[this.name] = this.value;
//     });
//   console.log(form);
// },


  'submit form': function(){
    event.preventDefault();
    var projectNameVar = event.target.projectName.value;
    var projectIDVar = event.target.projectID.value;
    var projectDescriptionVar = event.target.projectDescription.value;
    var initialPaperworkVar = event.target.initialPaperwork.value;
    var HOAReviewVar = event.target.HOAReview.value;
    var noticeCommencementVar = event.target.noticeCommencement.value;
    var engineeringVar = event.target.engineering.value;
    var permitRequestVar = event.target.permitRequest.value;
    var constructionStartVar = event.target.constructionStart.value;
    var constructionOngoingVar = event.target.constructionOngoing.value;
    var inspectionVar = event.target.inspection.value;
    var constructionDelayVar = event.target.constructionDelay.value;
    var constructionCompletedVar = event.target.constructionCompleted.value;
    var projectStatusVar = event.target.projectStatus.value;

    newProject = {
      project_name: projectNameVar,
      project_id: projectIDVar,
      project_description: projectDescriptionVar,
      processing_initial_paperwork: initialPaperworkVar,
      architectural_HOA_review: HOAReviewVar,
      filing_notice_of_commencement: noticeCommencementVar,
      in_Engineering: engineeringVar,
      requesting_permits: permitRequestVar,
      construction_start_date_being_scheduled: constructionStartVar,
      construction_ongoing: constructionOngoingVar,
      waiting_for_inspection: inspectionVar,
      construction_delayed: constructionDelayVar,
      construction_completed: constructionCompletedVar,
      project_status: projectStatusVar
    };

    Router.go('projectList');


  },
  'click .notStarted': function() {
    var workEvent = event.target;
    console.log(workEvent);
    if(workEvent.value === "Not Started") {
      workEvent.value ="Started";
    }else {
      workEvent.value ="Not Started";
    }


  }
})

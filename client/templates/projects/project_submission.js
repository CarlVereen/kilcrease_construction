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


  'submit form': function(e){
    e.preventDefault();

    var newProject = {
      project_name:  $(e.target).find('[name=projectName]').val(),
      project_id: $(e.target).find('[name=projectID]').val(),
      project_description: $(e.target).find('[name=projectDescription]').val(),
      processing_initial_paperwork: $(e.target).find('[name=initialPaperwork]').val(),
      architectural_HOA_review:  $(e.target).find('[name=HOAReview]').val(),
      filing_notice_of_commencement: $(e.target).find('[name=noticeCommencement]').val(),
      in_Engineering: $(e.target).find('[name=engineering]').val(),
      requesting_permits: $(e.target).find('[name=permitRequest]').val(),
      construction_start_date_being_scheduled: $(e.target).find('[name=constructionStart]').val(),
      construction_ongoing: $(e.target).find('[name=constructionOngoing]').val(),
      waiting_for_inspection: $(e.target).find('[name=inspection]').val(),
      construction_delayed: $(e.target).find('[name=constructionDelay]').val(),
      construction_completed: $(e.target).find('[name=constructionCompleted]').val(),
      project_status: $(e.target).find('[name=projectStatus]').val(),
    };

    newProject._id = Projects.insert(newProject);

    Router.go('projectPage', newProject);


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

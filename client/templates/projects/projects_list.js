
Template.projectList.helpers({
  project: function() {
  return Projects.find();
},
  color: function() {
    var projects = Projects.find();
    projects.forEach(function(doc){
      var element = doc.project_id;
      if(doc.processing_initial_paperwork==="Not Started"){
        console.log(element);
        element.addClass("redCircle");

      }else{
        element.addClass("greenCircle");
        console.log(element);
      }
      console.log(doc.processing_initial_paperwork);
    });
  },
  // htmlID: function(){
  //   var projects = Projects.find();
  //   var id = [];
  //   projects.forEach(function(doc){
  //     id.push(doc.project_id);
  //   })
  //   console.log(id);
  // }
});

Template.projectList.events({
  'click .delete': function () {
    Projects.remove(this._id);
  }
});

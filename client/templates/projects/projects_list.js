
Template.projectList.helpers({
  project: function() {
  return Projects.find();
}
});

Template.projectList.events({
  'click .delete': function () {
    Projects.remove(this._id);
  }
});

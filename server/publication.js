Meteor.publish('project', function() {
  return Projects.find();
});

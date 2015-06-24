Router.configure({
  layoutTemplate: 'layout',
  loadTemplate: 'loading',
  waitOn: function() { return Meteor.subscribe('project'); }
});

Router.route('/', {name: 'homePage'});
//Router.route('/project/:_id', { name: 'projectPage', data: function() { return Projects.findOne(this.params._id); }});
Router.route('/project/submission', { name: 'projectSubmission'});
Router.route('/project/projectlist', { name: 'projectList'});

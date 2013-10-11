App = Ember.Application.create();

App.Router.map(function() {
    this.route("about");
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return [
        {firstName: 'James', lastName: 'Smith'},
        {firstName: 'John', lastName: 'Doe'},
        {firstName: 'Bob', lastName: 'Joe'}
    ];
  }
});
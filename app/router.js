import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('main');
  this.route('cv', { path: '/cv/:id'});
});

export default Router;

import JSONAPIAdapter from 'ember-data/adapters/json-api';
import DS from 'ember-data'

export default JSONAPIAdapter.extend({
});

export default DS.RESTAdapter.extend({
  namespace: 'api',
  host: 'http://localhost:8080'
});

import JSONAPIAdapter from 'ember-data/adapters/json-api';
import DS from 'ember-data'

export default JSONAPIAdapter.extend({
});

export default DS.RESTAdapter.extend({
  namespace: 'api',
  host: 'http://192.168.26.178:8080'
});

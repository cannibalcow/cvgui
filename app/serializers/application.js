import JSONAPISerializer from 'ember-data/serializers/json-api';
import DS from 'ember-data';

export default JSONAPISerializer.extend({
  extract: function(loader, json, type, record) {
    console.log(json);
  }
});

export default DS.RESTSerializer.extend({
	primaryKey: '_id',
  serializeId: function(id) {
    return id.toString();
  }
});

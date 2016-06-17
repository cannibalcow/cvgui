import Model from 'ember-data/model';
import DS from 'ember-data';

// import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  _id: DS.attr('string'),
  employee: DS.attr(),
  description: DS.attr(),
  properties: DS.attr(),
  previousAssignments: DS.attr()
});

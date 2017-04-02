import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  hp: DS.attr('number'),
  year: DS.attr('number'),
  price: DS.attr('number')
});

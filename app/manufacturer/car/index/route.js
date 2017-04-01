import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    const id = this.paramsFor('manufacturer.car').id;

    return this.store.findRecord('brand', id);
  }
});

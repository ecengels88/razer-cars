import Ember from 'ember';
// import config from 'razer-cars/config/environment';

export default Ember.Controller.extend({
  formValues: {
    name: '',
    country: ''
  },

  actions: {
    save() {
      const brand = this.store.createRecord('brand', this.formValues);
      brand.set('manufacturer', this.model);
      return brand.save().then(() => {
        this.set('formValues', {});
        this.transitionToRoute('manufacturer');
      });
    },

    // save() {
    //   fetch(`${config.apiUrl}`, {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json', accept: 'application/json' },
    //     body: JSON.stringify(this.formValues),
    //   }).then(r => r.json())
    //     .then(data => {
    //     this.transitionToRoute('manufacturer'),
    //     this.set('formValues', {});
    //   })
    // }
  }
});

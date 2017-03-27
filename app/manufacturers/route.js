import Ember from 'ember';
import config from 'razer-cars/config/environment';

export default Ember.Route.extend({
  model(brands) {
    return fetch(`${config.apiUrl}`)
      .then(r => r.json(brands));
  }
});

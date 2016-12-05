import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save(formValues) {
      this.store.createRecord('profile', formValues)
        .save()
        .then(() => {
          this.transitionToRoute('bio.index');
        });
    }
  }
});

import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),

  actions: {
    saveUser(formValues) {
      // Create a new user model
      const user = this.store.createRecord('user', formValues);

      // Save the new user model
      user.save()
        .then(() => {
          const secretStuff = {
            identification: formValues.email,
            password: formValues.password,
          };
          const authenticator = 'authenticator:jwt';

          // Login user
          this.get('session').authenticate(authenticator, secretStuff);

          // Redirect why not?
        }) // Look ma no semi-colon here cause I'm chainin'
        .catch(() => {
          alert('Error Creating User');
        })
    }
  }
});

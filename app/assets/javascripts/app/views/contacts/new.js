App.NewContactView = Em.Form.extend({
  templateName: 'app/templates/contacts/new',

  submitForm: function() {
    var data = this.serialize();

    var valid = App.Contact.validateProperties(data);

    if (valid === true) {
      // save the parentView so that this view can be hidden
      // after saving this record
      var parentView = this.get("parentView");

      App.contactsController.create(data)
        .done(function() {
          parentView.set('showNew', false)
        });
    }
    else {
      alert(valid);
    }
  }
});
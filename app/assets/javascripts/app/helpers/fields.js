Handlebars.registerHelper('textField', function(property) {
  var value = Em.getPath(this, property);
  if (value === undefined)
    value = "";
  return new Handlebars.SafeString('<input name="'+property+'" value="' + value + '" />');
});
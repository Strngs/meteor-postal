/**
 * Postal - Meteor package for the postal event bus
 * https://github.com/postaljs/postal.js
 */

Package.describe({
  name: "strngs:postal",
  summary: "Meteor package for the postal event bus",
  version: "1.0.0",
  git: "https://github.com/Strngs/postal"
});

Package.on_use(function(api){
  both = ['client','server']

  api.versionsFrom('1.0');

  api.use([
    'stevezhu:lodash'
  ], both);

  api.add_files([
    'lib/postal.js'
  ], both);

  api.export('postal', both);
});

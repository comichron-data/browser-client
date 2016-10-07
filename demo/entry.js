var client = require('../');

client.titles(function(error, titles) {
  if (error) return console.error(error);

  console.log('got ' + titles.length + ' titles');
});

client.byMonth('shutter-image', function(error, records) {
  if (error) return console.error(error);

  console.log('got ' + records.length + ' by-month records for shutter');
});

client.byIssue('saga-image', function(error, records) {
  if (error) return console.error(error);

  console.log('got ' + records.length + ' by-issue records for saga');
});

client.sourceData(2010, 5, function(error, sourceRecords) {
  if (error) return console.error(error);

  console.log('got ' + sourceRecords.length + ' source records for May 2010');
});

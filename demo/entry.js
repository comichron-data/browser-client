var client = require('../');

client.titles(function(error, titles) {
  if (error) return console.error(error);

  console.log('got ' + titles.length + ' titles');
});

client.byMonth('shutter-image', function(error, data) {
  if (error) return console.error(error);

  var records = data.records;
  console.log('got ' + records.length + ' by-month records for ' + data.title);
});

client.byIssue('saga-image', function(error, data) {
  if (error) return console.error(error);

  var records = data.records;
  console.log('got ' + records.length + ' by-issue records for ' + data.title);
});

client.sourceData(2010, 5, function(error, sourceRecords) {
  if (error) return console.error(error);

  console.log('got ' + sourceRecords.length + ' source records for May 2010');
});

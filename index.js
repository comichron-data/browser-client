var urls = require('comichron-data-urls');

module.exports = {
  titles: titles,
  byMonth: byMonth,
  byIssue: byIssue,
  sourceData: sourceData
};

function titles(callback) {
  sendXhr(urls.titles(), callback);
}

function byMonth(id, callback) {
  sendXhr(urls.byMonth(id), callback);
}

function byIssue(id, callback) {
  sendXhr(urls.byIssue(id), callback);
}

function sourceData(year, month, callback) {
  sendXhr(urls.sourceData(year, month), callback);
}

function sendXhr(url, callback) {
  var req = new XMLHttpRequest();

  req.addEventListener('load', function onLoad(event) {
    if (req.status >= 400) {
      return onFail(event);
    }

    var json = JSON.parse(this.responseText);
    return callback(null, json);
  });

  req.addEventListener('error', onFail);
  req.addEventListener('abort', onFail);

  function onFail(event) {
    callback(makeError(req, url, event));
  }

  req.open('GET', url);
  req.send();
}

function makeError(req, url, xhrEvent) {
  var error = new Error('Unable to GET ' + url);
  error.statusCode = req.status;
  error.url = url;
  error.event = xhrEvent;
  return error;
}

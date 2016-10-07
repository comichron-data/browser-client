var baseUrl = 'https://comichron-data.github.io';

module.exports = {
  titles: titles,
  byMonth: byMonth,
  byIssue: byIssue
};

function titles(callback) {
  makeXhr(baseUrl + '/api/titles.json', callback).send();
}

function byMonth(id, callback) {
  var url = baseUrl + '/api/titles/' + id + '/by-month.json';
  makeXhr(url, callback).send();
}

function byIssue(id, callback) {
  var url = baseUrl + '/api/titles/' + id + '/by-issue.json';
  makeXhr(url, callback).send();
}

function makeXhr(url, callback) {
  var req = new XMLHttpRequest();

  req.addEventListener('load', function onLoad(event) {
    if (req.status == 500) {
      return callback(makeError(req, url, event));
    } else if (req.status % 400 < 100) {
      return callback(makeError(req, url, event));
    } else {
      var json = JSON.parse(this.responseText);
      return callback(null, json);
    }
  });

  req.addEventListener('error', function onError(event) {
    callback(makeError(req, url, event));
  });

  req.addEventListener('abort', function onAbort(event) {
    callback(makeError(req, url, event));
  });

  req.open('GET', url);
  return req;
}

function makeError(req, url, xhrEvent) {
  var error = new Error('Unable to GET ' + url);
  error.statusCode = req.status;
  error.url = url;
  error.event = xhrEvent;
  return error;
}

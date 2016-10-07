# comichron-data/browser-client

xhr-based client for https://github.com/comichron-data/api

## Install

`npm install comichron-data-browser-client --save`

## Usage

See [demo entry file](https://github.com/comichron-data/browser-client/blob/master/demo/entry.js) for usage examples.

## API

```js
var client = require('comichron-data-browser-client');
```

### client.titles(callback)

Get titles of all comics that have data in the api.

- callback - function with signature `function(error, titles)` where `error` is non-`null` if there was a failure. On success, `error` will be `null` and `titles` will be [json of the titles response](https://github.com/comichron-data/api#apititlesjson).

### client.byMonth(id, callback)

Get a comic's by-month data.

- id - Comic id from titles response
- callback - function with signature `function(error, records)` where `error` is non-`null` if there was a failure. On success, `error` will be `null` and `records` will be [json of the by-month response](https://github.com/comichron-data/api#apititlesidby-monthjson).

### client.byIssue(id, callback)

Get a comic's by-issue data.

- id - Comic id from titles response
- callback - function with signature `function(error, records)` where `error` is non-`null` if there was a failure. On success, `error` will be `null` and `records` will be [json of the by-issue response](https://github.com/comichron-data/api#apititlesidby-issuejson).

### client.sourceData(year, month, callback)

Get source data for a specific year/month.

- year - 4 digit year. String or Number.
- month - 1 or 2 digit month. January is 1. String or Number.
- callback - function with signature `function(error, records)` where `error` is non-`null` if there was a failure. On success, `error` will be `null` and `records` will be [json of the source data response](https://github.com/comichron-data/api#apisource-datayear-monthjson).

## License

MIT

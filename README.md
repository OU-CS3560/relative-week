[![Relative Week](https://img.shields.io/endpoint?url=https://relative-week-ksraqzy7na-uk.a.run.app)](https://img.shields.io/endpoint?url=https://relative-week-ksraqzy7na-uk.a.run.app)

# Relative Week

An API endpoint that display a number of week since an arbitrary date. It also support a response format that is used by [Shields.io](https://shields.io/endpoint).

### Parameters

- `genesisDate` An ISO format date that represent the staring point. Note that we use week number of [ISO Week Date](https://en.wikipedia.org/wiki/ISO_week_date) internally. Note that the week starts on Monday and ends on Sunday. Default value is `2024-01-15` (15 January 2024).
- `tz` An [IANA timezone name](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). Default value is `America/New_York`.
- `format` The output format the function will response in. Choices of `shields-io-json`, `json` or `text`. The first is meant to be used with [Shields.io](https://shields.io/endpoint) while the 2nd outputs more information for debugging. The last format is just a plain text response.

## Dependencies

``` console
npm install
```

## Production Deployment

```console
gcloud functions deploy relative-week \
        --gen2 \
        --runtime=nodejs18 \
        --region=<region> \
        --source=. \
        --entry-point=relativeWeek \
        --trigger-http \
        --allow-unauthenticated
```

## Local Development

``` console
npm run dev
```

``` console
curl http://127.0.0.1:8080/
```

## Test

``` console
npm test
```

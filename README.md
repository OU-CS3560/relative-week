[![Relative Week](https://img.shields.io/endpoint?url=https://relative-week-ksraqzy7na-uk.a.run.app)](https://img.shields.io/endpoint?url=https://relative-week-ksraqzy7na-uk.a.run.app)

# Relative Week

An API endpoint that returns a number of week since an arbitrary date. It also support a response format that is used by [Shields.io](https://shields.io/endpoint).

## Usage

To include this in your Blackboard course, in the content editor, click "Edit source" then paste in the following HTML fragment.

```html
<a href="https://github.com/OU-CS3560/relative-week" target="_blank" rel="nofollow"><img src="https://img.shields.io/endpoint?url=https://relative-week-ksraqzy7na-uk.a.run.app?genesisDate=2024-01-15" alt="Relative Week" style="max-width: 100%;" /></a>
```

To include the badge in a markdown file on GitHub, add

```markdown
![Relative Week](https://img.shields.io/endpoint?url=https://relative-week-ksraqzy7na-uk.a.run.app?genesisDate=2024-01-15)
```

Note that any parameter for Shields.io can be overwritten. For example, if you want to remove the word "(relative)" from the
label, you can provide your own label.

```markdown
![Relative Week](https://img.shields.io/endpoint?label=Week&url=https://relative-week-ksraqzy7na-uk.a.run.app?genesisDate=2024-01-15)
```

## Parameters

- `genesisDate` An ISO format date that represent the staring point. Note that we use week number of [ISO Week Date](https://en.wikipedia.org/wiki/ISO_week_date) internally. The week starts on Monday and ends on Sunday. The default value is `2024-01-15` (15 January 2024).
- `tz` An [IANA timezone name](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). The default value is `America/New_York`.
- `format` The output format the function will response in. Choices of `shields-io-json`, `json` or `text`. The first is meant to be used with [Shields.io](https://shields.io/endpoint) while the 2nd outputs more information for debugging. The last format is just a plain text response. The default value is `shields-io-json`.

## Dependencies

``` console
npm install
```

## Production Deployment

```console
gcloud functions deploy relative-week \
        --gen2 \
        --runtime=nodejs20 \
        --region=us-east4 \
        --source=. \
        --entry-point=relativeWeek \
        --trigger-http \
        --allow-unauthenticated
```

## Local Development

``` console
npm run dev
```

Then you can visit the URL show on the terminal.

## Test

``` console
npm test
```

[![Relative Week](https://img.shields.io/endpoint?url=https://relative-week-ksraqzy7na-uk.a.run.app)](https://img.shields.io/endpoint?url=https://relative-week-ksraqzy7na-uk.a.run.app)

# Relative Week

An API endpoint that display a number of week since an arbitrary date. It also support a response format that is used by Shields.io.

Note that the genesis data has to start on Sunday of the first week, otherwise, the next Sunday will still be counted as the first week.

## Dependencies

``` console
npm install
```

## Production Deployment

```console
gcloud functions deploy relative-week \
        --gen2 \
        --runtime=nodejs16 \
        --region=<region> \
        --source=. \
        --entry-point=relativeWeek \
        --trigger-http \
        --allow-unauthenticated
```

## Local Development

``` console
npm run start
```

``` console
curl http://127.0.0.1:8080/
```

## Test

``` console
npm test
```

## Note

### Features

- [ ] Obtain semester start date from the academic calendar.
- [ ] Show the dates that begins and ends the week (sun-sat).
- [ ] Show a week number relative to the given starting date.

## Design Note

### Previous Implementation

https://github.com/krerkkiat/functions/tree/main/week-in-semester was for GCP's Cloud Functions.

### Obtaining the start date of a semester

https://developer.localist.com/doc/api#event-search

Original request on the academic calendar page for fall semester 2022-23

```console
YEAR_START=2022-01-01
YEAR=2022-23
KEYWORDS="&keyword[]=academic%20year%20${YEAR}&keyword[]=fall%20semester"
curl "https://calendar.ohio.edu/api/2/events?group_id=32680652852643&${KEYWORDS}require_all=true&days=365&pp=100&start=${YEAR_START}" \
--globoff -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:94.0) Gecko/20100101 Firefox/94.0' \
-H 'Accept: */*' -H 'Accept-Language: en-US,en;q=0.5' \
--compressed -H 'Origin: https://www.ohio.edu' -H 'Connection: keep-alive' \
-H 'Referer: https://www.ohio.edu/' -H 'Sec-Fetch-Dest: empty' \
-H 'Sec-Fetch-Mode: cors' -H 'Sec-Fetch-Site: same-site' -H 'Pragma: no-cache' \
-H 'Cache-Control: no-cache' | \
jq ".events[] | .event.title"
```

Original request on the academic calendar page for full summer semester 2021-22.

```console
YEAR_START=2022-01-01
YEAR=2021-22
KEYWORDS="&keyword[]=academic%20year%20${YEAR}&keyword[]=summer%201st%20session&keyword[]=summer%202nd%20session&keyword[]=summer%20full%20semester"
curl "https://calendar.ohio.edu/api/2/events?group_id=32680652852643${KEYWORDS}&require_all=true&days=365&pp=100&start=${YEAR_START}" \
--globoff -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:94.0) Gecko/20100101 Firefox/94.0' \
-H 'Accept: */*' -H 'Accept-Language: en-US,en;q=0.5' \
--compressed -H 'Origin: https://www.ohio.edu' -H 'Connection: keep-alive' \
-H 'Referer: https://www.ohio.edu/' -H 'Sec-Fetch-Dest: empty' \
-H 'Sec-Fetch-Mode: cors' -H 'Sec-Fetch-Site: same-site' -H 'Pragma: no-cache' \
-H 'Cache-Control: no-cache' | \
jq ".events[] | .event.title"
```

Attempt to query all four semesters (fall, spring, 1st semester, 2nd semester). The `require_all=true` filters only event with all the keywords.

```console
YEAR_START=2021-08-01
YEAR=2021-22
KEYWORDS="&keyword[]=academic%20year%20${YEAR}&keyword[]=fall%20semester&keyword[]=spring%20semester&keyword[]=summer%201st%20session&keyword[]=summer%202nd%20session&keyword[]=summer%20full%20semester"
curl "https://calendar.ohio.edu/api/2/events?group_id=32680652852643&${KEYWORDS}&days=365&pp=200&start=${YEAR_START}" \
--globoff -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:94.0) Gecko/20100101 Firefox/94.0' \
-H 'Accept: */*' -H 'Accept-Language: en-US,en;q=0.5' \
--compressed -H 'Origin: https://www.ohio.edu' -H 'Connection: keep-alive' \
-H 'Referer: https://www.ohio.edu/' -H 'Sec-Fetch-Dest: empty' \
-H 'Sec-Fetch-Mode: cors' -H 'Sec-Fetch-Site: same-site' -H 'Pragma: no-cache' \
-H 'Cache-Control: no-cache' | \
jq ".events[] | .event.title"
```

Search it with `semester opening date`

```console
YEAR_START=2021-07-01
KEYWORD="opening%20date"
curl "https://calendar.ohio.edu/api/2/events/search?search=${KEYWORD}&group_id=32680652852643&days=365&pp=100&start=${YEAR_START}" \
--globoff -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:94.0) Gecko/20100101 Firefox/94.0' \
-H 'Accept: */*' -H 'Accept-Language: en-US,en;q=0.5' \
--compressed -H 'Origin: https://www.ohio.edu' -H 'Connection: keep-alive' \
-H 'Referer: https://www.ohio.edu/' -H 'Sec-Fetch-Dest: empty' \
-H 'Sec-Fetch-Mode: cors' -H 'Sec-Fetch-Site: same-site' -H 'Pragma: no-cache' \
-H 'Cache-Control: no-cache' | \
jq ".events[] | .event.title"
```

```console
curl 'https://calendar.ohio.edu/api/2/events?group_id=32680652852643&keyword[]=academic%20year%202021-22&keyword[]=summer%201st%20session&keyword[]=summer%202nd%20session&keyword[]=summer%20full%20semester&days=365&pp=100' --globoff -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:94.0) Gecko/20100101 Firefox/94.0' -H 'Accept: */*' -H 'Accept-Language: en-US,en;q=0.5' --compressed -H 'Origin: https://www.ohio.edu' -H 'Connection: keep-alive' -H 'Referer: https://www.ohio.edu/' -H 'Sec-Fetch-Dest: empty' -H 'Sec-Fetch-Mode: cors' -H 'Sec-Fetch-Site: same-site' -H 'Pragma: no-cache' -H 'Cache-Control: no-cache' -H 'TE: trailers'
```

### Badge Generation

- https://shields.io/endpoint
- Cloudflare worker CLI https://developers.cloudflare.com/workers/wrangler/

# Weeks

How many weeks have passed since date X?

## Note

### Features

- [ ] Obtain semester start date from the academic calendar.
- [ ] Show the dates that begins and ends the week (sun-sat).
- [ ] Show a week number relative to the given starting date.

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

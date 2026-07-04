# Deploy `drdurairajarjunan.com`

This repository is the dedicated public GitHub Pages target for
`drdurairajarjunan.com`.

## GitHub Pages

1. Open the repository settings for `Neurabrix/drdurairajarjunan.com`.
2. Go to **Pages**.
3. Set **Source** to `GitHub Actions`.
4. Run the `Deploy GitHub Pages` workflow if it has not run automatically.
5. Confirm the custom domain is `drdurairajarjunan.com`.
6. Enable **Enforce HTTPS** after GitHub finishes the DNS check.

The repository includes:

```text
CNAME
drdurairajarjunan.com
```

## GoDaddy DNS

Current DNS for `drdurairajarjunan.com` resolves to GoDaddy Website Builder.
Replace the apex `A` records with the GitHub Pages records:

```text
Type  Name  Value
A     @     185.199.108.153
A     @     185.199.109.153
A     @     185.199.110.153
A     @     185.199.111.153
```

Optional IPv6 records:

```text
Type  Name  Value
AAAA  @     2606:50c0:8000::153
AAAA  @     2606:50c0:8001::153
AAAA  @     2606:50c0:8002::153
AAAA  @     2606:50c0:8003::153
```

For `www`, create:

```text
Type   Name  Value
CNAME  www   neurabrix.github.io
```

DNS may update within an hour, but global propagation can take up to 48 hours.

## Verify

```bash
dig drdurairajarjunan.com +noall +answer -t A
dig www.drdurairajarjunan.com +noall +answer -t CNAME
curl -I https://drdurairajarjunan.com
```

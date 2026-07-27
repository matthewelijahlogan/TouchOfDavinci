# Touch of DaVinci Studios

The studio portal for Touch of DaVinci. It is a lightweight static site with a
data-driven gallery of the web services built by the studio.

## Add another project

Add one object to the `projects` array in `public/app.js`. Each project supports:

- title and subtitle
- description
- live URL and status
- tags
- a `signal`, `console`, `image`, or custom visual treatment

## Local preview

Serve the `public` directory with any static file server:

```bash
python -m http.server 8080 --directory public
```

Then open `http://localhost:8080`.

## Render

The root `render.yaml` defines a free static site named `touchofdavinci`.

1. Push this folder to a Git repository.
2. In Render, create a Blueprint from that repository.
3. Render reads `render.yaml` and publishes the `public` directory.

The requested production URL is:

`https://touchofdavinci.onrender.com`

Render assigns the final `onrender.com` URL when the service is created.

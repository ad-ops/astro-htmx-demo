# Astro HTMX Demo

Extremly simple [Astro](https://astro.build/), [htmx](https://htmx.org/), [Turso](https://turso.tech/) setup to show how it works. Also added [DaisyUI (Tailwind)](https://daisyui.com/) to make it prettier.

Turso (SQLite) in-memory db to show how the htmx routes could look like. It is easy to replace with a file-db or use Turso as it is supposed to with a distributed storage.

What I like about this setup is mainly the DX (Developer Experience) which gives you:
- Realtime compile cycle with HMR (<10ms).
- Simple file-based routing. Just create a new page or htmx endpoint by creating a file.
- JSX-like syntax for generating HTML with components.
- Easy to use Javascipt libraries and ecosystem.
- Can mix static and SSR (Server-Side Rendered) endpoints in a multi-page app.

## Run
```sh
npm install
npm run dev -- --open
```
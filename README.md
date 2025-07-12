# Creature Rock Website

Static band site powered by Eleventy + Decap CMS, deployable to GitHub Pages.

## Local development

Install dependencies once:

```bash
npm install
```

To preview the site and use the CMS locally open two terminals:

1. Start the Eleventy development server
   ```bash
   npm start
   ```
   This serves the site at [http://localhost:8080](http://localhost:8080).
2. Start the Netlify CMS proxy server
   ```bash
   npm run cms
   ```
   The CMS will then be available at [http://localhost:8080/admin](http://localhost:8080/admin) and changes you make will be saved to your local repository.

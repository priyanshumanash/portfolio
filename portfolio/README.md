# Portfolio — how to edit

Open `index.html` in a browser to view it. No build step needed.

**You only edit `data.js`.**

- **Project links:** each project has `links: [{ label, url }]`. Paste a GitHub URL or a PDF path into `url`. Empty links are hidden on the live site.
- **PDFs:** put them in `docs/` and use `url: "docs/report-name.pdf"`. Each link's `file` note tells you which of your reports it is meant to be.
- **Certificates:** set `credly` to the badge URL. For `image`, either paste the badge image address from Credly (right-click the badge → Copy image address) or save the image into `assets/certs/` and use `"assets/certs/name.png"`.
- **Check missing links:** open `index.html?edit`. Every empty slot shows as a dashed "+ add" button.
- **Photo:** `assets/banner.jpg` (desktop) and `assets/banner-mobile.jpg` (phone).

Before publishing, remove certificates you don't hold and confirm the TryHackMe rank and the Build with AI wording.

To deploy, drag this folder into Vercel or Netlify, or push it to a GitHub Pages repository.

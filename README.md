# HAFLAW — GitHub Pages Website

Business: **HAFLAW**  
WhatsApp: **+234 803 447 9206**  
Location: **Opposite Reservoir, Osogbo Road, Ejigbo, Osun State**

## Publish for free on GitHub Pages
1. Extract this ZIP on your laptop.
2. Open `index.html` to preview the site.
3. On github.com, click **New repository**. Name it `haflaw` and choose **Public**.
4. Click **Add file → Upload files**. Upload the *contents* of this folder (not the ZIP or outer folder). Make sure `index.html` is at the repository root.
5. Click **Commit changes**.
6. In the repository, open **Settings → Pages**. Under **Build and deployment**, select **Deploy from a branch**, choose `main` and `/(root)`, and save.
7. Wait a few minutes and visit `https://YOUR-GITHUB-USERNAME.github.io/haflaw/`.

## Customise
- `config.js` holds business contact details for the WhatsApp booking links.
- `index.html` contains the visible address, services, text and opening hours. Update both files if those details change.
- `assets/logo.svg` is the included original HAFLAW logo.
- Replace the gallery placeholders in `index.html` with your dad's own photos. Put photos in `assets/` and use `<img src="assets/your-photo.jpg" alt="Description">` in the gallery tiles; add CSS to size them as needed.
- Prices are not shown: customers request a quote on WhatsApp.
- Booking requests open WhatsApp with a prepared message. The customer must press Send. They do **not** create a confirmed reservation automatically.

## Local booking tracker
`admin.html` is an optional **local-only** booking record tool using browser localStorage. It is NOT password-protected, shared, synced or a real online admin system. It can be accessed by anyone with the public URL, but each browser sees only its own locally saved records. Do not enter sensitive customer data into it. Export CSV backups to avoid losing records if the browser data is cleared. For secure multi-device admin access, you would need a hosted backend with authentication and a database.

## Checklist before launch
- Confirm spelling of business name and address, and that the WhatsApp number belongs to the business.
- Replace gallery placeholders with real, permitted business photos.
- Confirm the listed services and opening hours.
- Test WhatsApp booking on a phone.
- Confirm your dad is comfortable publishing the business contact number and approximate location.

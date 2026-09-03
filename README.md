# LeapScholar Pre-Departure Webinar — Simple Version

This version keeps the landing page focused on webinar registration while also capturing Flight, SIM and Forex requirements.

## Form captures
- Name
- Country (dropdown: UK, USA, Canada, Ireland, UAE, Germany, New Zealand, Australia, France, Italy, Spain, Others)
- Mobile
- Email
- Accommodation status
- Other services needed: Flight Booking, SIM Card, Forex Card, Nothing else (mutually exclusive with the others)

## Setup
1. Create a Google Sheet.
2. Extensions → Apps Script.
3. Paste `apps-script/Code.gs`.
4. Deploy → New deployment → Web app.
5. Execute as: Me.
6. Who has access: Anyone.
7. Copy the `/exec` URL.
8. In `index.html`, replace `PASTE_YOUR_APPS_SCRIPT_WEB_APP_URL_HERE`.
9. Update webinar date/time in `CONFIG`.
10. Host `index.html` on Vercel, Netlify, GitHub Pages, etc.

No counsellor/source attribution or UTM tracking is included.

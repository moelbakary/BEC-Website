# BEC Website — Beginner's Guide (No Coding Experience Needed)

This is the complete website for **Beverage Engineering Company (BEC)**, built with
**Next.js + Tailwind CSS** and ready to deploy on **Vercel** with your domain **bec-me.com**.

This guide assumes you have **never written a line of code**. Follow it top to bottom.
Each step tells you *exactly* what to click.

> ⏱️ Total time for a first-time setup: about **30–45 minutes**.

---

## 📁 What's in this folder

| Folder / File | What it is |
|---|---|
| `app/` | All the pages of the website |
| `components/` | Reusable building blocks (navbar, footer, forms, etc.) |
| `lib/site.js` | **Your company info** — phone numbers, emails, address (edit here) |
| `lib/dictionaries.js` | **All website text** in English + Arabic (edit here) |
| `public/BEC_Logo.png` | Your logo |
| `package.json` | The list of tools the project uses (don't touch) |

You will mostly only ever edit **two files**: `lib/site.js` and `lib/dictionaries.js`.

---

## 🚦 The big picture (3 phases)

1. **Run it on your own computer** to see it working (optional but recommended).
2. **Put it online for free** using GitHub + Vercel.
3. **Connect your domain** `bec-me.com`.

---

# PHASE 1 — Run the website on your computer (optional)

### Step 1 — Install Node.js
Node.js is the engine that runs the website on your computer.

1. Go to **https://nodejs.org**
2. Click the big green button that says **"LTS"** (Long Term Support).
3. Open the downloaded file and click **Next → Next → Install** until it finishes.

To confirm it worked:
- **Windows:** press the Windows key, type `cmd`, press Enter. A black window opens.
- **Mac:** press `Cmd + Space`, type `Terminal`, press Enter.

In that window, type this and press Enter:
```
node -v
```
If you see a version number like `v20.x.x`, you're good. ✅

### Step 2 — Open the project folder
In the same black window (Terminal / Command Prompt), type `cd ` (with a space),
then **drag the `bec-website` folder onto the window** and press Enter.
This moves you "into" the project folder.

### Step 3 — Install the website's tools
Type this and press Enter (it downloads everything the site needs — takes 1–2 minutes):
```
npm install
```

### Step 4 — Start the website
Type this and press Enter:
```
npm run dev
```
You'll see a line like `Local: http://localhost:3000`.
Open your web browser and go to **http://localhost:3000** — your website is live on your computer! 🎉

To stop it, click the black window and press `Ctrl + C`.

---

# PHASE 2 — Put the website online (free) with GitHub + Vercel

Vercel hosts Next.js websites for free and is made by the same team. We'll send the
code to GitHub first, then Vercel reads it from there.

### Step 5 — Create a GitHub account
1. Go to **https://github.com** and click **Sign up**. Follow the prompts.

### Step 6 — Upload the project to GitHub (the easy, no-command way)
1. On GitHub, click the **+** icon (top-right) → **New repository**.
2. **Repository name:** `bec-website`
3. Choose **Private** (recommended) or Public. Leave everything else as-is.
4. Click **Create repository**.
5. On the next page, click the link **"uploading an existing file"**.
6. Open your `bec-website` folder on your computer, select **all files and folders inside it**
   (Ctrl+A / Cmd+A), and **drag them into the GitHub upload box**.
   - ⚠️ Do **not** drag the `node_modules` folder if it exists — it's huge and not needed.
     (If you never ran `npm install`, you won't have it — perfect.)
7. Scroll down, click **Commit changes**.

### Step 7 — Create a Vercel account
1. Go to **https://vercel.com** → **Sign Up** → choose **Continue with GitHub**.
2. Approve the permission popup so Vercel can see your repositories.

### Step 8 — Deploy
1. In Vercel, click **Add New… → Project**.
2. Find **`bec-website`** in the list and click **Import**.
3. Vercel auto-detects Next.js. **Don't change any settings.**
4. Click **Deploy**.
5. Wait ~1–2 minutes. When it says **"Congratulations"**, click **Visit** — your site is live
   on a free `xxxxx.vercel.app` address! 🎉

---

# PHASE 3 — Connect your domain bec-me.com

### Step 9 — Add the domain in Vercel
1. In your Vercel project, click the **Settings** tab → **Domains** (left menu).
2. Type `bec-me.com` and click **Add**.
3. Vercel will also offer `www.bec-me.com` — add it too (recommended).
4. Vercel now shows you **DNS records** to add. Keep this page open.

### Step 10 — Point the domain to Vercel
Go to wherever you **bought bec-me.com** (e.g. GoDaddy, Namecheap, etc.), log in,
and find the **DNS settings / DNS management** for the domain. Then:

- Add an **A record**:
  - **Type:** A · **Name/Host:** `@` · **Value:** the IP Vercel shows (usually `76.76.21.21`)
- Add a **CNAME record**:
  - **Type:** CNAME · **Name/Host:** `www` · **Value:** `cname.vercel-dns.com`

Save. ✅ It can take from a few minutes up to 24 hours for the domain to start working
(usually fast). Vercel automatically adds free HTTPS (the padlock) once it's connected.

---

# ✍️ How to update the website later

You almost never need to touch code. Two files cover 95% of changes:

### A) Change company info (phones, emails, address, map)
Open **`lib/site.js`**. Edit the values between the quotation marks. For example:
```js
addressEn: "12 Port Said St, Maadi, Cairo, Egypt",
```

### B) Change any text on the site (English & Arabic)
Open **`lib/dictionaries.js`**. It has two sections: `en` (English) and `ar` (Arabic).
Find the words you want to change and edit them between the quotation marks.
Keep the part **before** the colon (e.g. `heroTitle:`) exactly the same — only change
the text after it.

### C) Replace the logo
Put your new logo in the `public` folder and name it exactly **`BEC_Logo.png`**
(replacing the old one).

### How your edits go live
**Easy way (in the browser):**
1. Go to your repository on GitHub.
2. Click into the file you want to change (e.g. `lib/site.js`).
3. Click the **pencil ✏️ icon** (top-right) to edit.
4. Make your change, scroll down, click **Commit changes**.
5. Vercel automatically rebuilds and updates your live site within ~1 minute. ✨

---

# 🖼️ Replacing the placeholder visuals with real photos (optional)

The site uses elegant built-in graphics so it looks great immediately. To use real
Sidel-style production photos later:

1. Put your image files (`.jpg` or `.png`) into the `public/images` folder.
2. Ask a developer (or your next AI session) to swap a `<LineArtwork />` block for an
   `<Image src="/images/your-photo.jpg" ... />`. The structure is already set up for it.

> **Branding rule reminder:** You may use Sidel **product/industrial imagery**, but the
> **Sidel logo must never appear**. Only the **BEC logo** is used for branding.

---

# 📨 Make the contact form send real emails (optional, 5 minutes)

Right now the contact form opens the visitor's email app pre-filled. To receive form
submissions automatically instead:

1. Go to **https://formspree.io** → sign up (free).
2. Create a new form, using the email **h.elreedy@bec-me.com** (or any you choose).
3. Formspree gives you a form ID like `xayzwkqp` (the bit after `formspree.io/f/`).
4. Open **`lib/site.js`**, find this line near the bottom:
   ```js
   export const FORMSPREE_ID = "";
   ```
   and put your ID inside the quotes:
   ```js
   export const FORMSPREE_ID = "xayzwkqp";
   ```
5. Commit the change on GitHub (Step "How your edits go live" above). Done.

---

# 🌐 About the two languages

- English is the default. Arabic is available with full **right-to-left** layout.
- Visitors switch languages using the **العربية / English** button in the menu.
- URLs look like `bec-me.com/en/about` and `bec-me.com/ar/about`.
- All translations live in `lib/dictionaries.js`.

---

# 🆘 Troubleshooting

| Problem | Fix |
|---|---|
| `npm install` fails | Make sure Node.js installed correctly (Step 1). Close and reopen the terminal. |
| Site won't start locally | Make sure you're "inside" the `bec-website` folder (Step 2). |
| Vercel build failed | Open the build log in Vercel; it usually points to a typo in a file you edited. Undo your last edit on GitHub. |
| Domain not working yet | DNS changes can take a few hours. Double-check the A and CNAME records exactly match Vercel's instructions. |
| Arabic text looks wrong | Make sure you only edited text *after* the colon and kept the quotation marks. |

---

# ✅ Quick checklist

- [ ] Node.js installed
- [ ] Site runs locally (`npm run dev`)
- [ ] Code uploaded to GitHub
- [ ] Deployed on Vercel
- [ ] Domain bec-me.com connected
- [ ] (Optional) Formspree connected for the contact form

You're done. Welcome online! 🚀

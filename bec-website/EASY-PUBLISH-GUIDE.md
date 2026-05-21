# BEC Website — The EASY Way to Publish (Browser Only)

No downloads. No Terminal. No commands. Just clicking in your web browser.
You will use two free websites: **GitHub** (stores the files) and **Vercel** (puts them online).

> ⏱️ About 20 minutes. Have the `bec-website` folder ready (unzipped — see Step 0).

---

## Step 0 — Unzip the folder first
The file you downloaded is `bec-website.zip`. Double-click it to **unzip** it.
You should end up with a normal folder called **`bec-website`** that contains folders
named `app`, `components`, `lib`, `public`, and some files. That's the folder we'll use.

---

## Step 1 — Make a free GitHub account
1. Go to **https://github.com**
2. Click **Sign up** (top right) and follow the prompts (email, password, username).
3. Verify your email when GitHub asks.

---

## Step 2 — Create an empty project on GitHub
1. After logging in, click the **+** icon at the very top-right → click **New repository**.
2. In **Repository name**, type: `bec-website`
3. Click the **Private** circle (recommended).
4. Leave everything else untouched. Click the green **Create repository** button.

---

## Step 3 — Upload your website files (drag & drop)
1. On the page that appears, find the line of links and click **"uploading an existing file"**
   (it's in the sentence that starts with "Get started by…").
2. Open your **`bec-website`** folder on your computer.
3. Select **everything inside it**: click one item, then press **Ctrl + A** (Windows) or **Cmd + A** (Mac) to select all.
4. **Drag all of it** into the big dashed box on the GitHub page and drop it.
   - Wait for the file list to finish loading (you'll see file names appear).
5. Scroll to the bottom and click the green **Commit changes** button.

✅ Your code now lives on GitHub. You won't need to touch it again unless you want to edit text later.

---

## Step 4 — Create a free Vercel account
1. Go to **https://vercel.com**
2. Click **Sign Up** → choose **Continue with GitHub**.
3. A GitHub permission box appears → click **Authorize Vercel**.

---

## Step 5 — Publish the website (one click)
1. In Vercel, click **Add New…** (top right) → **Project**.
2. You'll see your `bec-website` repository in the list → click **Import** next to it.
   - If you don't see it, click **Adjust GitHub App Permissions** and allow access to the repo, then come back.
3. **Don't change any settings.** Vercel already knows it's a Next.js site.
4. Click the big **Deploy** button.
5. Wait 1–2 minutes. When you see **"Congratulations!"**, click **Continue to Dashboard**,
   then click the **Visit** button.

🎉 Your website is now LIVE on a free address like `bec-website-xxxx.vercel.app`.
Open it on your phone too — it's fully responsive, and the العربية button switches it to Arabic.

---

## Step 6 — Connect your domain bec-me.com

### In Vercel:
1. In your project, click the **Settings** tab (top) → **Domains** (left side).
2. Type **`bec-me.com`** and click **Add**.
3. When it offers **`www.bec-me.com`**, add that too.
4. Vercel will now show you the **DNS records** to enter. Keep this tab open.

### Where you bought the domain (GoDaddy, Namecheap, etc.):
1. Log in there and open the **DNS settings** for `bec-me.com`.
2. Add these exactly as Vercel shows them (values may vary slightly — always trust Vercel's screen):
   - **A record** → Name/Host: `@` → Value: `76.76.21.21`
   - **CNAME record** → Name/Host: `www` → Value: `cname.vercel-dns.com`
3. Save.

Within a few minutes to a few hours, `bec-me.com` will show your site, and Vercel adds
the secure padlock (HTTPS) automatically. ✅

---

## ✍️ Changing text or the logo later (all in the browser)
1. Go to **github.com**, open your `bec-website` repo.
2. To change **text**: open `lib` → `dictionaries.js`. To change **phones/emails/address**: open `lib` → `site.js`.
3. Click the **pencil ✏️** icon (top-right of the file) to edit.
4. Change the words **between the quotation marks** only. Scroll down → **Commit changes**.
5. Vercel updates the live site automatically in about a minute.

To change the **logo**: in the repo, open the `public` folder → click `BEC_Logo.png` →
click the **trash/delete** then upload your new file with the **exact same name** `BEC_Logo.png`.

---

## 🆘 If you get stuck
At any step, take a **screenshot** of what you see and send it to me here — I'll tell you
exactly what to click next. The two most common snags:
- **"I don't see my repo in Vercel"** → click *Adjust GitHub App Permissions* and give it access.
- **"Domain not working yet"** → DNS can take a few hours; double-check the A and CNAME values match Vercel's screen.

---

## Optional: make the contact form email you automatically (5 min)
By default the contact form opens the visitor's email app. To collect submissions instead:
1. Sign up free at **https://formspree.io**, create a form pointed at `h.elreedy@bec-me.com`.
2. Copy the form ID it gives you (e.g. `xayzwkqp`).
3. On GitHub, edit `lib/site.js`, find `FORMSPREE_ID = ""` and put your ID in the quotes:
   `FORMSPREE_ID = "xayzwkqp"`. Commit changes. Done.

You're online! 🚀

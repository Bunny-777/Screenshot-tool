# 📸 Screenshot Tool

A simple web-based screenshot tool built using **Node.js** and **Puppeteer**. It allows users to view an infographic on a styled frontend and take a high-quality screenshot with a single click.

---

## 🚀 Features

- 🖼️ Stylish infographic layout (HTML + CSS only)
- 🌟 "Take Screenshot" button with glowing hover effect
- 📷 Captures a screenshot of the webpage using Puppeteer backend
- 🧾 Allows users to download the screenshot as a PNG
- 🧠 Fully customizable and beginner-friendly

---

## 🛠️ Tech Stack

**Frontend:**
- HTML5
- CSS3 (pink theme)
- Vanilla JavaScript

**Backend:**
- Node.js
- Express.js
- Puppeteer (headless Chromium)

---

## 📂 Project Structure

```
screenshot-tool/
│
├── public/
│   ├── index.html         # Frontend HTML
│   ├── style.css          # Frontend CSS styling
│
├── server.js              # Node.js backend with Puppeteer
├── package.json           # Dependencies and scripts
└── README.md              # You're here!
```

---

## 🔧 Installation

1. **Clone the repository:**

```bash
git clone https://github.com/Bunny-777/Screenshot-tool.git
cd Screenshot-tool
```

2. **Install dependencies:**

```bash
npm install
```

3. **Run the app:**

```bash
node server.js
```

4. **Open in browser:**

Visit [http://localhost:3000](http://localhost:3000)

---

## 📸 How It Works

- The user views an infographic built entirely in HTML/CSS.
- Clicking the **Take Screenshot** button sends a request to the backend.
- Puppeteer loads the same HTML file in a headless browser.
- A full-page screenshot is captured and sent back to the user for download.


---

## 📃 License

This project is open-source and available under the [MIT License](LICENSE).

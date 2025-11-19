# 🧮 Simple Calculator with AI Math Jokes

A fun calculator app that tells you a math joke after every calculation using OpenAI's API.

## ✨ Features

- ➕➖✖️➗ Basic arithmetic operations (addition, subtraction, multiplication, division)
- 📊 Percentage calculations
- 🗑️ Clear (C) and Delete (DEL) buttons
- ⌨️ Keyboard support (Enter to calculate, Escape to clear)
- 🤖 AI-powered math jokes after each calculation
- 💜 Purple gradient background with a clean, modern UI

## 🚀 Setup

### Prerequisites

- Node.js 18+ installed
- 🔑 OpenAI API key (get one at https://platform.openai.com/api/keys)

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the project root:
   ```
   OPENAI_API_KEY=sk-proj-your_actual_api_key_here
   ```

4. Start the server:
   ```bash
   npm start
   ```

5. Open your browser and go to:
   ```
   http://localhost:3000
   ```

## 📖 How to Use

1. Enter a math expression (e.g., `5 + 3` or `10 * 2`)
2. Click the `=` button or press Enter
3. See your result and get a funny math joke! 😄
4. Use `C` to clear or `DEL` to delete the last digit

## 📁 Files

- `index.html` - 🏗️ Calculator layout
- `app.js` - 🧠 Frontend logic
- `style.css` - 🎨 Styling
- `server.js` - 🔧 Express backend with OpenAI integration
- `package.json` - 📦 Dependencies
- `.env` - 🔐 Environment variables (API key)
- `.gitignore` - 🚫 Files to exclude from Git

## 🌐 API Endpoint

- `GET /api/joke` - Returns a random math joke from OpenAI

## 🛠️ Technologies Used

- Express.js - Backend server
- OpenAI API - AI joke generation
- Vanilla JavaScript - Frontend
- CSS3 - Styling

## ⚠️ Notes

- Keep your `.env` file private and never commit it to Git
- The calculator uses `eval()` for calculations (safe for this demo, but not for production)
- API calls may incur costs based on your OpenAI plan

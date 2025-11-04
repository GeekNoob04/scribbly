# Scribbly 📝 - Your Simple Note-Taking Extension

Scribbly is a lightweight and intuitive note-taking Chrome extension that allows you to quickly jot down ideas, reminders, and anything else you need to remember. It leverages React, Vite, and Tailwind CSS for a modern and responsive user interface. Notes are persisted using Chrome's storage API or local storage, ensuring your data is always available.

## 🚀 Key Features

*   **Effortless Note Creation:** Easily add new notes with a simple input field and button or by pressing "Enter".
*   **Persistent Storage:** Notes are automatically saved using Chrome's `storage.sync` API (if available) or `localStorage`, ensuring they persist across browser sessions.
*   **Clean and Intuitive UI:**  Built with Tailwind CSS for a visually appealing and user-friendly experience.
*   **Easy Note Deletion:** Remove unwanted notes with a single click.
*   **Chrome Extension Support:** Seamlessly integrates into your Chrome browser for quick access.

## 🛠️ Tech Stack

*   **Frontend:**
    *   React
    *   React DOM
    *   Tailwind CSS
*   **Build Tool:**
    *   Vite
*   **Languages:**
    *   JavaScript (ES Modules)
    *   HTML
    *   CSS
*   **Other:**
    *   Chrome Extension API (for storage)
    *   ESLint (for linting)

## 📦 Getting Started

Follow these steps to get Scribbly up and running on your local machine.

### Prerequisites

*   Node.js (version 16 or higher)
*   npm or yarn package manager
*   A modern web browser (Chrome recommended for extension functionality)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/GeekNoob04/scribbly
    cd scribbly
    ```

2.  **Install dependencies:**

    ```bash
    npm install # or yarn install
    ```

### Running Locally

1.  **Start the development server:**

    ```bash
    npm run dev # or yarn dev
    ```

    This will start the Vite development server, and you can access the application in your browser at the address provided (usually `http://localhost:5173`).

### Loading as a Chrome Extension (for development)

1.  **Build the project:**

    ```bash
    npm run build # or yarn build
    ```

    This will create a `dist` directory containing the production-ready files.

2.  **Open Chrome and navigate to `chrome://extensions`.**

3.  **Enable "Developer mode" in the top right corner.**

4.  **Click "Load unpacked" and select the `dist` directory from your project.**

    The Scribbly extension should now be loaded and visible in your Chrome toolbar.

## 💻 Usage

1.  **Open the Scribbly extension by clicking its icon in the Chrome toolbar.**
2.  **Type your note in the input field.**
3.  **Click the "Add" button or press "Enter" to add the note to the list.**
4.  **Click the "Delete" button next to a note to remove it.**
5.  **Your notes will be automatically saved and restored when you reopen the extension.**

## 📂 Project Structure

```
scribbly/
├── public/
│   └── manifest.json
├── src/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

## 📸 Screenshots

<img width="292" height="189" alt="Screenshot 2025-11-04 at 1 28 22 AM" src="https://github.com/user-attachments/assets/73e995d3-9f1c-4c93-8b1b-ce43c536d4eb" />


## 🤝 Contributing

Contributions are welcome! If you have any ideas for improvements or bug fixes, please submit a pull request.

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with descriptive messages.
4.  Submit a pull request.

## 📬 Contact

If you have any questions or suggestions, feel free to contact me at [harshitbudhraja0@gmail.com](harshitbudhraja0@gmail.com).

## 💖 Thanks

Thank you for checking out Scribbly! I hope you find it useful.

This is written by [readme.ai](https://readme-generator-phi.vercel.app/)

# Moatmt Chat Landing Page (Static)

This is a static conversion of the Moatmt Chat landing page, built with HTML, Tailwind CSS v4, and DaisyUI. It is designed to be easily integrated into a CodeIgniter project.

## Project Structure

- `src/`: Contains the source code.
  - `*.html`: The static HTML pages (mapped from Next.js `app/*.js`).
  - `assets/`: Contains CSS, JS, and images.
    - `css/styles.css`: Main stylesheet (Tailwind CSS v4).
    - `js/main.js`: Minimal vanilla JavaScript for UI interactions.
    - `images/`: Static images.
- `vite.config.js`: Vite configuration for local development.
- `package.json`: Project dependencies (Tailwind CSS, DaisyUI, Vite).

## Development

1.  Install dependencies:
    ```bash
    npm install
    ```

2.  Start the development server:
    ```bash
    npm run dev
    ```

3.  Build for production (optional, if you want minified assets):
    ```bash
    npm run build
    ```

## CodeIgniter Integration

To integrate this into a CodeIgniter project:

1.  **Views**: Copy the `.html` files from `src/` to your CodeIgniter `application/views/` directory (rename to `.php` if needed).
2.  **Assets**: Copy the `src/assets/` folder to your CodeIgniter `public/` or `assets/` directory.
3.  **Paths**: Ensure the paths in the HTML files (e.g., `<link rel="stylesheet" href="./assets/css/styles.css">`) match your CodeIgniter asset paths (e.g., `<?php echo base_url('assets/css/styles.css'); ?>`).

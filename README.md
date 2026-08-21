# LINC Lab website

The official website for **LINC Lab — Language, Intelligence, Neuroscience & Cognition**.

> Closing the loop between human language processing and machine intelligence.

This is a lightweight multi-page website built with HTML, CSS, and JavaScript. It has no framework, dependency, or build step and is ready for GitHub Pages.

## Pages

- `index.html` — lab introduction, About, News, and Join Us
- `people.html` — current members and alumni
- `publications.html` — publications
- `teaching.html` — teaching
- `resources.html` — resources
- `handbook.html` — lab handbook

## Preview locally

Open `index.html` directly in a browser, or serve the repository with any static file server.

## Add or update a member

1. Add the portrait to `assets/members/`.
2. Open `script.js`.
3. Add or edit one object in the `members` array at the top of the file.

Each member supports `name`, `role`, `image`, `profile`, and `research`. Use `null` when a profile is not yet available. Replace the research placeholder when a member's research interests are ready.

## Publish on GitHub Pages

Push the repository to GitHub, then open **Settings → Pages** and choose **Deploy from a branch**. Select the main branch and the repository root (`/`).

# LINC Lab website

The official website for **LINC Lab — Language, Intelligence, Neuroscience & Cognition**.

> Closing the loop between human language processing and machine intelligence.

This is a lightweight static website built with HTML, CSS, and JavaScript. It has no framework, dependency, or build step and is ready for GitHub Pages.

## Preview locally

Open `index.html` directly in a browser, or serve the repository with any static file server.

## Add or update a member

1. Add the portrait to `assets/members/`.
2. Open `script.js`.
3. Add or edit one object in the `members` array at the top of the file.

Each member supports `name`, `role`, `group`, `image`, and `profile`. Use `faculty` or `student` for the group, and `null` when a profile is not yet available.

## Publish on GitHub Pages

Push the repository to GitHub, then open **Settings → Pages** and choose **Deploy from a branch**. Select the main branch and the repository root (`/`).

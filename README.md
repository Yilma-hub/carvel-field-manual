# Carvel Field Manual

A field manual for the Extension Agricultural Engineer position at the University of Delaware Carvel Research and Education Center, Georgetown, Delaware. English and Amharic, with a notes box under every section.

It is a plain static website: HTML, CSS and JavaScript. There is no build step and no server code.

## What is in this folder

- index.html: the page, styles and layout
- app.js: routing, search, glossary pop-ups, language switch, notes
- content1.js to content8.js: the 52 English pages
- glossary.js, glossary2.js, glossary3.js: the 265 glossary terms
- quotes.js, figures.js, calcs.js: quotes, drawn figures, calculators
- chat.js: the Ask the manual helper
- am/: the Amharic translation (interface, glossary, quotes, all pages)
- README.md: this file

Keep the am folder as a folder. The page looks for am/am-ui.js and the other Amharic files at that path.

## Put it on GitHub (browser only, no software needed)

1. Unzip Carvel_Field_Manual_site.zip on your computer.
2. Go to https://github.com/Yilma-hub and sign in.
3. Click the + at the top right, then New repository.
4. Repository name: carvel-field-manual. Choose Public (GitHub Pages on a free account needs a public repo). Leave "Add a README" unchecked. Click Create repository.
5. On the new empty repo page, click the link "uploading an existing file".
6. Open the unzipped folder, select everything inside it (index.html, all the .js files, README.md and the am folder) and drag it into the browser window. Dragging the am folder keeps its name, so the files land in am/.
7. Wait until every file shows in the list, write a short message such as "First upload", and click Commit changes.
8. Check the repo now shows index.html at the top level and an am folder with 14 files in it.

## Turn it into a website (GitHub Pages)

1. In the repo, click Settings, then Pages in the left menu.
2. Under Build and deployment, Source: Deploy from a branch.
3. Branch: main, folder: / (root). Click Save.
4. Wait one to two minutes and refresh. The address will be:

   https://yilma-hub.github.io/carvel-field-manual/

Open it on your phone too. The English and አማርኛ buttons are at the top right.

## Updating later

To change a file, open it in the repo, click the pencil icon, edit, and click Commit changes. To replace a file, use Add file, then Upload files, and drop the new version with the same name. The website refreshes on its own within a couple of minutes.

## Optional: command line with git

If you install git later, the same upload looks like this, run inside the unzipped folder:

```
git init
git add .
git commit -m "First upload"
git branch -M main
git remote add origin https://github.com/Yilma-hub/carvel-field-manual.git
git push -u origin main
```

GitHub will ask you to sign in the first time you push.

## About your notes

Each section has an "Add note" box. Notes save automatically as you type.

- On the GitHub Pages site, notes are stored in the browser you write them in. They stay there each time you open the site, but they do not move to another phone or computer by themselves, and clearing the browser's site data erases them.
- To move notes or keep a backup, open My notes from the menu and use Export. On the other device, use Import with that file. Import merges, so it does not wipe notes already there.
- On the claude.ai version of the manual, notes also sync privately to your claude.ai account, so they follow you between devices there. The two versions do not share notes with each other except through Export and Import.

Nobody else can see your notes in either version. The GitHub repo itself never contains your notes, only the manual.

## Language switch

Pressing አማርኛ or English redraws the page in the other language and puts you back on the same section, calculator or glossary entry you were reading. Numbers, units (in, ft, gpm, psi, ac), program codes and links stay the same in both languages so you can compare line by line.

## Ask the manual

The round button at the bottom right opens a chat that answers only from this manual. Type a question or a few keywords. It shows the matching sections, a short definition when a glossary term fits, links to open the section, and "Did you mean" choices when your words could point to more than one topic. If the manual does not cover something, it says so.

- On the GitHub Pages site the chat is a built-in search of the manual. It needs no account and works offline once the page has loaded.
- On the claude.ai version, Claude writes the answer from the matching manual sections and cites them. The first question asks your permission to use Claude, and you can turn this off with the Use Claude box in the chat.
- Chat history stays in your browser. Clear chat removes it.

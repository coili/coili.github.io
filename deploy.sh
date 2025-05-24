#!/usr/bin/env bash

# stop si erreur
set -e

# construire le site
npm run build

# aller dans le dossier généré
cd docs/.vitepress/dist

# init git
git init
git add -A
git commit -m 'deploy'

# push sur la branche gh-pages (pour GitHub Pages)
git branch -M main
git remote add origin https://github.com/coili/coili.github.io.git
git push -f origin main

cd -

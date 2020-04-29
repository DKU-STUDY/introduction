#!/usr/bin/env sh

# 오류 발생시 중단한다.
set -e
yarn docs:build
cd .vuepress/dist
git clone -b gh-pages https://github.com/DKU-STUDY/DKU-STUDY.github.io
cp -rf TIL/.git ./.git
rm -rf TIL
git add .
git commit -m '$1'
git push origin gh-pages
cd -
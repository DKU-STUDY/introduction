#!/usr/bin/env sh

# 오류 발생시 중단한다.
set -e
yarn docs:build
cd .vuepress/dist
git clone -b master https://github.com/DKU-STUDY/DKU-STUDY.github.io
cp -rf DKU-STUDY.github.io/.git ./.git
rm -rf DKU-STUDY.github.io
git add .
git commit -m "$*"
git push origin +master
cd -
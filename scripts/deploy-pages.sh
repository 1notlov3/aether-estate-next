#!/usr/bin/env bash
set -euo pipefail

REPO="1notlov3/aether-estate-next"
REPO_URL="https://github.com/${REPO}.git"

if [[ ! -d out ]]; then
  echo "out/ not found. Run npm run build:pages first."
  exit 1
fi

cd out

touch .nojekyll

git init >/dev/null 2>&1 || true
git checkout -B gh-pages >/dev/null
git add -A
git commit -m "deploy: github pages $(date -u +%Y-%m-%dT%H:%M:%SZ)" >/dev/null || true

git remote remove origin >/dev/null 2>&1 || true
git remote add origin "$REPO_URL"
git push -f origin gh-pages

echo "Deployed to gh-pages branch"

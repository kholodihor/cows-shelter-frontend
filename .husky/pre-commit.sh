#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx lint-staged && npx git-cz --hook
#!/usr/bin/env bash

set -e

export TERM=xterm
PROJECT_ROOT=`git rev-parse --show-toplevel`

if [ "$#" -ne 1 ]; then
  echo "node-template-release.sh path_to_target_archive"
  exit 1
fi

PATH_TO_ARCHIVE=$1
cd $PROJECT_ROOT/scripts/ci/pivot-template-release

cargo run $PROJECT_ROOT/bin/pivot-template $PROJECT_ROOT/$PATH_TO_ARCHIVE

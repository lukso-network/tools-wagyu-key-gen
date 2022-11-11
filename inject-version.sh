#!/usr/bin/env bash
if [ -n "$1" ]
then
    VERSION=$1
else
    VERSION=$2
fi

if [ -n "$GITHUB_OUTPUT" ]
then
    echo "VERSION=$VERSION" >> $GITHUB_OUTPUT
fi

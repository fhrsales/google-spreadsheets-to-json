#!/bin/sh

cd "$(dirname "$0")"

node=$(which node)

$node index.js

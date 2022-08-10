#! /bin/bash

node_modules/.bin/rollup editor.minimal.js -f iife -o editor.bundle.js -p @rollup/plugin-node-resolve

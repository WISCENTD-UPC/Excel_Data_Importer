#!/bin/bash

if [[ -d $1 ]]; then
    prettier $1/**/**.{ts,js,json,scss,css,html} --write --end-of-line lf --tab-width 4
elif [[ (-f $1) && ($1 == *.json) ]]; then
    prettier $1 --write --end-of-line lf --tab-width 4
else
    prettier *.{ts,js,json,scss,css,html} --write --end-of-line lf --tab-width 4
fi

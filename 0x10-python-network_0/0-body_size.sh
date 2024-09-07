#!/bin/bash
# Send request and display body size
curl -s "$1" -o /dev/null -w '%{size_download}\n'

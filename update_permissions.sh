#!/bin/bash

# Set base directory
BASE_DIR="/web/py2236"

# Set permissions for the base directory and its contents
chmod 711 "$BASE_DIR/weblab/"

# Set permissions for the files and directories in 'graphics'
chmod 644 "$BASE_DIR/weblab/index.html"

# Set permissions for homework directories and their contents
chmod 711 "$BASE_DIR/weblab/ws0/"
chmod 711 "$BASE_DIR/weblab/ws1/"

chmod 644 "$BASE_DIR/weblab/ws0/"*
chmod 644 "$BASE_DIR/weblab/ws1/"*


echo "Permissions have been updated successfully."
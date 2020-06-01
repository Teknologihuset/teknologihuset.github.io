#!/usr/bin/env bash

set -e

# ------------------------------------------------------------------------------
#
# Program: initpost.sh
# Author:  Vitor Britto
# Description: script to create an initial structure for my posts.
#
# Additions to original program (Dervis Mansuroglu, @dervis_m):
# - Project mode
# - Draft and Talk mode
#
# Usage: ./initpost.sh [options] <post name>
#
# Options:
#   -h, --help        output instructions
#   -b, --blog        create blog post
#   -d, --draft       create draft
#   -t, --talk        create talk
#   -p, --project     create project
#
# Alias: alias ipost="bash ~/path/to/script/initpost.sh"
#
# Example:
#   ./initpost.sh -c How to replace strings with sed
#
# Important Notes:
#   - This script was created to generate new markdown files for my blog.
#
#
# ------------------------------------------------------------------------------


# ------------------------------------------------------------------------------
# | VARIABLES                                                                  |
# ------------------------------------------------------------------------------

# CORE: Do not change these lines
# ----------------------------------------------------------------
POST_TITLE="${@:2:$(($#-1))}"
POST_NAME="$(echo ${@:2:$(($#-1))} | sed -e 's/ /-/g' | sed "y/ABCDEFGHIJKLMNOPQRSTUVWXYZ/abcdefghijklmnopqrstuvwxyz/")"
CURRENT_DATE="$(date +'%Y-%m-%d')"
TIME=$(date +"%H:%M")
FILE_NAME="${CURRENT_DATE}-${POST_NAME}.markdown"
# ----------------------------------------------------------------


# SETTINGS: your configuration goes here
# ----------------------------------------------------------------

# Mode
#MODE="create"

# Set your destination folder
BINPATH=$(cd `dirname $0`; pwd)
POSTPATH="${BINPATH}/_posts"
DRAFTPATH="${BINPATH}/_drafts"
TALKSPATH="${BINPATH}/_talks"
PROJECTSPATH="${BINPATH}/_projects"
DIST_FOLDER="$POSTPATH"

# Set your blog URL
BLOG_URL="https://dervism.github.io"

# Set your assets URL
ASSETS_URL="assets/images/"
# ----------------------------------------------------------------



# ------------------------------------------------------------------------------
# | UTILS                                                                      |
# ------------------------------------------------------------------------------

# Header logging
e_header() {
    printf "$(tput setaf 38)→ %s$(tput sgr0)\n" "$@"
}

# Success logging
e_success() {
    printf "$(tput setaf 76)✔ %s$(tput sgr0)\n" "$@"
}

# Error logging
e_error() {
    printf "$(tput setaf 1)✖ %s$(tput sgr0)\n" "$@"
}

# Warning logging
e_warning() {
    printf "$(tput setaf 3)! %s$(tput sgr0)\n" "$@"
}



# ------------------------------------------------------------------------------
# | MAIN FUNCTIONS                                                             |
# ------------------------------------------------------------------------------

# Everybody needs some help
initpost_help() {

cat <<EOT
---------------------------------------------------------------------------------------------
INIT POST - A shortcut to create an initial structure for posts, talks, projects and drafts.
---------------------------------------------------------------------------------------------
Usage: ./initpost.sh [options] <post name>
Options:
  -h, --help        output instructions
  -b, --blog        create blog post
  -d, --draft       create draft
  -t, --talk        create talk
  -p, --project     create project
Example:
  ./initpost.sh -c How to replace strings with sed
Important Notes:
  - This script was created to generate new text files to my blog.
Copyright (c) Vitor Britto
Licensed under the MIT license.
---------------------------------------------------------------------------------------------
EOT

}

# Initial content
initpost_content() {
  echo "---"
  echo "title: \"${POST_TITLE}\""
  echo "layout: post"
  echo "date: ${CURRENT_DATE} ${TIME}"
  echo "image: '/assets/images/markdown.jpg'"
  echo "headerImage: false"
  echo "description:"
  echo "tag:"
  echo "categories:"
  echo "blog: true"
  # echo "author: Located in defaults in _config.yml"
  echo "---"
}

# Special options for Talks:
# hidden: don't count this post in blog pagination
inittalk_content() {
  echo "---"
  echo "title: \"${POST_TITLE}\""
  echo "layout: post"
  echo "date: ${CURRENT_DATE} ${TIME}"
  echo "image: '/assets/images/markdown.jpg'"
  echo "headerImage: false"
  echo "talk: true"
  echo "hidden: true"
  echo "description:"
  echo "tag:" # should be a yml list
  echo "categories:"
  # echo "author: Located in defaults in _config.yml"
  echo "---"
  echo "Description"
  echo ""
  echo "**Intended audience**"
  echo "Everybody."
  echo ""
  echo "**Summary**"
  echo "Description"
  echo ""
  echo "**Language** "
  echo "Norwegian and English"
  echo ""
  echo "**Video**"
  echo "[link](link)"
  echo ""
  echo "**Slides** "
  echo "[link](link)"
  echo ""
  echo "**Code**"
  echo "[link](link)"
  echo ""
}

# Special options for Projects:
# hidden: don't count this post in blog pagination
initproject_content() {
 echo "---"
 echo "title: \"${POST_TITLE}\""
 echo "layout: post"
 echo "date: ${CURRENT_DATE} ${TIME}"
 echo "image: '/assets/images/markdown.jpg'"
 echo "headerImage: false"
 echo "project: true"
 echo "hidden: true"
 echo "description:"
 echo "tag:" # should be a yml list
 echo "categories:"
 # echo "author: Located in defaults in _config.yml"
 echo "---"
}

# Create file
# todo: remove duplicates
initpost_file() {
  if [ -z ${MODE+x} ]; then
    if [ ! -f "${DIST_FOLDER}/${FILE_NAME}" ]; then
      e_header "Creating post..."
      initpost_content > "${DIST_FOLDER}/${FILE_NAME}"
      e_success "Post successfully created!"
    else
        e_warning "File already exists."
        exit 1
    fi
  else
    if [[ "${MODE}" == "draft" ]]; then
      if [ ! -f "${DRAFTPATH}/${FILE_NAME}" ]; then
        e_header "Creating draft..."
        initpost_content > "${DRAFTPATH}/${FILE_NAME}"
        e_success "Draft successfully created!"
      else
          e_warning "File already exists."
          exit 1
      fi
    fi
    if [[ "${MODE}" == "talk" ]]; then
      if [ ! -f "${TALKSPATH}/${FILE_NAME}" ]; then
        e_header "Creating talk..."
        inittalk_content > "${TALKSPATH}/${FILE_NAME}"
        e_success "Talk successfully created!"
      else
          e_warning "File already exists."
          exit 1
      fi
    fi
    if [[ "${MODE}" == "project" ]]; then
      if [ ! -f "${PROJECTSPATH}/${FILE_NAME}" ]; then
        e_header "Creating project..."
        initproject_content > "${PROJECTSPATH}/${FILE_NAME}"
        e_success "Project successfully created!"
      else
          e_warning "File already exists."
          exit 1
      fi
    fi
  fi
}

# ------------------------------------------------------------------------------
# | INITIALIZE PROGRAM                                                         |
# ------------------------------------------------------------------------------

main() {
    # Show help
    if [[ "${1}" == "-h" || "${1}" == "--help" ]]; then
        initpost_help ${1}
        exit
    fi

    # Create
    if [[ "${1}" == "-b" || "${1}" == "--blog" ]]; then
        initpost_file $*
        exit
    fi

    # Draft
    if [[ "${1}" == "-d" || "${1}" == "--draft" ]]; then
        MODE="draft"
        initpost_file $*
        exit
    fi

    # Talk
    if [[ "${1}" == "-t" || "${1}" == "--talk" ]]; then
      MODE="talk"
      initpost_file $*
      exit
    fi

    # Project
    if [[ "${1}" == "-p" || "${1}" == "--project" ]]; then
      MODE="project"
      initpost_file $*
      exit
    fi

    e_error "Invalid argument, please specify a valid option."
}

# Initialize
main $*

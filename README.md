#Themebuilder

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/15acbf8d961241fcb01dd76ed70671c7)](https://www.codacy.com/app/olemak/themebuilder?utm_source=github.com&utm_medium=referral&utm_content=olemak/themebuilder&utm_campaign=Badge_Grade)
[![CircleCI](https://circleci.com/gh/olemak/themebuilder/tree/master.svg?style=svg)](https://circleci.com/gh/olemak/themebuilder/tree/master)
A simple way for non-coders to specify neccecary theme variables like color values, aspects, fonts etc.
Variables are structured in a standardiszed format, suitable for exported in as a json format
Exported JSONs may be imported by SCSS or post-css projects

**Coming soon**: This project will also include SCSS files that let you use these variables directly, along with utility functions and mixins that can be the start of a flexible and lightweight web app theme. Post-css equivalents are being concidered (but no LESS support, sorry).

Additionally, a separate plugin for imageResizer is being considered, so the imageResizer can used the aspec variables in the theme variables for easily and conveniently compose srcset attributes (and possibly entire img tags with lazyloading built in.) This is future development though, for now it's are still in pre-1.0, so there is plenty to do until then.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

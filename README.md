# rinthify example plugin

A small [Rinthify](https://github.com/glsoo/rinthify) plugin to copy from. It adds a page to the sidebar with a
counter that is saved between restarts, an option, and a button in its settings.

- `project.json`: the name, version and options
- `index.js`: the code. `start(api)` runs when the plugin is turned on, and everything added through `api` is removed
  when it is turned off

To try it, paste `glsoo/rinthify-example-plugin` in settings > plugins and click install. The Rinthify README lists
everything `api` has

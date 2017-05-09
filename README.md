# Aglio FoxCommerce Theme

This is the Aglio theme for the FoxCommerce API documents. It takes an 
[API Blueprint](http://apiblueprint.org/) AST and renders it to static HTML.

## Design Philosophy

This theme is based off the Olio, the default Aglio theme. 

* [Less](http://lesscss.org/) to produce CSS
* [Markdown-it](https://github.com/markdown-it/markdown-it#readme) to render Markdown
* [Jade](http://jade-lang.com/) to produce HTML
* [Highlight.js](https://highlightjs.org/) to highlight code snippets

For backward compatibility, Jade templates can continue to use inline Stylus and CoffeeScript.

## Theme Options

Olio comes with a handful of configurable theme options. These are set via the `--theme-XXX` parameter, where `XXX` is one of the following:

Name           | Description
-------------- | ------------------
`condense-nav` | Whether to condense nagivation for resources with only a single action (default is `true`).
`full-width`   | Whether to use the full page width or a responsive layout (default is responsive).
`style`        | LESS or CSS to control the layout and style of the document using the variables from below. Can be a path to your own file or one of the following presets: `default`. May be an array of paths and/or presets.
`template`     | Jade template to render HTML. Can be a path to your own file or one of the following presets: `default`.
`variables`    | LESS variables that control theme colors, fonts, and spacing. Can be a path to your own file or one of the following presets: `default`, `flatly`, `slate`, `cyborg`. May be an array of paths and/or presets.

**Note**: When using this theme programmatically, these options are cased like you would expect in Javascript: `--theme-full-width` becomes `options.themeFullWidth`.

License
=======

MIT License

Copyright &copy; 2017 FoxCommerce

And based on Olio:

Copyright &copy; 2016 Daniel G. Taylor

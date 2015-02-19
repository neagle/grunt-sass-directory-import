# grunt-sass-directory-import

> Include all the _.scss files in a directory by including a dynamically maintained `_*.scss` file.

In Sass, it's impossible to important a directory full of `_*.scss` files ([partials](http://sass-lang.com/docs/yardoc/file.SASS_REFERENCE.html#partials)) automatically, and [this answer from Stack Overflow](http://stackoverflow.com/a/4779432/399077) probably explains why.

But for me, source order isn't important: I like to have directories full of partials that should be independent from each other, especially when I'm using a system like SMACSS, where I have things like directories full of modules, mixins, functions, etc.

Using this task, you just add an `_all.scss` to any directory where you'd like to be able to import everything. This task will write all the necessary @imports to it so that when you @import that `_all.scss` partial, you will import all other partials in the directory.

Note: this plugin does not include non-partials, or `*.scss` files not prefixed by an underscore. Those get turned into regular `.css` files, and don't make sense to me as something that should be automatically swept up in other includes.

You can read more in [my original blog post](http://nateeagle.com/2013/03/30/import-a-whole-directory-with-sass-using-grunt/).

**Note:** If you're not Grunt-oriented, there's actually a more full-featured alternative available as a ruby gem: [Chris Eppstein's Sass Globbing](https://github.com/chriseppstein/sass-globbing).

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-sass-directory-import --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-sass-directory-import');
```

## The "sass_directory_import" task

### Overview
In your project's Gruntfile, add a section named `sass_directory_import` to the data object passed into `grunt.initConfig()`.

**Important:** When you execute your tasks, this task needs to be executed *before* your Compass task, or whatever task compiles your `*.scss` files.

```js
grunt.initConfig({
  sass_directory_import: {
    your_target: {
      // Target-specific file lists and/or options go here.
      files: {
        // The file pattern to add @imports to.
        // The name of the file is arbitrary - I like "all".
        src: ['path/to/scss/files/**/_all.scss']
    },
  },
})
```

### Options

#### options.quotes
Type: `String`
Default value: `double`

This plugin writes `@import` statements, which use quotes. By default, they're double quotes, but maybe you have a linter on your Sass (yay!) and want to use single quotes. Set this to 'single'.

#### options.quiet
Type: `Boolean`
Default value: `False`

By default, this plugin outputs information about the files it finds to your Grunt output.

Set to true to quiet this.

### Usage Examples

#### Default Options
Find any _all.scss directories in your scss folder and subfolders and add @imports to them to any partials (`_*.scss` files) in that directory.

```js
grunt.initConfig({
  sass_directory_import: {
    files: {
      src: ['src/scss/**/_all.scss']
    },
  },
})
```

#### Custom Options
Search for files named `_everything.scss` and suppress output to your Grunt process.

```js
grunt.initConfig({
  sass_directory_import: {
    options: {
      quiet: true,
    },
    files: {
      src: ['src/scss/**/_everything.scss']
    },
  },
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
9-6-2013 - Initial release.

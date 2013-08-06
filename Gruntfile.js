/*
 * grunt-sass-directory-import
 * https://github.com/neagle/grunt-sass-directory-import
 *
 * Copyright (c) 2013 Nate Eagle
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		jshint: {
			all: [
				'Gruntfile.js',
				'tasks/*.js',
				'<%= nodeunit.tests %>'
			],
			options: {
				jshintrc: '.jshintrc'
			}
		},

		// Before generating any new files, remove any previously-created files.
		clean: {
			tests: ['tmp']
		},

		copy: {
			test_prep: {
				files: [
					{ expand: true, cwd: 'test/fixtures/', src: ['**'], dest: 'tmp/' }
				]
			}
		},

		// Configuration to be run (and then tested).
		sass_directory_import: {
			default_options: {
				options: {
				},
				files: {
					src: ['tmp/default/**/_all.scss']
				}
			},
			custom_options: {
				options: {
					quiet: true
				},
				files: {
					src: ['tmp/custom/**/_custom.scss']
				}
			}
		},

		// Unit tests.
		nodeunit: {
			tests: ['test/*_test.js']
		}

	});

	// Actually load this plugin's task(s).
	grunt.loadTasks('tasks');

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-nodeunit');

	// Whenever the "test" task is run, first clean the "tmp" dir, then run this
	// plugin's task(s), then test the result.
	grunt.registerTask('test', ['clean', 'copy', 'sass_directory_import', 'nodeunit']);

	// By default, lint and run all tests.
	grunt.registerTask('default', ['jshint', 'test']);

};

'use strict';

var grunt = require('grunt');

/*
	======== A Handy Little Nodeunit Reference ========
	https://github.com/caolan/nodeunit

	Test methods:
	test.expect(numAssertions)
	test.done()
	Test assertions:
	test.ok(value, [message])
	test.equal(actual, expected, [message])
	test.notEqual(actual, expected, [message])
	test.deepEqual(actual, expected, [message])
	test.notDeepEqual(actual, expected, [message])
	test.strictEqual(actual, expected, [message])
	test.notStrictEqual(actual, expected, [message])
	test.throws(block, [error], [message])
	test.doesNotThrow(block, [error], [message])
	test.ifError(value)
*/

exports.sass_directory_import = {
	setUp: function(done) {
		// setup here if necessary
		done();
	},
	default_options: function(test) {
		test.expect(2);

		var actual_top = grunt.file.read('tmp/default/_all.scss');
		var actual_sub = grunt.file.read('tmp/default/subdirectory/_all.scss');
		var expected = grunt.file.read('test/expected/_all.scss');
		test.equal(actual_top, expected, 'top _all.scss contains expected imports.');
		test.equal(actual_sub, expected, '_all.scss in a subdirectory contains expected imports.');

		test.done();
	},
	custom_options: function(test) {
		test.expect(2);

		var actual_top = grunt.file.read('tmp/custom/_custom.scss');
		var actual_sub = grunt.file.read('tmp/custom/subdirectory/_custom.scss');
		var expected = grunt.file.read('test/expected/_all.scss');
		test.equal(actual_top, expected, 'top _custom.scss contains expected imports.');
		test.equal(actual_sub, expected, '_custom.scss in a subdirectory contains expected imports.');

		test.done();
	}
};

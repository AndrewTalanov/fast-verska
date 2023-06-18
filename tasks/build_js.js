const {
	src,
	dest
} = require('gulp');
const uglify = require('gulp-uglify-es').default;
const babel = require('gulp-babel');
const concat = require('gulp-concat');

module.exports = function build_js() {
	return src(['src/js/components/**/*.js', 'src/js/app.js'])
		.pipe(uglify())
		.pipe(babel({
			presets: ['@babel/env']
		}))
		.pipe(concat('app.min.js'))
		.pipe(dest('build/js/'))
}
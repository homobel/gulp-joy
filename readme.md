
# Gulp Joy Plugin

## Usage
```bash
npm i gulp-joy
```
```js
const joy = require('gulp-joy');

gulp.task('joy', () => {
    return gulp.src('tpl/**/*.joy')
        .pipe(joy(/* options */)) // see joytpl docs for details 
        .pipe(gulp.dest('scripts/tpl'));
});
```

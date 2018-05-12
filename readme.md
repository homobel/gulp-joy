
# Gulp Joy Plugin

## Usage

```js
gulp.task('joy', function() {

    return gulp.src('tpl/**/*.joy')
        .pipe(joy(/* options */)) // see joytpl docs for details 
        .pipe(gulp.dest('scripts/tpl'));

});
```

const through = require('through2');
const PluginError = require('plugin-error');
const replaceExt = require('replace-ext');
const joy = require('joytpl');

const PLUGIN_NAME = 'gulp-joy';

module.exports = (options) => {
    options = options || {};

    function transform(file, enc, cb) {
        if (file.isNull()) {
            return cb(null, file);
        }

        if (file.isStream()) {
            return cb(new PluginError(PLUGIN_NAME, 'Streams not supported'));
        }

        const input = file.contents.toString(options.charset || 'utf8');

        joy.build(input, options, (err, data) => {
            if (err) {
                return cb(new PluginError(PLUGIN_NAME, err.message));
            }

            if (options.handleExtracted) {
                options.handleExtracted(data.extracted);
            }

            file.contents = new Buffer(data.content);
        });

        file.path = replaceExt(file.path, '.js');
        cb(null, file);
    }

    return through.obj(transform);
};

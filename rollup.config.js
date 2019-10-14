import svelte from 'rollup-plugin-svelte'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import autoPreprocess from 'svelte-preprocess'

export default {
    input: 'src/main.js',
    output: {
        sourcemap: true,
        format: 'iife',
        name: 'app',
        file: 'dist/bundle.js'
    },
    watch: {
        exclude: ['node_modules/**']
    },
    plugins: [
        svelte({
            // enable run-time checks when not in production
            dev: true,
            // we'll extract any component CSS out into
            // a separate file  better for performance
            css: css => {
                css.write('dist/bundle.css')
            },
            preprocess: autoPreprocess()
        }),

        // If you have external dependencies installed from
        // npm, you'll most likely need these plugins. In
        // some cases you'll need additional configuration 
        // consult the documentation for details:
        // https://github.com/rollup/rollup-plugin-commonjs
        resolve(),
        commonjs(),
        serve({
            // Launch in browser (default: false)
            open: true,

            // Folder to serve files from
            contentBase: '',

            // Multiple folders to serve from
            contentBase: ['dist'],

            // Options used in setting up server
            host: 'localhost',
            port: 3000,
        }),
        livereload()
    ]
}
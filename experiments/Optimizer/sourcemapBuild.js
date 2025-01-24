({
    baseUrl: "js",
    name: "main",
    out: "dist/main.min.js",
    optimize: "uglify2",          // Use uglify2 for source maps
    generateSourceMaps: true,     // Enable source map generation
    preserveLicenseComments: false // Disable license comments for source maps to work
})
define(function () {
    var buildMap = {};

    return {
        load: function (name, req, onLoad, config) {
            // Simulate loading content during the build process
            var content = "Content of " + name + " (from build)";
            buildMap[name] = content;
            onLoad(content);
        },

        write: function (pluginName, moduleName, write) {
            if (moduleName in buildMap) {
                var text = buildMap[moduleName].replace(/'/g, "\\'");
                write(`define('${pluginName}!${moduleName}', function () { return '${text}'; });\n`);
            }
        },

        writeFile: function (pluginName, name, parentRequire, write) {
            var fileName = parentRequire.toUrl(`${name}.txt`);
            var text = buildMap[name] || `Default content for ${name}`;
            write(fileName, text);
        },
        onLayerEnd: function (write, data) {
            write(`// End of layer: ${data.name || "unnamed"}\n`);
            buildMap = {}; // Reset internal state
        },
    };
});

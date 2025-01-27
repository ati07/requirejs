define(function () {
    var buildMap = {};

    return {
        load: function (name, req, onLoad, config) {
            var text = "Content of " + name; 
            buildMap[name] = text;
            onLoad(text);
        },

        write: function (pluginName, moduleName, write) {
            if (moduleName in buildMap) {
                var text = buildMap[moduleName].replace(/'/g, "\'");
                write(`define('${pluginName}!${moduleName}', function () { return '${text}'; });\n`);
            }
        },
        
        writeFile: function (pluginName, name, parentRequire, write) {
            // Get the file path to write
            var fileName = parentRequire.toUrl(`${name}.txt`);
            
            // Get the content for the file
            var text = buildMap[name] || `Default content for ${name}`;
            
            // Write the file with UTF-8 encoding
            write(fileName, text);

            // Optionally, write it as a module using write.asModule
            write.asModule(`${pluginName}!${name}`, fileName, `define(function () { return ${JSON.stringify(text)}; });`);
        },
        onLayerEnd: function (write, data) {
            // Write out any additional utility code
            write(`// End of layer: ${data.name || "unnamed"}\n`);
            write("// Resetting plugin internal state.\n");

            // Reset internal state
            buildMap = {};
        },
    };
});

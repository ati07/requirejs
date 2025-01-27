define('text',[],function () {
    var buildMap = {};

    return {
        load: function (name, req, onLoad, config) {
            // Simulate loading content at runtime
            var content = "Content of " + name;
            buildMap[name] = content;
            onLoad(content);
        },

        write: function (pluginName, moduleName, write) {
            if (moduleName in buildMap) {
                var text = buildMap[moduleName].replace(/'/g, "\\'");
                write(`define('${pluginName}!${moduleName}', function () { return '${text}'; });\n`);
            }
        },

        pluginBuilder: "./text-builder" // Specify the path to the builder module
    };
});


define('text!textModule.txt', function () { return 'Content of textModule.txt (from build)'; });

require(['text!textModule.txt'], function (text) {
    console.log("Loaded content:", text);
});

define("main", function(){});


// End of layer: main
;
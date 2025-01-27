
############################################################# Usage ################################################


# Load Javascript File

#### para 1
- RequireJs promots ModuleID to load the module js file instead of url. To increase maintanbility and optimizing the script

### para 2
- RequireJs load the script file with the help of baseURL which is set in data-main attribute of script file.


#### Summary:
- From above two para tells that how requireJs is loading the script files. If data-main in attribute mention in script tag then RequireJs load script file with this attributes.


### para 3
- we can set baseUrl with two method
 - we can set manualy in data-main attributs
 - If data-main is not set in attributes then requireJs make baseUrl directory of HTML file is located.

### para 4
- By defualt RequireJs assume that all dependency are scripts so it does not expect traing .js suffix in moduleIds. It automatically add whenever it load the moduleID to path. We can define group of script path in single moduleID using path config then we don't need to write script tag for every js file indivisually.

### para 5
- If we don't want to load script file directly, not with baseUrl and path. Then we can use following methods in ModuleID
 - we can directly write .js extenstion in script file
 - Or we can start with '/', then it will requireJs to load file from root directory
 - or we can pass CDN url.

### para 6
- It is best to use the baseurl and path to load script file to increase the optimization and it gives you to flexibility to change the file name.

### para 7
- To avoid the buch of configuration, don't use deep hirarchy folder structure for the script eigher keep in baseUrl directory
- If you want to keep your library or vendor file in seperate directory then make folder like lib folder and keep all files.


### para 8
- It says that try to keep library version in library name in lib folder.

### para 9
- Generally Script modules is loading using define() function. But some of legacy script don't use define() so requireJs need additional help to load the script. This is where Shim configuration comes in.
- If we don't load dependecy script of legecy script then error will comes in. Becuase RequireJs is loading scripts asynchronously.


# data-main Entry Point

- RequireJs loads script asynchronously which is set to data-main.
- There is a precuation that don't use dependecy module in HTML script tag which is loading in requireJs otherwise it will give error.
- if you want to load module like this then don't set module in data-main point.



# Define a Module

### para 1
- Modules in requireJs is better than traditional Modules becuase in traditional way there a lot of chances that module name can be conflict due to same namespace.

### para 2
- RequireJs loads script in order way which we have provioded in defined in define().


#### Simple Name/Value Pairs
- If module has no dependecy then we can simply pass object in define().

### Definition Functions
- If module has no dependency but we need to pass function then just pass function in define().


### Definition Functions with Dependencies
- If module has dependency then dependecy will pass in array at first argument and at second argument functiona will pass. The function will call once all dependency will loaded. And function should be return a object to define the module.
- If module return object then this module dose not exits a global object.

### Define a Module as a Function
- Modules does not return object then it can return a functiona or any valid value.


### Define a Module with Simplified CommonJS Wrapper
- If there is a code written in traditional CommonJs module format then we can use direct function in define() at a first argument.
- but it will not work in some devide PS3 or older opera browser.


### Define a Module with a Name
- if you want to give a module name in define() then just pass the name in at argument but this approach is not preferred becuase whenever we reuqired to use this module in another file then we need to change the file name.



### Other Module Notes

- ##### One module per file
 - Only one module should be defined as per javascrit file.

- ##### Relative module names inside define()
 - Require call can be happen inside of function to make sure reuqire is pass in first argument and also pass in function. Then we can call require.
 - Or we can use short hand technique to call require for that pass function at first argument and pass require. And keep rememeber that require need relative path of script file.

- #### Relative module names are relative to other names, not paths:
 - The loader stored modules by their name not their path if relative path is given then it find out the module with making references.


- #### Generate URLs relative to module:
 - If we need to generate relative url then we need to pass a require as dependency then write require.toUrl(..) to get the relative url

- #### Console debugging:
 - If you need to work on a module which is already loaded via require(["module/name"], function(){}) then call it in javascript console. we can call then function using require("module/name").callanyFuntion().
 - It only works if module is loaded.

### Circular Dependencies

- If you define a circular dependency module for example "a" need "b" and "b" needs "a". Then if we call "b" module then it will get undefined value of "a". "b" can be fetch "a" later using require(). First we can load in dependency in define(). Then we can call "a" using require().

- If you are using CommonJs then use exports which creates empty object which can immediataly available for the reference.
- Or we can use dependency array approach in CommonJs.



### Specify a JSONP Service Dependency:
 - JSONP(JSON with padding) is way to calling the service in javascript.
 - To use JSONP in requireJs, we just need to pass the callback with define in url with require. By calling, it will hit GET HTTP request and return a response in function parameter.

JSONP has some limitation
 1. JSONP only works with objects not for array, string or numbers.
 2. It calls url only one time
 3. If JSONP get timeout then other modules will not load and it will give error.




### Undefining a Module
 - requirejs.undef() is a global function which is use to undefining the a loaded module. It will reset the require internal loader to forget that module.
 - But there is limitation of this that it will not rmeove module from other module which has used this module so other module will read from cache.
 - It is only useful in error situation and redefning the module in future.




# Mechanics
- RequireJs loads each dependency in script tag using head.appendChild().
- RequireJs waits to load all dependency.
- It's ensure that module is loaded in correct order dependency module
- once all dependency module is loaded then it calls the definition function.


# Configuration Options:

- RequireJs is defining at top of HTML page then we can define config just after that if we don't use data-main attribute in srcipt tag.

- If we want to define config before requireJs load then we need to use a var require = {} object. Keep in mind that this varabile sholud be in var declared.

### Configuaration options
- #### baseUrl:
 - It is a root path which is use by requireJs to lookup all modules.
 - If by user not define by baseUrl then requireJs lookup the HTML directory and set baseURL by default.   
 - If data-main point is mentioned and baseUrl is not set then requireJS set data-main point as baseUrl.
 - RequireJs supports cross domain url also and set the baseUrl to domain url by default.
 - if we are using text!plugin template then it should be define in HTML page is located.

- #### paths:
 - It is defined in config file with an object which includes module name with relative path.
 - Whenever module is call then it will find first on paths object then make a full raletive path with combination of baseurl + path
 - In path module name should not be with js extension, it adds js extension automatically in name of module when module is loaded. 
 - There is should be a fallback local file to manage the CDN url, suppose there is issue while loading the CDN then it will fallback to local file and load it.   

- #### bundles
 - It helps to grouping the modules in a single file.
 - It is better than path because we don't need to write path for all modules individually.
 - It holds the loader Plugin resources for example text!template.html. It is advantage over paths.
 - It locate the module in form of key value pairs



- #### shim:
 - Configure the dependency, exports and custom initialization in older, traditional global browser scripts that do not use define(). To load the dependency.
 - deps:- It's specify that scripts should be load before shimmed script for example: backbone is depend upon the jquery and underscore js so first jquery and underscorejs will load then backbone will load.
 - exports:- script will load defined variable globally.
 - init:- here we can customize our custom function and we can return export's value.

 - Shim also provide feature to verify the load errors

 - Important Notes:
  - Shim of legecy Code:- use shim for only legecy code not for AMD. It will not work
  - Avoid Mixing Shim and CDN:- try to avoid Shim and CDN together, if you are using then ensure that dependency of shim loaded correctly order to avoid the error. 
  - Shim config is not supported in Nodejs becuase Nodejs does not have same global varaible as browsers have.


- ### map:
 - Map config basically uses to manage the version of librar. With the help of map we can use many version at time.


- ### config:
 - Config option basically use for the put the deatil of API keys and many essential keys, also we can put the repeating values, which are used in entire app.

- ### packages
 - here we can load modules from CommonJs packages


- ### nodeIdCompat
 - In Nodejs read the example.js and example are same file but in requirejs it's read both file is different so if we want that Requirejs also read same for that we need to set nodeIdCompat true.


- ### waitSeconds
 - number of second wait before loading of script. By default it set to 7 sec.

- ### context
 - Context option allow Requirejs to define multiple context in same page with their name.
 - By using this we can control multiversion of library easily.

- ### deps
 - It is an array where we want to load dependency of a module. And it will load dependecy as soon as require loads.

- ### callback
 - When we want to execute a callback when dependecy loaded and just before requireJS load. Then we can use this callback option.

- ### enforceDefine
 - If it is set true then it will thrown an error if there any issue occure in loading the scripts or dependency in shim.


- ### xhtml
 -  If set to true, document.createElementNS() will be used to create script elements


- ### urlArgs
 - It allow RequireJs to append query string arguments to the URLs.
 - If a file is updated on the server but the browser uses a cached version, it may not reflect the changes so we can append some query string that browser can make reflect

- ### scriptType
 - Specify the type attribute to script tag. we can define custom type.

- ### skipDataMain
 - If this option is set true then RequireJs will skip data-main attribute and not load the relevant modules.



# Advance Usage

- To load the packages in CommonJs with requireJs, Then you need to follow the folder structure like this way suppose a package name is cart which contains app.js file then we need to mention in packages option in a array with name, location and main in a object. So name should be cart, location will file location and main will be app.


- If we want to load non AMD module then use r.js and commonJs converter that RequireJs can understand.

- RequireJs does not support multiversion with same context.


# Handling Error

 - Errback:- Use require() to handle the module error.
 - Path callbacks:- setup multiple paths to handle the CDN loading error.
 - Global Error handling:- Use requirejs.onError for catching uncaught errors and logging/debugging
 - Internet Explorer Compatibility error:- set true enforceDefine to ensure to error detection in IE


### Mismatched Anonymous define() Modules Error
 - If Module loading directly with script, and module is using define() without associated to requireJs. Then it will give Module error
   - To avoid this we can used define with named module Or we should use requireJs Api
 - If name module and Anonymous module conflicting then RequireJs can't resolve Anonymous property

 - If we are working with loader plugin or anonymous module without without bundling the your file with RequireJs optimiser, then it will give error

 - Declaring var define in your file then it prevent the RequireJs to parsing the modules. To avoid this replace var define; with /*global define */ for linting


### Load timeout for modules

 - This error generally come when RequireJs failed to load the module in 7 sec.

 - script Error:-If there is any error like syntex error etc then requireJs failed to load, to debug this see the error in console.
 if we  are using tool like Firbug then we can open the page in another browser somtimes error didn't show.

 - Incorrect Path Configuration:- If module path is incorrect then RequireJs faild to find the module and give error. To check debug this we need to see network tab where it will indicate that script not found

 - Multiple IDs Pointing to the Same File:
  - If ModuleIDs are pointing same file with anonymous file then requirejs will be confused. 
  - to avoid this this the name to anonymous module related to path.


### Error Evaluating Module
 - This error occure when define() encounter a issue while executing the module. This issue shows in console if module has any error in code.


### Module name ... has not been loaded yet for context: ...
- if require() is called outside of define() in module it will give error
- A dependency is missing in the define() dependency array
- There's a space between require and parentheses in older RequireJS versions for example: require() instead require () 


### Invalid require call
- It will occure when dependecy is not mention in array
- dependencies should use an array to list the dependencies

### No define call for ...
- Use define() for AMD to load the dependecies
- Ensure that shim is using for Non AMD library script
- Test script in multiple broswer to catch the error


### Path is not supported: ...
- 


# RequireJS Optimizer
- The optimizer will only combine those module which are define in require and define() static literals not dynamic module.
 But dynamic module still can be loaded in runtime.
- If we want to load dynamic module in optimize file then we need to set modules in include in build.js

- We can build optimizer file using one line commond node r.js -o baseUrl=. paths.jquery=lib/jquery name=app out=app-built.js
- In commond line Dot(.) reading the object key or make object's key so if you dont't want to make a key then use Build.js file profile.


### Shallow exclusions for fast development
 - If we want to optimize all module in a single file but that one which you are debuging suppose you ar debugging two.js file so use shallow cmd
 node ../../r.js -o name=main excludeShallow=two out=main-built.js baseUrl=.


### empty: paths for network/CDN resources
 - RequireJs loads uses CDN to load the library. while building the build file these scripts are not include in build file.
 So to manage this there are two ways
 1. we can download this file and save in local
 2. In commond make path empty so that browser load the file in runtime dynamically
 node ../../r.js -o name=main out=main-built.js baseUrl=. paths.jquery=empty:


### Optimizing one CSS file
 - It we wanted to optimize the css then we need to run these commond in css file

 node ../../r.js -o cssIn=main.css out=main-built.css



### Optimizing a whole project
- Optimizer can take care of build file into a single folder for that we can build.js file where all relevent directory path is wriiten.


### Turbo options
-Turbo option allow user to build the file without minifying the file. It use when optimization is mroe important than performing. It helps to speedup in development.
Some useful keys
1. optimize: "none" - skip minifying
2. skipDirOptimize: true - only minify the module layers
3. keepBuildDir: true - already build will not deleted only updated the changes
4. normalizeDirDefines: "all" - Ensure define() calls in modules



### Integration with has.js in RequireJS Optimizer
- Has.js feature has very good use cases in code. Where we can defined which code we wanto minifying which one we want to left. And
also we can defined the envioronment in build.js file that while optimizing we can set condition true or false.

### Source Maps in RequireJS Optimization
- Source map are a feature in requirejs which is mapped on minified file means it's convert minified file to unminified. It helps in debuging the code. We can see unminified file in developer tools
- It uses uglify2 to mapped minified file.
- set generateSourceMaps to true so it will generate sorcemap file
- set preserveLicenseComments to false so Disable license comments for source maps to work

### Common Pitfalls
- Always put dir outside of source directory to prevent nested files
- Use PATHS to map the external file/library using baseUrl
- Shim configuration has dependecy to load the library so avoid hosted CDN for optimizer. We can download that in local file. 



# Loader Plugins

- requirejs support the loader plugin, which is help to inject non-JavaScript dependencies( HTML,JSON, or CSS) in javascript file. And ensure that they are loaded before the script executed.

- These plugin specify with "plugin!resource" syntex. Here plugin is the name of plugin and resource is path directory of this plugin will load.

### Specify a Text File Dependency
 - There is no good way to write HTML in javscript as regular HTML. We can write in string HTML but it's very difficult the manage the string HTML.
 - RequireJs has a plugin text!, that name is text.js. In this file we can write a regular HTML code  
 - The text.js plugin allows you to load HTML (or other text-based files) as dependencies

###  DOM Ready Dependency (domReady.js)
 - script can load faster than DOM so it can be give error so manage this issue we can use domReady.js module



### Define an I18N Bundle
 - When our app get populor then it's important to developer to that make app in way that app work in local laungauge to help user to understood.
 - RequireJS provide a I18N plugin to manage different language. It's load plugin before the script load.


# Plugin API

- To build the custom plugin we need to set some method inside the plugin module 

 1. load() - This function is mandatory to build the plugin. It's call the resources
 2. normalize - It is optional in plugin but if we want to normalize the name of plugin name then we can use this method
 3. write - This method mainly used in optimization to build the file, it's generates optimized code.
 4. pluginBuilder - It's specifies that which module is used for optimization while build process


### load: function (name, parentRequire, onload, config)
- Load Function is taking some arguments
 1. Name - It is the name of resource which is pass after the ! for example if this is passed 'foo!something/for/foo' then resource name will be something/for/foo.
 2. parentRequire - It is a function which is take local require to load the other modules. It's provide other utils
   - parentRequire.toUrl(moduleResource) - By using this method we can convert module name to Full url
   - parentRequire.defined(moduleName) - By this method we can check that module is define or not
   - parentRequire.specified(moduleName) - By this method we can check the module has been loaded or in process
 3. onload (Function) - It is a callback that to give infromation to requireJs that module is ready. This should be call with module's value.  If it get error then it will will manage in onload.error method. 
 4. config - It is a object where we can define setting of plugin or we can pass the context. When optimizor wil build then it will set isBuild to true

 Note- Some plugin need javascript which is need to extract from text to load as a resource. For that we need to use onload.fromText() to evaluate the javscript.
 5. text - The string javscript need to evaluate 

 6. Build considerations - Optimizor build the file synchronously. If isBuild is true then we are saying optimizer to don't wait for load resources it's loaded successfully. Some plugin load asynchronously in browser so we need to build a logic for.


### normalize: function (name, normalize)
 - Normalize function ensure that name of resource are normalize to cprrect path. It is very helpful when resource name is given in relative path.
 this function takes two arguments name, normalize
1. name- This is the resource name
2. normalize - this is function with is normalize the modules.


### write: function (pluginName, moduleName, write)
- It is noly use for optimizer. This ensure that optimizer are building a single file. And It only require that when optimizer belogs to optimized layer

This function takes 3 arguments
1. pluginName - plugin name should be pass
2. moduleName - Normilized name of resources
3. write - It is a function that is provide the output of content which is provided by plugin, when we want to added content to optimized file. 


### onLayerEnd: function (write, data)
- It is callback which will be trigger when all module is optimized. By this method we can also adds non module code to  each layer of plugin
- It is also help to reset the internal state of plugin once all module is optimized.

It takes two argument in functions
- write - A function used to append content to the optimized file.
- data - An object with two argument
  1. module name
  2. path- path of module


### writeFile: function (pluginName, name, parentRequire, write)
 - It is only use for optimizer. It is used when plugin needs to create a additonal output files for its dependencies while optimization process
 - It is only work when optimizeAllPluginResources: true option is enabled in the RequireJS optimizer's build profile



### pluginBuilder

 - To implement the pluginBuilder we just need to add a string that will contain path of plugin module which will be load when optimizer will be build optimize file when then this plugin will run in process.
 1. Both the plugin and the builder should avoid named define calls
 2. It runs in optimizer's envioronment, 

















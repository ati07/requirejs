
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
 














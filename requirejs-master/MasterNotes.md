<!-- Github page -->
### .jscsrc
- This file is a configuration file for JSCS (JavaScript Code Style)

### .jshintrc
- It is configuration file for JsHint.
- It is used to enforce coding standards, detect errors, and catch potential issues in JavaScript code

### .travis.yml
- file is the configuration file for Travis CI, It is use for continuous integration for the testing and development

### Caja Compliance:
- Caja is a security framework that sandboxes JavaScript code to prevent security vulnerabilities (e.g., XSS attacks) 


# Starting points
- When require JS will start loading first of all it set the three varaible in global require, requirejs, define with undefined
- Then it call the IIFE function which takes two arguments firt one is global object, and second is setTimeout,it passing the setTimeout to ensure the enviorment is supporting this or not for example Caja and other sandbax javascript env is not supporting this.

### NextTick functions
- This function use to ensure that execution is going asyncrounously

### commentReplace
- this method used to remove the javscript comments expect some of cases

### isFunction
- Checking variable is functions or not

### isArray
- check variable are array or not

### each
 - helper function to iterate over the array. If function return true it will break

### eachReverse
 - helper function to iterate over the array in reverse order. If function return true it will break.

### hasProp
 - It check that object has property or not

### getOwn
 - return the object property value

### eachProp
- Iterate over property of an object and call the function for each propert value. It's break when functions return truthy value

### mixin
- This method is used to mix the source properties into target.

### bind
- Similar to Function.prototype.bind

### scripts
- This function use to takeout all script tag element in an array

### defaultOnError
- to throw the error by default. if needed

### getGlobal
- This method is getting a global that is expressed in dot notation, like 'a.b.c'

### makeError
 - If we want to throw a custom error then we can use this function

### new Context:
 - this function has all method to create context for of a module like

 #### trimDots
 - If module path has dots then it will extract the module name in different cases. This method taking array as a input and modify that with manuplition of array method.

 #### normalize
 - It takes as parameter name, basename,applyMap is a boolean and return normalized name.
 - With the help of this method we can normalize the path of module without '..'

 #### removeScript
 - The removeScript function removes a "script tag" element from the DOM that matches both a specified data-requiremodule attribute    (name) and a specified data-requirecontext attribute (context.contextName). 
 - It only runs in a browser environment, ensuring the script removal process is done dynamically on the client side
 
 #### hasPathFallback
 - If requireJS failed to load first moduleId then it will try with second ModuleID.

 #### splitPrefix
 - This method is helpful in manange the plugin module and resource name.

 #### makeModuleMap
 - This function is use to create a plugin module with given plugin name and
 - It takes plugin name, parentModuleMap, IsNormilize and applyMap as arguments
 - It return a object of plugin details which will have url, suffix, etc.

 #### getModule
 - It help to get a module from exiting module in registry if there is not present then it create module with new context.
 - return module
 
 #### on method
 - It is just like the event listener. It trigger the on callback method of Module if it's registered 

 #### onError
 - It also trigger the error method of module when a error is occur while loading or any issue came with module.
 - It trigger the onError callback method which is associated with Module

 #### takeGlobalQueue
 - This function transfers all items from a global queue (globalDefQueue) to a context-specific queue (defQueue) and also keeps track of which module
 
 #### breakCycle
 - breakCycle method is very usefull in hamdling the cyclic dependency it's check that there is any infinite dependecy recursion or not.
 - It also trace the proccessed depedency
 
 #### checkLoaded
 - It is tracing the activity of module loading, That while loading what issues are comming suppose there is any path mismatch, timeout error, etc
 - It is also retrying the module untile timeout error occur

 #### Module
 - It is a Module Constructor, where defined all method needed for MODULE creation for example
  - init Method: 
     - Whenever MODULe will initialize the module dependecy will will call and call the enable method. Also this method prevent    the reinilization of method.
  - defineDep Method: a module is registered in export
  - fetch Method: This method is responsible for initiating the load the module in enviorment and also check this it's loaded or not
  - load Method: This method is trigger the context.load method to load the module
  - check Method: It is crucial part of Module it is chech that module is ready to defined. If module is rqady then inform the sytsem to module is ready.
  - callPlugin Method: This method help to create the plugin module
  - enable Method: This method mark the enable that all depdency is loaded for module
  - On Method: This method help to register the event in callback array
  - emit Method: This method help to call callback  of the register event.
 #### callGetModule:
 - This method help to skip the module which is already defined it will not define again

 #### removeListener
 - This function removes an event listener from a DOM element (node). It ensures compatibility with different browsers, including older versions of Internet Explorer (IE).

 #### getScriptData
 - This function return a object of srcipt data, then remove the eventListner from element.

 #### intakeDefines
 - It process the both globally defined modules and queued modules (defQueue).
 - It handle the mismatch anonymous defined module to prevent the duplicay.
 - It also ensure that all modules are defined and ready to use.




# Test Cases

### ANON test:
- In this test case I understand how requrieJS load the dependecy module in browser

### Bundles test case
- In this case I understood the bundling method of requireJS. By this method we can easily import modules without passing the path for all modules one by one.

### Circular test case:
- In this case, i understood the login of circular dependecy means modules are depended each other

### Data-main baseURL:
- When require is declare with var before complete loading of requireJS then var require will setup to cfg variable.

### DataMainPlugin:
- We can also pass plugin name with resource in data-main point.

### skipDataMain
- We can tell requireJS to skip loading of the Data-main module if we set it's true in config or var require.

### Datauri
- If path has script data in string form then it will use
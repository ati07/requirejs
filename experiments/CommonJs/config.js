require.config({
    baseUrl: "CommonJs", // Base directory for module loading
    packages: [
      {
        name: "app", // The name used for requiring the package
        location: "app", // Folder location of the package
        main: "main" // Main entry file inside the package (default is "main.js")
      },
      {
        name: "utils",
        location: "utils",
        main: "helper" // Here, "helper.js" is the entry file
      }
    ]
  });
  
  // Using the packages
  require(["app", "utils"], function (app, utils) {
    console.log("App module loaded:", app);
    console.log("Utils module loaded:", utils);
  });
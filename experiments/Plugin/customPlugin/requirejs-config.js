requirejs.config({
    baseUrl: './', // Base URL for modules
    paths: {
      textLoader: 'plugins/textLoader', // Path to the textLoader plugin
      resources: 'resources' // Path to resources
    }
  });
  
  // Load the main script
  require(['main']);
  
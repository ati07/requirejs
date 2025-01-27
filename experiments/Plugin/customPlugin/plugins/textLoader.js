define({
    load: function (name, parentRequire, onload, config) {
      // Generate the full URL for the resource using parentRequire.toUrl
      const url = parentRequire.toUrl(name);
      console.log('url',parentRequire,url,config)
      // Use fetch to load the resource
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Failed to load resource: ${url}`);
          }
          return response.text();
        })
        .then((text) => {
          // Pass the loaded content to RequireJS
          onload(text);
        })
        .catch((error) => {
          // Notify RequireJS of an error
          onload.error(error);
        });
    }
  });
  
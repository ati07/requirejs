require.config({
    paths: {
        libraryA: [
            "https://cdn.example.com/libs/libraryA.min", // CDN location
            "libs/libraryA"                              // Local fallback
        ]
    }
});

require(['libraryA'], function(libraryA) {
    console.log("Library A loaded successfully!");
});
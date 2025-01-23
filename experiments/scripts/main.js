// require.config({
//     baseUrl: 'app',
//     paths: {
//       jquery: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.4/jquery.min', // or local path
//       underscore: 'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.13.6/underscore-min',
//       backbone: 'https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.5.0/backbone-min'
//     },
//     shim: {
//       backbone: {
//         deps: ['underscore', 'jquery'], // Backbone depends on Underscore and jQuery
//         exports: 'Backbone'
//       },
//       underscore: {
//         exports: '_'
//       }
//     }
//   });

require(['A'],function(A){
  console.log("Main module executed");
})
  
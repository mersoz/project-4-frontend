// app.js is the main JS file which you should define your Angular module

// $.get("http://localhost:3000/api/users").done(function(res){
//   console.log(res);
// });

angular
  .module('jobApp', ['ui.router', 'ngResource', 'satellizer', 'checklist-model'])
  .constant('API_URL', 'http://localhost:3000/api');

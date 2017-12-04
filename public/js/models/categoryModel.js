'use strict'

app.factory('CategoryModel', function ($http, ) {

  var categories = [];

  return {
    getAllCategorys: function(){
      return $http({ method: 'GET', url: '/api/v1/categories'})
        .then(function successCallback(response) { 
          categories = response.data;
          return categories;
        }, function errorCallback(response) {
          console.log("errorCallback: " + response);
        }
      );
    },
    getCategoryById: function(categoryId){
      $http({
        method: 'GET',
        url: '/api/v1/categories/'+categoryId
      }).then(function successCallback(response) {
        return response.data;
      }, function errorCallback(response) {
        console.log("errorCallback: " + response);
      });
    },
  } 
});


   /* createCategory: function(user, pass){
      //return new Category(user, pass);
    },
    registerCategory: function(category){
    //categorys.$add(category);
  },
  deleteCategory: function(category, categoryId){
    //$firebaseObject(ref.child('Categorys').child(categoryId)).$remove(category.$id);
  },
  updateCategory: function(categoryOld, categoryNew){
    //categoryOld.$save(categoryNew);
  }
*/
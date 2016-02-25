'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
//angular.module('myApp.services', []).
  //value('version', '0.1');
  
  

var module = angular.module('myApp.services', []);


module.service('getAnswService', function () {
    
  // var groupedProjList=[{'id':'4','name':'bernie','age':'15'}];
      var groupedProjList=[{}];

      var selectedAplicList=[{}];

   
   //********save projects
   
   this.save=function(project){
   	
   	  
   	groupedProjList.push(project);
   	
   	
   };
   
   
   this.clear=function(){
   	
   	  groupedProjList=[{}];
   	  return groupedProjList;
   	
   };
   
   this.list=function(){
   	
   	return groupedProjList;
   	
   };

    //********save selected applicant

    this.saveAplic=function(applicant){
      
        
      selectedAplicList.push(applicant);
      
      
   };
   
   
   this.clearAplic=function(){
      
        selectedAplicList=[{}];
        return selectedAplicList;
      
   };
   
   this.listAplic=function(){
      
      return selectedAplicList;
      
   };



});
'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MyCtrl1',  function($scope,$http,$routeParams,$sce,getAnswService) {

                 $scope.selectedCat={};

                 $scope.selectedProj={};
                 
                 $scope.routeId=$routeParams.itemRID;
                 
               
                 
                // $scope.testMe=GroupProjService.list();
                 $scope.groupedProjList=getAnswService.list();

                

     //*****get json data************************************
       $http.get('js/applicants.json').success(function(data){
       	
       	  // $scope.projcatList=data.applicants;
 
             $scope.applicantList=data.applicants;

       });
 
 //**********get json data
       $http.get('js/ques_answers.json').success(function(data){
       	
       	  $scope.projectList=data.ques_answers;
         
       });
 
        
 //********show applicant's answers details " button click call*******************************************
 
          // $scope.groupingProj=function(){

           $scope.groupingAnsw=function(){ 
          	
          	
          	         if($scope.selectedCat.ID!=""){
			                 	
                        $scope.groupedProjList=getAnswService.clear();
			                 	   
			         }
                 	
                 	angular.forEach($scope.projectList,function(s){
                 		
   		                 	   if(s.PROJECTCATID==$scope.selectedCat.ID){
			                 	    getAnswService.save(s);
				                 	   
			                 	   } 	
			           
                  });
                  
       };   

       $scope.getVideoUrl=function(){

            return $sce.trustAsResourceUrl("media/"+$scope.groupedProjList[$scope.routeId].CONTACTNAME+".mp4");



       };

      
 //******** show projects details link click*******
 
       
  })
  
  
  
  
  .controller('MyCtrl2', function($scope,getAnswService) {
  	
  	$scope.groupedProjList2=getAnswService.list();
  	
  	

  });

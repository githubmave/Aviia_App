'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MyCtrl1',  function($scope,$http,$routeParams,$sce,getAnswService) {

                 $scope.selectedCat={};

                 $scope.selectedProj={};
                 
                 $scope.routeId=$routeParams.itemRID;
                 
               
                 
                // $scope.testMe=GroupProjService.list();
                 $scope.groupedProjList=getAnswService.list();
                 $scope.selectedAplicList=getAnswService.listAplic();
                

     //*****get json data************************************
       $http.get('js/applicants.json').success(function(data){
       	
       	  // $scope.projcatList=data.applicants;
 
             $scope.applicantList=data.applicants;

             // $scope.selectedCat=$scope.applicantList[0];

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
                        $scope.selectedAplicList=getAnswService.clearAplic();
			                 	   
			               }

                    getAnswService.saveAplic($scope.selectedCat);

                 	
                   	angular.forEach($scope.projectList,function(s){
                   		
     		                 	   if(s.PROJECTCATID==$scope.selectedCat.ID){
  			                 	    getAnswService.save(s);


  			                 	   } 	
  			           
                    });

       };   

       // grouping video for each applicant, for links


           $scope.groupingAnsw2=function(applicant){ 


                      $scope.selectedCat=applicant;
            
            
                     if($scope.selectedCat.ID!=""){
                        
                        $scope.groupedProjList=getAnswService.clear();
                        $scope.selectedAplicList=getAnswService.clearAplic();
                           
                     }

                    getAnswService.saveAplic($scope.selectedCat);

                  
                    angular.forEach($scope.projectList,function(s){
                      
                             if(s.PROJECTCATID==$scope.selectedCat.ID){
                              getAnswService.save(s);


                             }  
                   
                    });

       };   


       $scope.getVideoUrl=function(){

            // return $sce.trustAsResourceUrl("media/"+$scope.groupedProjList[$scope.routeId].CONTACTNAME+".mp4");

            // return $sce.trustAsResourceUrl("media/"+$scope.selectedCat.CONTACTNAME+".mp4");

            // return $sce.trustAsResourceUrl("media/StevenQ1_Answ1.mp4");

        // return "media/StevenQ1_Ans1.mp4";


          return $sce.trustAsResourceUrl("media/"+$scope.groupedProjList[1].CONTACTNAME+".mp4");


       };

       
  })
  
  
  
  
  .controller('MyCtrl2', function($scope,$http,$routeParams,$sce,getAnswService) {

  	
  	// $scope.groupedProjList2=getAnswService.list();


           $scope.selectedCat={};

                 $scope.selectedProj={};
                 
                 $scope.routeId=$routeParams.itemRID;
                 
               
                 
                // $scope.testMe=GroupProjService.list();
                 $scope.groupedProjList=getAnswService.list();
                 $scope.selectedAplicList=getAnswService.listAplic();
                

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
                        $scope.selectedAplicList=getAnswService.clearAplic();

                           
                     }


                      getAnswService.saveAplic($scope.selectedCat);

                      
                      angular.forEach($scope.projectList,function(s){
                        
                               if(s.PROJECTCATID==$scope.selectedCat.ID){
                                getAnswService.save(s);
                                 
                               }  
                     
                      });
                  
       };   

       //====================================

        $scope.groupingAnsw2=function(applicant){ 


                      $scope.selectedCat=applicant;
            
            
                     if($scope.selectedCat.ID!=""){
                        
                        $scope.groupedProjList=getAnswService.clear();
                        $scope.selectedAplicList=getAnswService.clearAplic();
                           
                     }

                    getAnswService.saveAplic($scope.selectedCat);

                  
                    angular.forEach($scope.projectList,function(s){
                      
                             if(s.PROJECTCATID==$scope.selectedCat.ID){
                              getAnswService.save(s);


                             }  
                   
                    });

       };   



       $scope.getVideoUrl=function(){

            
            //=================
             return $sce.trustAsResourceUrl("media/"+$scope.groupedProjList[2].CONTACTNAME+".mp4");


       };



  	
  	

  });

var app = angular.module('budgetApp');




app.controller('mainCtrl', function($scope, mainService) {
    
    
    $scope.envelopes = [];
    
    
    $scope.addNewEnvelope = function(nameIn, amt, acct) {
        
        if (acct.toLowerCase() === 'checking' || acct.toLowerCase() === 'savings' || acct.toLowerCase() === 'cash') {
            
            
        $scope.envelopes.push(new Envelope(nameIn, amt, acct));
        
        console.log(nameIn, amt, acct);
        }
        else {
            alert("error: choose valid account type");
        }
        
        
   //***MOVE A LOT OF THIS CODE TO mainService.js***     
        
    }
    
    
    
    
    var Envelope = function(name, amount, account) {

            
        this.name = name;
        this.amount = amount;
        this.account = account;
        return this;  //might not need this line?
        
        
        

        
    };
    
    
    
    $scope.removeEnvelope = function(index) {
       $scope.envelopes.splice(index, 1);
    }
    
    
});
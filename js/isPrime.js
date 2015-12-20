"use strict";
(function() {
    function isPrime(x) {
        var array = [];
        var count = 0;
        if (x > 0) {
            for (var i = 0; i <= x; i++) {
                array[i] = i;
            }
            i = 0;
            for (i; i <= x; i++) {
                if (x % array[i] == 0) {
                    count++;       
                }
            }
            if (count==2)
				console.log("The number is prime");            	
        	else
        		console.log("The number is NOT prime");
        } else console.log("Enter a positive number");
    }
    isPrime(12);
})();
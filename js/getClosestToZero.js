"use strict0";
(function() {
    function getClosestToZero() {
        var close;
        var array = [],
            newArray = [];
        var x = arguments.length;
        for (var i = 0; i < x; i++) { //ініціалізація масиву
            array[i] = arguments[i];
        }
        newArray == array; //копія масиву
        close = arguments[0];
        for (i = 0; i < x; i++) {
            newArray[i] = Math.abs(array[i]); //елементи newArray набувають абсолютних значень 
        }
        for (i = 0; i < x; i++) //пошук найближчого до 0
            if (close > newArray[i]) {
                close = newArray[i]
            }
        //console.log(array);
        //console.log(newArray);
        console.log(close);
    }
    getClosestToZero(5, -2, -1, 6, -7, 6);
})();
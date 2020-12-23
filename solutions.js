
(function (exports) {
    "use strict";

    exports.sumOfMultiplesOf3or5 = function(n) {
        n = parseInt(n)
        var sum = 0
        for (var i=1; i < n; i++){
            if (i%3 ==  0 || i%5 == 0){
                sum += i
            }
        }
        return sum;
    };


    exports.sumOfEvenValuedFiboTerms = function(n) {
        n = parseInt(n)
        var sum = 0
        var term1 = 1
        var term2 = 1
        for (var i=3; i <= n; i++){
            let term = term1 + term2
            if (term % 2 == 0){
                sum += term
            }
            if (i%2 == 1){
                term1 = term
            }
            else{
                term2 = term
            }
        }
        return sum
    }

    exports.largestPrimeFactorOfN = function (n) {
        n = parseInt(n)
        var largestPrimeFactor = 2
        var origN = n
        for (var i=2; i<origN/2 && n > 1; i++){
            if (n%i == 0){
                while (n%i == 0){
                    n /= i
                }
                largestPrimeFactor = i
            }
        }
        return largestPrimeFactor
    }

    exports.isPalindrome = function(number)  {
        return number.toString() === number.toString().split("").reverse().join("")
    }


    exports.largestPalindromeFromProductOfNDigitnumbers = function (n) {
        n = parseInt(n)
        var largestPalindrome = 0
        var start = Math.pow(10, n)-1
        var end = Math.pow(10, n-1)
        for (var i=start; i>end; i--){
            if (largestPalindrome != 0 && largestPalindrome > i*999) {
                break
            }
            for (var j=start; j>end; j--){
                let number = i*j
                if (isPalindrome(number)) {
                    if (number > largestPalindrome){
                        largestPalindrome = number
                    }
                }
            }

        }
        return largestPalindrome
    }

    var gcd = function(a, b){
        if (a > b){
            gcd(b, a)
        }
        if (a == 0){
            return b
        }
        return gcd(b%a, a)
    }

    var runningLCM = function(a, b){
        return a*b/gcd(a, b)
    }

    exports.smallestMultiple = function(n) {
        var smallestMultiple = 0
        var arr = _.range(1, parseInt(n)+1)
        return arr.reduce(runningLCM, 1)
    }

    exports.differenceOfSumOfSquareAndSquareOfSum = function(n) {
        n = parseInt(n)
        return Math.pow(n*(n+1)/2, 2) - ((n*(n+1)*(2*n+1))/6)
    }


    var primeEratosthenes = [false, true]
    var primesFound = [2]
    var nthLargestPrimeSoFar = primesFound.length

    exports.sieveOfEratosthenes = function(nthPrime) {
        nthPrime = parseInt(nthPrime)
        if (nthPrime > nthLargestPrimeSoFar) {
            while (nthLargestPrimeSoFar < nthPrime){
                var prevLength = primeEratosthenes.length
                primeEratosthenes = primeEratosthenes.concat(Array(10000))
                for (var i=prevLength; i<primeEratosthenes.length; i++){
                    primeEratosthenes[i] = true
                    for (var j=0; j<primesFound.length; j++){
                        if (((i+1) % primesFound[j]) == 0){
                            primeEratosthenes[i] = false
                            break
                        }
                    }
                    if (primeEratosthenes[i]){
                        primesFound.push(i+1)
                        nthLargestPrimeSoFar = primesFound.length
                    }
                }
            }
        }
        return primesFound[nthPrime-1]
    }

    exports.sumOfAllPrimesBelowNum = function (num) {
        num = parseInt(num)
        while (num > primeEratosthenes.length){
            exports.sieveOfEratosthenes(nthLargestPrimeSoFar+5)
        }
        var sum = 0;
        for (var i=0; i<num; i++){
            if (primeEratosthenes[i]){
                sum += (i+1)
            }
        }
        return sum
    }

    exports.maxAdjacentDigitsProduct = function(nStr, m){
        m = parseInt(m)
        var maxProduct = 0
        var currProd = 1
        nStr = nStr.replace( /[\r\n]+/gm, "" );
        for (var i=0; i<nStr.length-parseInt(m); i++){
            for (var j=i; j<i+parseInt(m); j++){
                currProd *= parseInt(nStr[j]);
            }
            console.log(currProd)
            maxProduct = Math.max(currProd, maxProduct)
            if (Number.isNaN(currProd)){
                console.log("Idxs ", i, j)
                for (var j=i; j<i+parseInt(m); j++){
                    console.log(nStr[j]);
                }
            }
            currProd = 1
        }
        console.log(maxProduct)
        return maxProduct
    }

    var getDivisors = function (number) {
        var divisors = [1]
        for (var i=2; i<number/2; i++){
            if (number%i == 0){
                divisors.push(i)
            }
        }
        return divisors
    }

    exports.pythagoreanTripletAddingToSum = function (s) {
        s = parseInt(s)
        let m = null, n = null, a=null, b=null, c=null, d=null, k=null;
        let mLimit = Math.sqrt(s/2)
        let found = false;
        for (m = 2; m <= mLimit; m++) {
            if ((s / 2) % m == 0) { // m found
                if (m % 2 == 0) { // ensure that we find an odd number for k
                    k = m + 1;
                } else {
                    k = m + 2;
                }
                while ( (k < 2 * m) && (k <= (s / (2 * m))) ) {
                    if (s / (2 * m) % k == 0 && gcd(k, m) == 1) {
                        d = s / 2 / (k * m);
                        n = k - m;
                        a = d*(m * m - n * n);
                        b = 2 * d * n * m;
                        c = d * (m * m + n * n);
                        found = true;
                        break;
                    }
                    k += 2;
                }
            }
            if (found) {
                break;
            }
        }
        return "a : " + a  + " b : "  + b + " c : " + c + ((a != null) ? (" Product: " + a*b*c) : " No solution exists ")
    }

    exports.productsInAGrid = function (nStr, m){
        m = parseInt(m)
        var maxProduct = 0
        var currProd = 1
        nStr = nStr.replace( /[\r\n]+/gm, "EL")
        var matrix = []
        var rowsStrs = nStr.split("EL")
        console.log(rowsStrs)
        for (let i=0; i<rowsStrs.length; i++){
            let rowStr = rowsStrs[i].split(" ")
            let rowNums = []
            for (let i=0; i<rowStr.length; i++){
                rowNums.push(parseInt(rowStr[i]));
            }
            matrix.push(rowNums)
        }
        var maxProduct = 0
        for (var i = 0; i < matrix.length; i++){
            for (var j = 0;  j < matrix[i].length; j++){
                var prodInit = matrix[i][j]
                var prodRow = prodInit
                var rowDigits = 1
                var prodCol = prodInit
                var colDigits = 1
                var prodDia = prodInit
                var diaDigits = 1
                for (let k=j+1; (k<j+m) && (k<matrix[i].length); k++){
                    prodRow *= matrix[i][k]
                    rowDigits += 1
                }
                for (let l=i+1; (l<i+m) && (l<matrix.length); l++){
                    prodCol *= matrix[l][j]
                    colDigits += 1
                }
                for (let di=i+1, dj=j+1; (di < i+m) && (di < matrix.length) && (dj < j+m) && (dj < matrix[di].length); di++, dj++){
                    prodDia *= matrix[di][dj]
                    diaDigits += 1
                }
                let prevProd = maxProduct;
                maxProduct = Math.max(maxProduct, prodRow, prodCol, prodDia)
            }
        }
        return maxProduct
    }

}(typeof exports === 'undefined' ? (self.solutions = {}) : exports));



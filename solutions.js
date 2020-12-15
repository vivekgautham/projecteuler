
export var sumOfMultiplesOf3or5 = function(n) {
    var sum = 0
    for (var i=1; i < n; i++){
        if (i%3 ==  0 || i%5 == 0){
            sum += i
        }
    }
    return sum;
};

export var sumOfEvenValuedFiboTerms = function(n) {
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

export var largestPrimeFactorOfN = function (n) {
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

var isPalindrome = function(number)  {
    return number.toString() === number.toString().split("").reverse().join("")
}


export var largestPalindromeFromProductOfNDigitnumbers = function (n) {
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

export var smallestMultiple = function(n) {
    var smallestMultiple = 0
    var arr = _.range(1, parseInt(n)+1)
    return arr.reduce(runningLCM, 1)
}

export var differenceOfSumOfSquareAndSquareOfSum = function(n) {
    return Math.pow(n*(n+1)/2, 2) - n*(n+1)*(2*n+1)/6
}


var primeEratosthenes = [false, true]
var primesFound = [2]
var nthLargestPrimeSoFar = primesFound.length

export var sieveOfEratosthenes = function(nthPrime) {
    if (nthPrime > nthLargestPrimeSoFar) {
        while (nthLargestPrimeSoFar < nthPrime){
            var prevLength = primeEratosthenes.length
            primeEratosthenes = primeEratosthenes.concat(Array(10000))
            for (var i=prevLength; i<primeEratosthenes.length; i++){
                primeEratosthenes[i] = true
                for (var j=0; j<primesFound.length; j++){
                    if (((i+1) % primesFound[j]) == 0){
                        primeEratosthenes[i] = false
                        console.log(primeEratosthenes)
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




one. use this array to return an array of even numbers using map [1,2,3,4,5,6]

	var evenNums = [1,2,3,4,5,6].map(function(x){
		return x*2;
	});

	//doesn't work
	var evenNums = [1,2,3,4,5,6].map(function(x){
		if (x % 2 == 0) return x;
	});

	function retEvenNums(arr){
		return arr.map(function(x){
			return x*2;
		});
	}

	//doesn't work
	function retEvenNums(arr){
		return arr.map(function(x){
			if (x % 2 == 0) return x;
		});
	}

two. use the filter function to return an array of odd numbers from this array [1,2,3,4,5,6]
	
	//one way
		var oddNums = [1,2,3,4,5,6].filter(function(x){
			return (x % 2 != 0);
		});

	//another way
		function retOddNums(arr){
			return arr.filter(function(x){
				return (x % 2 != 0);
			});
		}

		var oddNums = retOddNums([1,2,3,4,5,6])

three. write a function that takes in a number and returns true if it is even and false otherwise
	
	//one way
		function isEven(x){
			return (x % 2 == 0);
		}

	//another way
		function isEven(x){
			if (x % 2 == 0){
				return true;
			}else{
				return false;
			}
		}

four. do number three, but don't use %
	function isEven(x){
		var str = x/2 + "";
		return (str.indexOf('.') == -1)
	}

	const isEvenNoMod = x => ((-1) ** x === 1);

	return parseInt(x/2) === (x/2)

	function oddEven(x) {
	   var even = Math.floor(x / 2);
	   return (x / 2 === even);
	}

	function boolean(argument){
	    if ((argument*5).toString().split('').pop() == 0){return true} else {
	        return false
	    };
	};

	if (Math.abs(arg/2) - Math.floor(Math.abs(arg/2)) > 0) —> odd

	return (Math.floor(number/2))*2) === number;


	/*
	input | output

	  3      false
	  4      true
	  5      false



	  my work
     3/2 1.5
     	indexOf('.') > -1
     		odd
     	else
     		even

     4/2 2

     5/2 2.5

     6/2 3

     7/2 3.5


     */

















exports.basicSolution = function(arr, sum){

  let result = null

  for(let i = 0; i < arr.length; i++){
      // console.log(arr[i])
    for(let j = 0; j < arr.length; j++){
     
      if( (arr[i]+arr[j]) == sum && i !=j){
        result = new Array(2)
        result[0] = arr[i]
        result[1] = arr[j]
      }
    }
  }

  return result
}


exports.basicSolutionSorted = function(arr, sum){
  let result = null
  let maximumIndex = arr.length

  arr.sort(function(a, b) {
    return a - b;
  });


  for(let i = 0; i < arr.length && maximumIndex == 0; i++){
    if(arr[i] >= sum){
      maximumIndex = i
    }
  }

  for(let i = 0; i < maximumIndex; i++){
    for(let j = 0; j < maximumIndex; j++){
     
      if((arr[i]+arr[j]) == sum && i !=j){
        result = new Array(2)
        result[0] = arr[i]
        result[1] = arr[j]
      }
    }
  }

  return result
}


// this is a stack data struture



// passing a value inside an array
function test(array){
  // defining an empty array in order to store value in to it

  let temp =[]
  // looping through the array in order in order to access it's elements and push through it

  for(let i=0; i<array.length;i++ ){
    // using my temp variable in order to push the value that is being passed inside of it
    temp.push(array[i])
    // pushing a value that is  call boo inside my the previous array
    temp.push("bo")


  }
// returning temp which is the elements of the value that the user passed in
  return temp

}


console.log(test([1,2,3,4,5,6,7,8,9,10]));

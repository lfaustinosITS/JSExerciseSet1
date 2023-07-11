function limitFunc(fn, num) {
  let count = 0; 
  return function() {
    if (count < num) {
      count++;
      return fn.apply(this, arguments);
    } else {
        throw new Error('Function execution limit reached');
      }
  };
}
  
function myFunction(m) {
  m+=1;
  console.log('Executing limited function',m);  
}
  
const limited = limitFunc(myFunction, 2);
  
limited(5); 
limited(4); 
limited(3); 
  
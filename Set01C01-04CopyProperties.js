function copyProp(objA, objB, propsToCopy=Object.keys(objB)) {
  if (Array.isArray(propsToCopy)) {
    propsToCopy.forEach(prop => {
      if (objB.hasOwnProperty(prop)) {
        objA[prop] = objB[prop];
      }
    });
  } else {
    throw new Error("The properties to copy are not in an aray")
    }
}


let objA = {
  p1: 'value1',
  p2: 'value2',
  p3: 'value3'
  };
  
let objB = {
  p2: 'new value2',
  p3: 'new value3',
  p4: 'value4'
};
  

  
copyProp(objA, objB, ["p1", "p2"]);
console.log(objA);

copyProp(objA, objB);
console.log(objA);
  
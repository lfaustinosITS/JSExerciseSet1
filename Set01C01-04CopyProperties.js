function copyProp(objA, objB, propsToCopy) {
  if (propsToCopy && Array.isArray(propsToCopy)) {
    propsToCopy.forEach(prop => {
      if (objB.hasOwnProperty(prop)) {
        objA[prop] = objB[prop];
      }
    });
  } else {
    for (var prop in objB) {
      if (objB.hasOwnProperty(prop)) {
        objA[prop] = objB[prop];
      }
    }
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
  
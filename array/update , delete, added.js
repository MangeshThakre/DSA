function UDA(arr1, arr2) {
  let update = 0;
  let added = 0;
  let del = 0;

  for (let element of arr1) {
    if (arr2.includes(element)) {
      update = update + 1;
    }
  }

  for (let element of arr2) {
    if (!arr1.includes(element)) {
      added = added + 1;
    }
  }

  for (let element of arr1) {
    if (!arr2.includes(element)) {
      del = del + 1;
    }
  }
  return {
    update: update,
    delete: del,
    added: added
  };
}

console.log(UDA([1, 2, 3,5], []));

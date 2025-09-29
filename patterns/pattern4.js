function pattern() {
  for (let i = 1; i < 6; i++) {
    // creating colomn
    let row = "";
    for (let j = 0; j < i; j++) {
      // crating row
      row += i;
    }
    console.log(row);
  }
}

pattern();

// 1
// 22
// 333
// 4444
// 55555
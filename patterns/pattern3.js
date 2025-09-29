// this solution will add the one empty row at the start
// the loop starts from 0 index and , we print row if the j < i,
// in case or i = 0 and j = 0, the condition (j < i ) will be false
// to print the pattern form first row , start the first loop form 1 (i =1) or
// change the  second loop condition to (j <=1),
function pattern() {
  for (let i = 0; i < 6; i++) {
    let row = "";
    for (let j = 0; j < i; j++) {
      row += `${j + 1} `;
    }
    console.log(row);
  }
}
//
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

// pattern();

function pattern2() {
  for (let i = 1; i < 6; i++) {
    let row = "";
    for (let j = 0; j < i; j++) {
      row += `${j + 1} `;
    }
    console.log(row);
  }
}
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// pattern2();

function pattern3() {
  for (let i = 0; i < 5; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row += `${j + 1} `;
    }
    console.log(row);
  }
}
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
pattern3();

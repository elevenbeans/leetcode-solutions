/**
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string text, int nRows);
convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR".
*/

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  var i = 0;
  var arr = [];
  var count = 1;
  var c = 1;
  var res = [];
  function copy(s, len) {
    var res = '';
    for(var i = 0; i< len; i++) {
      res = res + s;
    };
    return res;
  }
  while(i < s.length) {
    if( count % 2 !== 0 ) {
      arr.push(s.substring(i, i + numRows));
      i += numRows;
      count++;
    } else {
      if (i % (2*(numRows-1)) === 0) {
        count++;
        c = 1;
      } else {
        var temp = s.split('')[i];
        temp = copy('#', numRows - c - 1 )+ temp + copy('#', c);
        arr.push(temp);
        i++;
        c++;
      }
    }
  }
  for(var i = 0; i < numRows; i++) {
    arr.map((item, index) => {
      res.push(item[i]);
    });
  };
  return res.join('').replace(/#/g, '');
};
// 2-2
// 3-4
// 4-6
// 5-8
// 6-10
//

// 3
// 0   4   8   12   16
// 1 3 5 7 9 1113 1517
// 2   6   10  14

// 4
// 0    6     12    18
// 1  5 7   1113  17
// 2 4  8 10  14 16
// 3    9     15

// i - ((numRows - 1) + count * )

// 5
// 0     8      16
// 1   7 9    15
// 2  6 10  14
// 3 5  11 13
// 4    12

console.log(convert('PAYPALISHIRING', 3));

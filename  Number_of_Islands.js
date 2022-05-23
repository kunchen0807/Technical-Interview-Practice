/*
Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water),
return the number of islands.

An island is surrounded by water and is formed by connecting
adjacent lands horizontally or vertically. You may assume all four edges of
the grid are all surrounded by water.



Example 1:

Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1
Example 2:

Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
*/

// I: m x n array
// O: integer (how many island it contains)
// C:
// E:

// declear var count is 0;
// iterate grid
  // iterate each array in grid
    // if current element is 1
      // if surrounded elements do not contain 2
        // add count
        // update current element to 2
      // if surrounded elements contain 2
        // update current elemnt to 2
//return count

var numIslands = function(grid) {
  let count = 0;
// create an outter boundary
  for (let i = 0; i < grid.length; i++) {
    grid[i].push('0');
    grid[i].unshift('0');
  }
let boundary = [];
for (let i = 0; i < grid[0].length; i++) {
  boundary.push('0');
}
grid.unshift(boundary);
grid.push(boundary);

  for (let i = 1; i < grid.length - 1; i++) {
    for (let j = 1; j < grid[i].length - 1; j++) {
      if (grid[i][j] === '1') {
        if (grid[i-1][j] === '2' || grid[i+1][j] === '2' || grid[i][j-1] === '2' || grid[i][j+1] === '2') {
          grid[i][j] = '2';
        }
        else {
          grid[i][j] = '2';
          count ++;
        }
      }
    }
  }
return count;
};

const grid1 = [
["1","1","0","0","0"],
["1","1","0","0","0"],
["0","0","1","0","0"],
["0","0","0","1","1"]
]
console.log(numIslands(grid1))
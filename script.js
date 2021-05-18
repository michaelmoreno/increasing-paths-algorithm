const exampleA = [
  [5,1],
  [2,7]
]

const exampleB = [
  [0, 4, 3],
  [5, 8, 9],
  [5, 9, 9],
]

const exampleC = [
  [5,6,10,1,5,10],
  [54,25,29,5,4,32],
  [23,2,1,13,26,8],
  [10,0,2,12,14,20]
]


let increasingPaths;

const checkAdj = (grid, y, x) => {
  let current = grid[y][x]
  let above;
  let below;
  let right;
  let left;

  if (grid[y][x+1] != undefined)
    right = grid[y][x + 1];
  if (current < right) {
    increasingPaths++
    checkAdj(grid, y, x + 1);
  }

  if (grid[y+1] != undefined)
    below = grid[y+1][x];
  if (current < below) {
    increasingPaths++
    checkAdj(grid, y + 1, x);
  }
  
  if (grid[y][x-1] != undefined)
    left = grid[y][x-1];
  if (current < left) {
    increasingPaths++
    checkAdj(grid, y, x-1);
  }
  
  if (grid[y-1] != undefined)
    above = grid[y-1][x]
  if (current < above) {
    increasingPaths++
    checkAdj(grid, y-1, x);
  }
}

function findPaths(grid) {
  grid.forEach(row => console.log(row));
  
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid.length; x++) {
      checkAdj(grid, y, x);
    }
  }
  return increasingPaths
}

increasingPaths = 0;
console.log(findPaths(exampleA));
increasingPaths = 0;
console.log(findPaths(exampleB));
increasingPaths = 0;
console.log(findPaths(exampleC));
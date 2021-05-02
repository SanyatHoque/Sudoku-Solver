export function validity(_board, i, j, k) {  
  const arr = [0,1,2,3,4,5,6,7,8];
  for (const l of arr) {
      const m = 3 * Math.floor(i / 3) + Math.floor(l / 3);
      const n = 3 * Math.floor(j / 3) + l % 3;
      // Simply CHECKING and not STORING keys/valuse in Dictionary
      // board[i][l] ==> Checking cols
      // board[l][j] ==> Checking rows
      if (_board[i][l] == k || _board[l][j] == k || _board[m][n] == k) {          
          if (k==9){ 
              j = n; // column equals to n 
          }
        return false;
      }
    } 
    return true;
}
export function solver(_board) {
    const arr = [0,1,2,3,4,5,6,7,8];
    for (const i of arr) {
      // console.log(`for iter [i]=> ${i}`)
      for (const j of arr) {
      // console.log(`    for iter [j]=> ${j}`)
        if (_board[i][j] == '.') {
          // console.log(`found '.' => [i] ${i}  [j] ${j}`)
          const arr2 = [1,2,3,4,5,6,7,8,9];
              for (const k of arr2) {
                  if (validity(_board, i, j, k)==true) {
                    _board[i][j] = `${k}`;
                      // console.log(`       ISVALID==true =>for iter [i]=> ${i}, for iter [j]=> ${j}, for iter [k]=> ${k}`)
                            if (solver(_board)) {
                              // console.log('sodokoSolver(data)==true',_board);
                              const _data = _board ;
                              console.log('_data',_board)
                              var f = 45;
                              return _data;
                          } 
                  else if (validity(_board, i, j, k)==false) {
                    _board[i][j] = '.';
                      // console.log(`                 ISVALID==false =>for iter [i]=> ${i}, for iter [j]=> ${j}, for iter [k]=> ${k},  data[i][j] ${data[i][j]} `)
                      }
                  }
              }
              return false;
          }
      }
    }
    return true;
}
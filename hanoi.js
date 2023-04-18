function towerOfHanoi(n, source, auxiliary, target) {
    if (n > 0) {
      // Move n-1 discs from source to auxiliary peg
      towerOfHanoi(n - 1, source, target, auxiliary);
      
      // Move the nth disc from source to target peg
      console.log(`Move disc ${n} from ${source} to ${target}`);
      
      // Move the n-1 discs from auxiliary to target peg
      towerOfHanoi(n - 1, auxiliary, source, target);
    }
  }
  
  // Example usage with 3 discs and pegs labeled 'A', 'B', 'C'
  towerOfHanoi(3, 'A', 'B', 'C');
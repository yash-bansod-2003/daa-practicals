// Depth-First Search (DFS) Algorithm with Adjacency Matrix

// Function to perform DFS
function dfs(adjMatrix, startNode, visited) {
    console.log(startNode); // Print the current node (or perform any other operation)
    visited.add(startNode); // Mark the current node as visited
  
    // Loop through all the adjacent nodes of the current node
    for (let i = 0; i < adjMatrix[startNode].length; i++) {
      if (adjMatrix[startNode][i] === 1 && !visited.has(i)) {
        // If the adjacent node is not visited and there is an edge between the current node and the adjacent node
        dfs(adjMatrix, i, visited); // Recursively call DFS on the adjacent node
      }
    }
  }
  
  // Example usage:
  
  // Define the adjacency matrix
  const adjMatrix = [
    [0, 1, 1, 0, 0],
    [1, 0, 0, 1, 0],
    [1, 0, 0, 1, 1],
    [0, 1, 1, 0, 1],
    [0, 0, 1, 1, 0]
  ];
  
  // Call the DFS function starting from node 0
  const visited = new Set(); // Create a set to keep track of visited nodes
  dfs(adjMatrix, 0, visited);
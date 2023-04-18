// Breadth-First Search (BFS) Algorithm with Adjacency Matrix

// Function to perform BFS
function bfs(adjMatrix, startNode) {
    const queue = []; // Create a queue for BFS
    const visited = new Set(); // Create a set to keep track of visited nodes
  
    // Add the startNode to the queue and mark it as visited
    queue.push(startNode);
    visited.add(startNode);
  
    // Loop until the queue is empty
    while (queue.length > 0) {
      const currentNode = queue.shift(); // Get the next node from the front of the queue
      console.log(currentNode); // Print the current node (or perform any other operation)
  
      // Loop through all the adjacent nodes of the current node
      for (let i = 0; i < adjMatrix[currentNode].length; i++) {
        if (adjMatrix[currentNode][i] === 1 && !visited.has(i)) {
          // If the adjacent node is not visited and there is an edge between the current node and the adjacent node
          queue.push(i); // Add the adjacent node to the queue
          visited.add(i); // Mark the adjacent node as visited
        }
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
  
  // Call the BFS function starting from node 0
  bfs(adjMatrix, 0);
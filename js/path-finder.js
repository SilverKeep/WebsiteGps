export function pathFinder(num_nodes, start_node, end_node) {
    // Define the adjacency list and other needed variables
    const adj = new Map();
    const path = new Map();
    const processed = Array(num_nodes + 1).fill(false);
    const distances = Array(num_nodes + 1).fill(Infinity);

    // Initialize paths with empty arrays
    for (let i = 1; i <= num_nodes; i++) {
        path.set(i, []);
    }

    // Initialize the adjacency list with predefined edges
    adj.set(1, [{ node: 2, dist: 7 }, { node: 4, dist: 3 }]);
    adj.set(2, [{ node: 1, dist: 7 }, { node: 3, dist: 2 }]);
    adj.set(3, [{ node: 2, dist: 2 }, { node: 5, dist: 11 }]);
    adj.set(4, [{ node: 1, dist: 3 }, { node: 3, dist: 9 }]);
    adj.set(5, [{ node: 3, dist: 11 }]);

    // Priority queue implementation using a sorted array (since JavaScript lacks native priority queue)
    const q = [];
    distances[start_node] = 0;
    q.push({ node: start_node, dist: 0 });

    // Dijkstra's algorithm
    while (q.length > 0) {
        // Sort the queue by distance (smallest first)
        q.sort((a, b) => a.dist - b.dist);

        const { node: curr_node } = q.shift();  // Get the node with the smallest distance

        if (processed[curr_node]) continue;
        processed[curr_node] = true;

        // Process each neighbor
        for (const neighbor of adj.get(curr_node) || []) {
            const neighbor_node = neighbor.node;
            const d = neighbor.dist;

            // Relaxation step: if a shorter path is found
            if (distances[curr_node] + d < distances[neighbor_node]) {
                distances[neighbor_node] = distances[curr_node] + d;

                // Update the path to this neighbor
                path.set(neighbor_node, [...path.get(curr_node), neighbor_node]);

                // Push the neighbor into the priority queue with the updated distance
                q.push({ node: neighbor_node, dist: distances[neighbor_node] });
            }
        }
    }

    // Output the final distances and paths (similar to how C++ does it)
    for (let i = 1; i <= num_nodes; i++) {
        const pathNodes = path.get(i).join(' ');
        console.log(`${i} (${distances[i]}): ${pathNodes}`);
    }
    const pathNodes = path.get(end_node).join(' ');
    console.log(`${end_node} (${distances[end_node]}): ${pathNodes}`);
}
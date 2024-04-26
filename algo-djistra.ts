function dijkstra(graph: any, start: any) {

    const distances : any = {};
    const visited : any = new Set();
    
    for (const vertex in graph) {
        if (Object.prototype.hasOwnProperty.call(graph, vertex)) {
            distances[vertex] = Infinity;
        }
    }

    distances[start] = 0;

    while (true) {
        const current = getMinNode(distances, visited);
        if (!current) break;

        visited.add(current);

        for (const neighbor in graph[current]) {
            if (Object.prototype.hasOwnProperty.call(graph, neighbor)) {
                const newDistance = distances[current] + graph[current][neighbor];
                if (newDistance < distances[neighbor]) {
                    distances[neighbor] = newDistance;
                }
                
            }
        }
    }

    return distances;
}

function getMinNode(distances:any, visited: any) {
    return Object.keys(distances).reduce((min: any, node: any) => {
        if (!visited.has(node) && distances[node] < distances[min]) {
            return node;
        }
        return min;
    }, null);
}
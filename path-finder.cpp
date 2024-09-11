#include <vector>
#include <map>
#include <climits>
#include <queue>
#include <iostream>
using namespace std;

struct edge {
    int node;
    int dist;
};

struct CustomComparator {
    bool operator() (const edge &x, const edge &y) { 
        return x.dist > y.dist;
    }
};

map<int, vector<edge>> adj;
map<int, vector<int>> path;
vector<bool> processed;
vector<int> distances;

int main() {
    int num_nodes;
    int start_node;
    cin >> num_nodes >> start_node;

    distances.resize(num_nodes + 1, INT_MAX);
    processed.resize(num_nodes + 1, false);

    for (int i = 0; i < num_nodes; i++) {
        int curr_node, connections;
        cin >> curr_node >> connections;
        for (int j = 0; j < connections; j++) {
            int neighbor, weight;
            cin >> neighbor >> weight;
            adj[curr_node].push_back({neighbor, weight});
        }
    }

    priority_queue<edge, vector<edge>, CustomComparator> q;
    distances[start_node] = 0;
    q.push({start_node, 0});

    while (!q.empty()) {
        int curr_node = q.top().node;
        q.pop();

        if (processed[curr_node]) continue;
        processed[curr_node] = true;

        for (const auto &neighbor : adj[curr_node]) {
            int neighbor_node = neighbor.node;
            int d = neighbor.dist;
            if (distances[curr_node] + d < distances[neighbor_node]) {
                distances[neighbor_node] = distances[curr_node] + d;
                
                path[neighbor_node] = path[curr_node];
                path[neighbor_node].push_back(neighbor_node);

                q.push({neighbor_node, distances[neighbor_node]});
            }
        }
    }

    for (int i = 1; i <= num_nodes; i++) {
        cout << i << " (" << distances[i] << "): ";
        for (auto j : path[i]) cout << j << " ";
        cout << endl;
    }

    return 0;
}
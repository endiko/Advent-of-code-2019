module.exports = inputData => {
  const data = inputData.split('\n').map(str => str.trim().split(')'));

  class Graph {
    constructor() {
      this.adjacencyList = new Map();
      this.distancesMap = {};
      this.min = Number.MAX_SAFE_INTEGER;
    }

    addEdge(v, w) {
      this.adjacencyList.set(v, w);
    }
    hasVertex(v) {
      return this.adjacencyList.has(v);
    }
    getVertex(v) {
      return this.adjacencyList.get(v);
    }

    print() {
      this.adjacencyList.forEach((value, key) => {
        console.log(`${key} -> ${value}`);
      });
    }

    findMinOrbitsDistance(a, b) {
      let start = this.adjacencyList.get(a);
      let end = this.adjacencyList.get(b);
      let minDistance = this.min;
      for (let vertex of this.adjacencyList.keys()) {
        let orbit = vertex;
        let visited = [];
        let distanceCounter = 0;

        while (orbit) {
          visited.push([orbit, distanceCounter]);
          orbit = this.adjacencyList.get(orbit);
          distanceCounter++;
        }
        this.distancesMap[vertex] = visited;
      }

      let pathFromMap = this.distancesMap[start].reduce((acc, orbit) => {
        acc[orbit[0]] = orbit[1];
        return acc;
      }, {});

      let pathToMap = this.distancesMap[end].reduce((acc, orbit) => {
        acc[orbit[0]] = orbit[1];
        return acc;
      }, {});

      let filteredPath = Object.keys(pathFromMap).filter(orbit =>
        Object.keys(pathToMap).includes(orbit)
      );

      return filteredPath.reduce(
        (minDistance, orbit) =>
          Math.min(pathFromMap[orbit] + pathToMap[orbit], minDistance),
        minDistance
      );
    }
  }

  //   create graph instance
  const orbitsMap = new Graph();

  data.forEach(item => {
    orbitsMap.addEdge(item[1], item[0]);
  });

  //   orbitsMap.print();

  let orbitsDistance = orbitsMap.findMinOrbitsDistance('YOU', 'SAN');

  return orbitsDistance;
};

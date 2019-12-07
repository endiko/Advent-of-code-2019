module.exports = inputData => {
  const data = inputData.split('\n').map(str => str.trim().split(')'));

  class Graph {
    constructor() {
      this.adjacencyList = new Map();
    }

    addEdge(v, w) {
      this.adjacencyList.set(v, w);
    }
    hasVertex(v) {
      return this.adjacencyList.has(v);
    }
    print() {
      this.adjacencyList.forEach((value, key) => {
        console.log(`${key} -> ${value}`);
      });
    }

    findTotalOrbits() {
      let totalOrbits = 0;
      for (let orbit of this.adjacencyList.keys()) {
        let currentOrbit = this.adjacencyList.get(orbit);
        while (currentOrbit) {
          currentOrbit = this.adjacencyList.get(currentOrbit);
          totalOrbits++;
        }
      }
      return totalOrbits;
    }
  }

  const orbitsMap = new Graph();

  data.forEach(item => {
    orbitsMap.addEdge(item[1], item[0]);
  });

  let totalOrbits = orbitsMap.findTotalOrbits();

  return totalOrbits;
};

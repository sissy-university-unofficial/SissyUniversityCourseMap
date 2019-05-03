/* esversion: 6 */

// Import the dataset.
import {orbDataset} from "./orbDataset/importMe.js";

/* end imports */

export function makeMap() {

  // the nodes and edges (connections between nodes) come from the orb dataset.
  let nodes = new vis.DataSet(orbDataset.nodes);
  let edges = new vis.DataSet(orbDataset.edges);

  // get the element where we are going to be putting the map into
  let container = document.getElementById('dataVisualization');

  // provide the data in the vis format
  let data = {
      nodes: nodes,
      edges: edges
  };

  // the options for the entire network
  let options = {
      // the groups for the network
      groups: orbDataset.nodeStyles,

      // this enables use of keyboard and displays the navigation buttons.
      interaction: {
        navigationButtons: true,
        keyboard: true
      },

      layout:{
        // this ensures that the map looks as it should
        improvedLayout: true,
        // if you add new nodes, change this until you don't have overlapping stuff.
        //randomSeed: 0
        // Comment it out for random seeds until you find one that works.
      }
    };

  // initialize the map!
  let network = new vis.Network(container, data, options);

  //pass back the network for further use.
  return network;
}

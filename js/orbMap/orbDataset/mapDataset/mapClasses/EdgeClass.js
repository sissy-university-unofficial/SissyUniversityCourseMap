/*jshint esversion: 6 */

class Edge {

  constructor(to, from) {
    // set basic stuff
    this.from = from.toUpperCase();
    this.to = to.toUpperCase();
    this.width = 4
    this.smooth = false;
    //this.length = 70;
    //this.color = {highlight:'black', inherit:'from'};
    this.selectionWidth = 5
  }
}

export function edge(to, from) {
  return (new Edge(to, from));
}

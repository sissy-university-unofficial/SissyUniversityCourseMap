/*jshint esversion: 6 */

import { nodeGroupStyles } from "./../../classStyles.js";

class AClass {

  constructor(id, group, label, title, y, x) {
    var tempFixed = {}
    // set basic stuff
    let tempy = 0;
    this.x = nodeGroupStyles[group].x;
    tempFixed.x = true;

    if(group == "major"){
        this.id = id.toUpperCase();
        this.label = label;
        this.title = label + " ~ " + title;
    } else {
        this.id = "" + nodeGroupStyles[group].start + id;
        this.label = label;
        this.title = label + " ~ " + title;
        tempy = (id) * 100;
        tempFixed.y = true;
    }
    this.group = group;

    // Set X & Y
    if(x){
      this.x = x;
      if(x == 'zero'){
        this.x = 0;
      }
      tempFixed.x = true;
    }
    if(y){
      tempy = y;
      if(y == 'zero'){
        tempy = 0;
      }
      tempFixed.y = true;
    }
    this.fixed = tempFixed;
    this.y = tempy * 0.80;
  }
}

export function aClass(middle, last, group, label, title, y, x) {
  return (new AClass(middle, last, group, label, title, y, x));
}

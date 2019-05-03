/* jshint esversion:6 */

// This file gethers all the files and passes them out as a single item.
import {nodeGroupStyles} from "./classStyles.js";

import {extractedData} from "./mapDataset/extractedData.js";
let temp = new extractedData();
let dataset = temp.generateData();

let classes = [
                ...dataset.classSet,
                ...dataset.majorsSet,
                ];
let reqs = [
                ...dataset.classPrereqSet,
                ...dataset.majorsPrereqSet,
                ];

export let orbDataset = {nodes: classes, edges: reqs, nodeStyles: nodeGroupStyles};

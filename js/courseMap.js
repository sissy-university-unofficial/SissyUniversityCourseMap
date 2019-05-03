/* jshint esversion:6 */

/* top level orb map module mostly passes stuff to sub modules */

// the module that makes the map
import {makeMap} from './orbMap/makeMap.js';

// the module that handles the click events on the map
import {mapClick} from './orbMap/mapClick.js';

/* end imports */

// make network global so it can be passed to stuff when needed. (can this be moved into `onLoadScript`?)
var network = null;

function inIframe () {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}


/* this will run when the page is fully loaded. */
function onLoadScript() {
  // make the map.
  network = window.network = makeMap();
  //console.info("Seed: " + network.getSeed());

  // Whenever a node is clicked on, display it's data.
  network.on( 'click', function(properties) {
    // just pass it to the mapClick function
    mapClick(properties);
  });

  if(!inIframe()){
      document.getElementById('forkRibbon').style.display = "";
  }

}


// run the `onLoadScript` when the page is loaded.
window.onload = function() {onLoadScript();};

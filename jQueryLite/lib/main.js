const DOMNodeCollection = require('./dom_node_collection.js');


function $l(selector) {
  let nodeArr;

  if ( selector instanceof HTMLElement ) {
    nodeArr = [selector];
  } else {
    let nodelist = document.querySelectorAll(selector);
    nodeArr =  Array.from(nodelist);
  }

  return new DOMNodeCollection(nodeArr);
}



window.$l = $l;

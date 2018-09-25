const DOMNodeCollection = require('./dom_node_collection.js');


function $l(selector) {
  let nodeArr;
  let callbacks = [];

  if (selector instanceof Function) {
    callbacks.push(selector);
    let stateCheck = setInterval(() => {
      if (document.readyState === 'complete') {
        clearInterval(stateCheck);
        callbacks.forEach((fn)=>{
          fn();
        });
    }
  }, 100);
  } else if (selector instanceof HTMLElement ) {
    nodeArr = [selector];
  } else {
    let nodelist = document.querySelectorAll(selector);
    nodeArr =  Array.from(nodelist);
  }

  return new DOMNodeCollection(nodeArr);
}

window.$l = $l;

$l.extend = (first_obj,...args) => {
  args.forEach((arg)=>{
    let keys = Object.keys(arg);
    keys.forEach((key)=>{
      first_obj[key] = arg[key]
    });
  });
  return first_obj;
};

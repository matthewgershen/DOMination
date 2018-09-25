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

$l.ajax = (options_obj) => {
  const default_obj = {
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    data: {},
    method: 'GET',
    url: "",
    error: ()=>{},
    success: ()=>{}
  };

  $l.extend(options_obj, default_obj);

  const xhr = new XMLHttpRequest();
  xhr.open(options_obj.method, options_obj.url);

  xhr.onload = function(){
    if (xhr.status === 200) {
      options_obj.success(xhr.response);
    } else {
      options_obj.error(xhr.response);
    }
    console.log(xhr.status);
    console.log(xhr.responseType);
    console.log(xhr.response);
  };


  const optionalData = options_obj.data;
  xhr.send(optionalData);
};

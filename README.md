# DOMination

DOMination is a JavaScript library inspired by JQuery. It allows you to:

* Traverse HTML elements
* Manipulate HTML elements
* Add event listeners
* Perform AJAX calls
* Perform callbacks when document is loaded

### Setup

In order to use library, download the repo and include the webpack output DOMination.js in the head of your HTML document.

### Documentation

`$l`

Selects elements to create a DOMNodeCollection, which returns an array of objects.


`html(string)`

Adds string to the innerHTML of given HTML element.

`empty()`

Clears the innerHTML of given HTML element.

`append(item)`

Appends item to HTML element. If given a string as an argument it will append to the innerHTML. If given an HTML element, it will append to given element.

`addClass(className)`

Will add a class to the element.

`removeClass(className)`

Will remove the class from the element.

`attr(attrName,attrValue)`

Adds an attribute to an HTML element.

`children()`

Finds the children of the given HTML element.

`parent()`

Finds the parent of the given HTML element.

`find(selector)`

`remove()`

Deletes the given HTML element.

`on(type,callback)`

Adds an event listener and callback.

`off(type)`

Removes the event listener of certain type.

`$.ajax(optionsObj)`

Makes an AJAX call - settings include success, error, url, method, data, and contentType.

class DOMNodeCollection {
  constructor(htmlElements) {
    this.htmlElements = htmlElements;

  }

  html(string) {

    if ( string === undefined ) {
      return this.htmlElements[0].innerHTML;
    } else {
      this.htmlElements.forEach((el) => {
        el.innerHTML = string;
      });
    }
  }

  empty() {
    this.html("");
  }

  append(appendix) {
    let appendString = "";
    if ( typeof appendix === "string") {
      appendString = appendix;
    } else if ( appendix instanceof HTMLElement) {
      appendString = appendix.outerHTML;
    } else {
      appendix.htmlElements.forEach( (el) => {
        appendString += el.outerHTML;
      });
    }

    this.htmlElements.forEach( (el) => {
      el.innerHTML += appendString;
    });
  }

  addClass(className) {

    let classes = className.split(" ");

    classes.forEach( (name) =>{
      this.htmlElements.forEach((el) => {
        el.classList.add(name);
      });
    });

  }

  removeClass(classNames) {

    if (classNames) {
      this.htmlElements.forEach((el) => {
        el.classList.remove(classNames);
      });
    } else {
      this.htmlElements.forEach((el) => {
        el.removeAttribute("class");
      });
    }
  }

  attr(attrName, attrValue){
    if ( attrValue ) {
      this.htmlElements.forEach((el) => {
        el.setAttribute(attrName, attrValue);
      });
    } else {
        return this.htmlElements[0].getAttribute(attrName);
    }
  }

  children() {
    let kids = [];

    this.htmlElements.forEach((el) => {
      kids = kids.concat(Array.from(el.children));
    });

    return new DOMNodeCollection(kids);
  }

  parent() {
    let bananas = [];
    // debugger
    this.htmlElements.forEach((el) => {
      bananas = bananas.concat([el.parentElement]);
    });

    let uniqueParents = Array.from(new Set(bananas));
    return new DOMNodeCollection(uniqueParents);
  }

  find(selector) {
    let bananas = [];
    // debugger
    this.htmlElements.forEach((el) => {
      bananas = bananas.concat(Array.from(el.querySelectorAll(selector)));
    });
    return new DOMNodeCollection(bananas);
  }

  remove() {
    this.htmlElements.forEach((el) => {
      el.remove();
    });
    this.htmlElement = [];
  }


}


module.exports = DOMNodeCollection;

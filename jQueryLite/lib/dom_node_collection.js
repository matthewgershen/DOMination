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

  append(object) {
    let appendString = "";
    if ( object instanceof String) {
      appendString = object;
    } else if ( object instanceof HTMLElement) {
      appendString = object.outerHTML;
    } else {
      object.forEach( (el) => {
        appendString += el.outerHTML;
      });
    }
  }

}


module.exports = DOMNodeCollection;

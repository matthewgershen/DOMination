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

}


module.exports = DOMNodeCollection;

class Formatter {
  static capitalize(string) { return string.charAt(0).toUpperCase() + string.slice(1); }
  static sanitize(string) { return string.replace(/[^A-Za-z0-9-' ]+/g, ''); }

  static checkForCap(string) {
    let noNos = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    if (!noNos.find(x => x===string))
    { return this.capitalize(string); } else { return string; }
  }

  static titleize(string) {
    let newArray = string.split(" ");
    let firstWord = this.capitalize( newArray.shift() );
    return firstWord + " " + newArray.map(x => this.checkForCap(x)).toString().replace(/,/g, ' ');
  }

}
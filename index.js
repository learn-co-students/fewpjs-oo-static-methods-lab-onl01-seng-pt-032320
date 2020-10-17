class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-'\s]+/g, '');
  }

  static titleize(sentence) {
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let result = [];
    let wArr = sentence.split(" ")

    for (let word = 0; word < wArr.length; word++) {
      if (word == 0) {
        result.push(this.capitalize(wArr[word]))
      } else {
        if (exceptions.includes( wArr[word])) {
          result.push(wArr[word])
        } else {
          result.push(this.capitalize(wArr[word]))
        }
      }
    }

    return result.join( " " );
  }
}
class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1) 
}

static sanitize(string) {
  return string.replace( /[^A-Za-z0-9 '-]/g, '' ) 
}

static titleize(string) {
  let ignore = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
  let words = string.split(' ') 
  let results = words.map((w) => {
    if (w === words[0]) {
      return this.capitalize(w) 
    } else if (!ignore.includes(w)) {
      return this.capitalize(w);
    } else {
      return w 
    }
  })
  return results.join(' ')
}

}

Formatter.titleize("chicken soup with rice and a few other songs");
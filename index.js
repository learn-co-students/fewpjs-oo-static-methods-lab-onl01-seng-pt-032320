class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.replace(/^\w/, (c) => c.toUpperCase());
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, "");
  }

  static titleize(string) {
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let newArray = string.split(' ')
    return newArray.map(function (x){
      if(newArray.indexOf(x) === 0){
        debugger
        return x.replace(/^\w/, (c) => c.toUpperCase())
      } else if (exceptions.includes( x )){
      return x
      } else {
      return x.replace(/^\w/, (c) => c.toUpperCase())
      }
    }).join(' ')
  }
}

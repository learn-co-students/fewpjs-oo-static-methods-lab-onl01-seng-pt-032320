class Formatter {
  //add static methods here
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  static sanitize(str) {
    return str.replace(/[^A-Za-z0-9-'\s]+/g, '')
  }

  static titleize(str) {
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    const newArray = str.split(' ')
    return newArray.map(function (x){
      if(newArray.indexOf(x) === 0){
        return x.replace(/^\w/, (c) => c.toUpperCase())
      } else if (exceptions.includes(x)) {
      return x
      } else {
      return x.replace(/^\w/, (c) => c.toUpperCase())
      }
    }).join(' ')
  }
  
}
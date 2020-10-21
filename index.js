class Formatter {
  //add static methods here
  static capitalize(str){
    const nameCapitalized = str.charAt(0).toUpperCase() + str.slice(1)
    return nameCapitalized
  }

  static sanitize(str){
    return str.replace(/[^A-Za-z0-9-'' ]+/g, '');

     

  }

  static titleize(str){
    let a = str.split(" ")
    const arr = []
    for(let i =0; i< a.length; i++){
        const word = a[i].charAt(0).toUpperCase() + a[i].slice(1)
        arr.push(word)
    }
    console.log(arr);
    for (let i=1; i < arr.length; i++){
      if((arr[i] === 'The')||(arr[i] === 'A')||(arr[i] === 'An')||(arr[i] === 'But')|| (arr[i] === 'Of') || (arr[i] === 'And') || 
      (arr[i] === 'For') || (arr[i] === 'At') || (arr[i] === 'By') || (arr[i] === 'From')) {
        let c = arr[i]
        let d = c.charAt(0).toLowerCase() + c.slice(1)
        console.log(d);
        arr[i] = d 
      }
    }
    return arr.join(" ")

  }
}
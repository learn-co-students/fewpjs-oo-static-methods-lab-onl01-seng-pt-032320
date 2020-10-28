class Formatter {
  static capitalize(string){
     return string.charAt(0).toUpperCase() + string.slice(1)
  }


  static sanitize(string){
     return string.replace(/[^A-Za-z0-9 '-]/g, '')
  }

  static titleize(string){
    let except = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by','from']

    let newString = []

    let words = string.split(' ');

    for (let i = 0; i < words.length; i++){
      //first word gets cap
       if(i === 0){
         newString.push( this.capitalize( words[i] ))

       }
       else {
         if (except.includes(words[i])){
           newString.push( words[i])
         }else {
           newString.push( this.capitalize( words[i] ))
         }
       }
    }

    

    return newString.join(" ")
    
     

  }
}
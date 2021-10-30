document.getElementById('rs').innerHTML = makeid(7)

function makeid(string_length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789abcdefghijklmnopqrstuvwxyz';
    for ( var i, i = 0; i < string_length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
   }
   return result
}
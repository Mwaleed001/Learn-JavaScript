

let words = [
    "abdul" , "bilal" , "abcdef" , "acca" , "ac" , "bat" , "boy" ,
    "cat" , "cat" , "bob" , "assistant" , "british", "cabbagge" , 
    "accessories" , "batman" ,"aquaman" , "calibristyle" , "a" , "aaaaaa"
]




 let input =  document.querySelector('input');
input.addEventListener('keyup', function(event){
    let html = "";
    if(input.value){
        for(word of words){
            if(word.startsWith(input.value)){
                html += `<li>${word}</li>`
            }
        }
    }
    document.querySelector('ul').innerHTML = html;
});
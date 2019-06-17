const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  // your code here
  const body = document.querySelector('body');
  let index = 0;
  body.addEventListener(function(e){
    const key = e.key;
    if(key === codes[index]){
      index++;
      
      if(index === codes.length){
        alert('Congratulations!!')
        
        index = 0;
      }
    } else {
      index = 0;
    }
  });
}
init();

//   body.addEventListener(codes[0], fonction(e){
//     if(e.key === codes[0]){
//     alert('Congratulations') 
//     }
//   });
// }
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
  
  body.addEventListener(codes[0], fonction(e){
    if(e.key === codes[0]){
     alert('Congratulations') 
    }
  });
}

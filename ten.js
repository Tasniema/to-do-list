
let images = document.querySelectorAll('img');

    // تكرار على كل عنصر <img>
    images.forEach(function(image) {
      // التحقق من وجود الخاصية alt
      if (image.hasAttribute('alt')) {
        // تغيير القيمة إلى "Old"
        image.alt = "Old";
      } else {
        // تغيير القيمة إلى "Elzero New"
        image.alt = "Elzero New";
      }
    });

document.addEventListener('DOMContentLoaded',function(){
  document.querySelector('form').addEventListener('submit', function(e){
    e.preventDefault()
    let elements =document.querySelector("[name='elements']").value;
    let texts =document.querySelector("[name='texts']").value;
    let type=document.querySelector("[name='type']").value;
    let container = document.querySelector('.results');
    let idCounter = 1;
  
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }

    for(i=1; i<=elements;i++){
      let newElement=document.createElement(type);
      newElement.className ="box" ;
      newElement.id = "id-" + idCounter;
      newElement.title = "element";
      newElement.textContent = texts
      container.appendChild(newElement);
      idCounter++;
    }
  });
});

const singleField = document.querySelectorAll('.field__item');
 
// hasDuplicates = (arr)=> {
//     let el =  new Set(arr).size; 
//     if (el !== arr.length){
//         console.log('found');
//       }
// }
// double = (arr)=>{
//     let doubleElemIndex;
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < i; j++)
//         if (arr[j] === arr[i]) {
//             doubleElemIndex = arr[j];
//             return doubleElemIndex;
//         }
//     }
// }


showElement =()=>{
    let elements = [];

    singleField.forEach.call(singleField,function(el){
        el.addEventListener('click', ()=>{

                el.classList.toggle('active');
                setTimeout(()=>{
                    el.classList.remove('active');
                    elements.push(el.innerText);
                     for (let i =0; i<elements.length; i++){
                        if (elements[i] === elements[i-1]){
                            el.classList.add('found');
                            if (el.classList.contains('active found') ||el.classList.contains('active') ){
                                el.classList.remove('active')
                            }
                            if (el.id !== el.innerText){
                                el.classList.add('found');
                            }
                            document.getElementById(el.innerText).classList.add('found');
                           
                            elements = elements.splice();
                        }
                   }
                },300);
                
          });
          
    });
    
   
}

showElement();



 


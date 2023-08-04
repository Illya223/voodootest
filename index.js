const requestURL = "https://voodoo-sandbox.myshopify.com/products.json?limit=461";

title = document.getElementsByClassName('title');
img = document.getElementsByClassName('photo');
pagenumbers = document.querySelectorAll('.pagenumber');

   var a1 = 2;
   var a2 = 26;
   var b1 = 0;
   var b2 = 24;

    
        
       
       const handleClick = (event) => {
        
        for( var i=2; i<461; i+=24){
                        if(Number(event.currentTarget.innerHTML) == 1){
                                a1 = 2;
                                a2 = 26
                                
                        }
                        else{
                        a1 =2 + 24 * (Number(event.currentTarget.innerHTML)-1);
                        a2 = 26 + 24 * (Number(event.currentTarget.innerHTML)-1);
                }
               }
               fetch(requestURL).then(response => {
                return response.json();})
            .then(data => result(data,a1,a2))
            .catch(err => console.log(err))
         
              console.log(a1);
              console.log(a2);
       }

    pagenumbers.forEach(number => {
        number.addEventListener('click', handleClick)
    });
               
               


     fetch(requestURL).then(response => {
        return response.json();})
    .then(data => result(data,a1,a2))
    .catch(err => console.log(err))


    



    function result(data,a1,a2){
        
            for( var a = a1, b =b1;a < a2, b < b2 ;a++, b++){
                title[b].innerHTML = data['products'][a].title;
            }
        for( var a = a1, b =b1; a < a2, b < b2; a++, b++){
                img[b].src = data['products'][a].images[0].src
            }
            for( var a = a1; a < a2; a++){
                console.log(data['products'][a])
            }

            

    }

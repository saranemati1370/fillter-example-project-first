const inSearch =document.querySelector("#search_name");
const products =document.querySelectorAll('.main_course_item');
const button =document.querySelectorAll('.filter_btn');

//function
const searchName =(e) =>{

    const valueName =e.target.value.toLowerCase().trim();
    products.forEach((pro) =>{
        const nameProducts = pro.children[1].innerText;
        const nameProductsEn = pro.children[2].innerText.toLowerCase();
console.log(nameProductsEn);
    //search fa
if (nameProducts.includes(valueName)){

    pro.style.display="block";
}else{
    pro.style.display="none";
    
}

// search en
if (nameProductsEn.includes(valueName)){

    pro.style.display="block";
}else{
    pro.style.display="none";
    
}
    })
}
const btnHandler=( e)=>{
     const btnFilter =e.target.dataset.filter;
     
     products.forEach((filter)=>{
         const categoryPro = filter.dataset.category;
         if(btnFilter==="all") {
            filter.style.display="block";

         }else{
            if(btnFilter===categoryPro){
                filter.style.display="block";
            }else{
                filter.style.display="none";
            }
         }

     })

}

inSearch.addEventListener('keyup',searchName)
button.forEach((btn) =>{
btn.addEventListener('click',btnHandler)

})


const LoadPhone= async(SearchText) =>{
    const response=await fetch(`https://openapi.programming-hero.com/api/phones?search=${SearchText}`);
    const data=await response.json();
    const phones=data.data;
    DisplayPhones(phones);
}


 const DisplayPhones = phones =>{

   const PhoneContainer=document.getElementById('PhoneContainer');
   PhoneContainer.textContent='';  // old searched items will be empty when we search.
  
   
   const ShowMoreButton=document.getElementById('ShowMoreButton');
       if(phones.length >8){
        ShowMoreButton.classList.remove('DisplayHidden');
       }
       else{
        ShowMoreButton.classList.add('DisplayHidden');
       }
   


  // we set the value of phones from 0 to 7. so now we can display only first 7 items.
  //  phones = phones.slice(0,7);

   for(const phone of phones){
     console.log(phone);
    
    PhoneContainer.classList=`PhoneContainer`; 
    
     const PhoneCard=document.createElement('div');
     PhoneCard.classList=`OuterDiv`;

    PhoneCard.innerHTML=`
            <div class="ImageDiv"><img class="ImgClass" src="${phone.image}" alt=""></div>
            
            <div class="DescriptionDiv">
               <h1 class="HClass1">${phone.phone_name}</h1>
               <P class="PClass3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate sapiente quis aliquid aspernatur asperiores autem.</P>
               <p class="PhonePrice">$999</p>
               <button class="ShowDetailButton">Show Details</button>
            </div>
    `;

    PhoneContainer.appendChild(PhoneCard);
   }

 }



 function SearchPhone(){
  const SearchPhone=document.getElementById('SearchField');
  const SearchText=SearchPhone.value;
  LoadPhone(SearchText);
 }

LoadPhone();
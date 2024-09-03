const LoadPhone= async(SearchText,show) =>{
    
    const response=await fetch(`https://openapi.programming-hero.com/api/phones?search=${SearchText}`);
    const data=await response.json();
    const phones=data.data;
    DisplayPhones(phones,show); 
}






 const DisplayPhones = (phones,show) =>{

   const PhoneContainer=document.getElementById('PhoneContainer');
   PhoneContainer.textContent='';  // old searched items will be empty when we search.
  
   
   const ShowMoreButton=document.getElementById('ShowMoreButton');
       if(phones.length >8){
        ShowMoreButton.classList.remove('DisplayHidden');
       }
       else{
        ShowMoreButton.classList.add('DisplayHidden');
       }
   
  // console.log('show all',show);



  // we set the value of phones from 0 to 7. so now we can display only first 7 items.
    if(!show){
      // when "show" variable is false (show more button a click na korle seta false thakbe, false thakle only 8 ta elements dekhabe)
      phones = phones.slice(0,8);
      // this is not the perfect way to show more elements. when we implement database, we retrieve limited elements from database.
    }
    else if(show){  
      // when "show" variable is true (show more button a click korle seta true hobe, true hole sob elements dekhabe, sob elements dekhale to amar ar show dekhanor dorkar nai, tai abar display hidden kore diyechi)

      ShowMoreButton.classList.add('DisplayHidden');
    }



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
               <button class="ShowDetailButton" onClick="ShowDetails('${phone.slug}')" >Show Details</button>
            </div>
    `;


     //  line No. 61 a ba ShowDetails() function a jehetu "phone.slug" kono variable na ar amra parameter hisebe variable or string chara ar kichu sent korte parina, tai single quatation er moddhe rakhte hobe. karon amra ekta function er parameter hisebe send korchi, parameter hoy variable, but eta to variable na, tai single quation diye etake string banate hobe. noyto compiler mone korbe eta ekta variable & bolbe ei variable ta define kora hoyni.
               

    PhoneContainer.appendChild(PhoneCard);
   }

 }








 function SearchPhone(show){
  const SearchPhone=document.getElementById('SearchField');
  const SearchText=SearchPhone.value;
  LoadPhone(SearchText,show);
 }







 function ShowMore(){
  SearchPhone(true); // when show more button is clicked, the "SearchPhone() will get true from here."
 }




const ShowDetails= async (PhoneId)=>{
  // console.log('Show detials is clicked',PhoneId)

  // load individual phone details

  const response = await fetch(`https://openapi.programming-hero.com/api/phone/${PhoneId}`)
  const data = await response.json();
  const phoneInfo=data.data;

  console.log(data);
  console.log(phoneInfo);
}

const submitBtn=document.getElementById('submitbtn');
const cityName=document.getElementById('cityName');
const city_name=document.getElementById('city_name');
const temp=document.getElementById('tempval');
const temp_status=document.getElementById('temp_status');
const middle_layer=document.querySelector('.data_hide');
const submit=async (event)=>{
    event.preventDefault(); 
    const input=city_name.value;
    if(input.trim()==='')
    {
        cityName.innerText="Please Enter A Valid City Name";
        middle_layer.classList.add('data_hide');
    }
    else
    {
        try{
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=fdd687b7362ec0704de5c6d9dcad5a9e`;
        const response= await fetch(url);
        const data= await response.json();
       const arrData=[data];
       cityName.innerText=`${arrData[0].name}, ${arrData[0].sys.country}`;
       temp.innerText=Math.round((arrData[0].main.temp-273)*100)/100;
       const condition=arrData[0].weather[0].description;
       middle_layer.classList.remove('data_hide');
       if(condition=="Clear")
       {
         temp_status.innerHTML=`<i class="fa-solid fa-sun" style="color: #ecf024;"></i>`;
       }
       else if(condition=="Clouds"){
temp_status.innerHTML=`<i class="fa-solid fa-cloud" style="color: #919191;"></i>`
        }
        else if(condition=="Rain"){
temp_status.innerHTML=`<i class="fa-solid fa-raindrops" style="color: #5895fe;"></i>`
        }
        else
        {
            console.log("hi");
temp_status.innerHTML=`<i class="fa-solid fa-cloud" style="color: #919191;"></i>`
        }
    }
catch{
    cityName.innerText="Please Enter A Valid City Name";
        middle_layer.classList.add('data_hide');
}
}
}
submitBtn.addEventListener('click',submit);

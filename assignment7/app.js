let text=document.querySelector("input");
let btn=document.getElementById("btn");
let weather=document.getElementById("weather");
let loc=document.getElementById("location");
let temp=document.getElementById("temp");
let minmax=document.getElementById("minmax");
let date=document.getElementById("date");
start();
function start(){
    getweather("delhi")
}
btn.addEventListener("click",(e)=>{
    e.preventDefault();
    let input=text.value;
    getweather(input);
    text.value="";
});
function getweather(input){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=cc7b365cdf72c6b1736b020dc6c87432`)
    .then((result)=>{
        return result.json()
    })
    .then((data)=>{
        let txt=data.weather[0].description;
        weather.innerHTML=txt;
        txt=data.sys.country;
        loc.innerHTML=input.toUpperCase()+','+txt;
        txt=parseInt(data.main.temp-273);
        temp.innerHTML=txt+"&ordm;C";
        txt=parseInt(data.main.temp_min-273);
        let txt2=parseInt(data.main.temp_max-273);
        minmax.innerHTML=txt+"&ordm;C(min) / "+txt2+"&ordm;C(max)";
        txt=new Date();
        date.innerHTML=txt.toISOString().split('T')[0];
    })
    .catch((err)=>{
        alert("Enter Correct Name");
        console.log(err.message);
    });
}
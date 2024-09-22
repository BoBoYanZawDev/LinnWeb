const searchBox=document.getElementById("searchToggle");
const Btn=document.getElementById("searchBtn");
let inputBox=document.getElementsByTagName("input")[0];
let ShowSearchBox=document.getElementsByClassName("searchBox")[0];

// Search Toggle Button
const toggleSearchBox=()=> {
    searchBox.classList.toggle("search");
    searchBox.classList.toggle("searchFullbar");
    Btn.classList.toggle("toggleicon");
    Btn.classList.toggle("icon");

    // show SearchBox
    if (!inputBox.hasAttribute('style')) {
        ShowSearchBox.style.display="inline-block";        
    } else {
        ShowSearchBox.removeAttribute('style');      
    }
}

Btn.addEventListener("click",()=>{
    return toggleSearchBox()
});




// test js
for(let i="*"; i.length <=6; i+="*"){
    console.log(i);
}

function fibonacci(n){
    let a = 0;
    let b = 1;

    if (n == 0){
        return a ;
    }
    for(let i = 2; i <= n; i++){
        let c=a+b;
        a=b;
        b=c;
        }
        return b;
}
console.log(fibonacci(3));

function fibonacciSeries(r){
    let a = 0 , b=1 ,c;
    for(let i = 0; i < r ; i++){
        console.log(a);//0,1,1,2,3,5,8,13,21,34
        c=a+b;//1,2,3,5,8,13,21,34,55
        a=b;//1,1,2,3,5,8,13,21,34
        b=c;//1,2,3,5,8,13,21,34,55
    }
}
fibonacciSeries(15);
//기존 함수 선언 방식
/*
function funPrint() {
    console.log("외부 자바스크립트");
}*/

// ES6+ : 화살표 함수
const funPrint = (n) => {
    console.log(n)
    console.log("외부스크립트");
    console.log(`버튼${n}`);//bactic 문자열
}

//DOM 생성
/* JQuery */
//$document.ready() {}
/* JS */
//DOM이 생성되고 난 후에 요소를 CRUD 해야한다.
//document.addEventListener(string,callbackfunction)
//document.addEventListener("DOMContentLoaded",function() {});
document.addEventListener("DOMContentLoaded", ()=>{

    //    console.log(document.getElementById("bt").innerHTML);

    /* 요소생성 */
//    let bt = document.createElement("button");
//    document.getElementById("bt").append(bt);


    /* 요소찾기 */
    
    //const bts1 = document.getElementsByClassName("bt1");
    //console.log(bts1);

    //const bts2 = document.getElementsByName("button");
    //console.log(bts2);

    //const bts3 = document.querySelector(".bt1");
    //console.log(bts3);

    const bts4 = document.querySelectorAll(".bt1");
    console.log(bts4);

    //console.log(bts4[0].innerHTML);
    //console.log(bts4[0].innerText);

    /* 반복문 */
    // for(let i=0; i<bts4.length; i++) {  
    //     console.log(bts4[i]);
    //     bts4[i].innerHTML = `mybutton${i+1}`
    //     console.log(bts4[i].innerHTML);
    // }

    /* for in */    
    // for(let i in bts4) {
    //     console.log(i)
    // }

    /* forEach */    
    //bts4.forEach((item)=>{console.log(item.innerHTML)});
    //bts4.forEach((item, idx)=>{console.log(`${idx} : ${item.innerHTML}`)});

    /* for .. of */
    // for(let item of bts4) {
    //     console.log(item.innerHTML);
    // }
    for(let[idx, item] of bts4.entries()) {
        console.log(`${idx} : ${item.innerHTML}`);
    }

});
    
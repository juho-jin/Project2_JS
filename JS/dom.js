

/*DOM 요소가 생성된 후에 실행*/
document.addEventListener("DOMContentLoaded",()=>{

});

//확인 버튼을 누를 때 라디오 버튼 생성
const start = () => {
    const que = document.querySelector("#msg");
    let sel = "";
    for(let i=1;i<=6;i++) {
        sel += `<div class="select" onclick = "show(${i});"><input type="radio" id="select${i}" name="number" value="${i}"><label for="select">${i}</label></div>`
    }
    que.innerHTML = sel;
}

//라디오버튼의 값과 동일한 값을 변수에 할당해서 전달
let i=0;
const show = (i)=>{
    //console.log(i);
    const msg = document.querySelector("#msg");
    let img="";

    //난수생성 및 num 변수에 할당
    let num = Math.floor(Math.random()*(6-1)+1);

    //if문을 활용하여 라디오 버튼 값과 같을 경우, 다를 경우에 따른 html문 분기
    if(i==num) {
        img =`<div class="divMsg"><img src="./image/${num}.png" id="img1"></img></div><div class="divMsg"><img src="./image/o.png" id="img1"></img></div>`;
        msg.innerHTML = img;
    } else {
        img =`<div class="divMsg"><img src="./image/${num}.png" id="img1"></img></div><div class="divMsg"><img src="./image/x.png" id="img1"></img></div>`;
        msg.innerHTML = img;
    }
    
}
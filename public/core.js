async function getData(){
    const value = await fetch("/data",{
        method:"GET"
    });
    console.log(value);
    // const elem = document.getElementById('')  // 
    // elem.appendChild()
    // Element.innerHTML = value
}
getData();
const textArray = ['a', 'b', 's', 'd', 'x', 'z', 'c', 'v', 'n', 'm', 'q', 'w', 'y', '/', 'u', 'h', 'j', 'l', 'e', 'f', '/', '//', " "];

window.onload = () => {
  let el = document.getElementById("anim").innerText;
  console.log(el);
    const ran = Math.floor(Math.random()*24);
    let text = "";
    for (let i = 0; i < ran; i++){
      text+= textArray[Math.floor(Math.random()*24)];
    }
    console.log(ran);
    document.getElementById("anim").innerText = text;
}
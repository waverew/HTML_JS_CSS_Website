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
const textArray = ['a', 'b', 's', 'd', 'x', 'z', 'c', 'v', 'n', 'm', 'q', 'w', 'y', '/', 'u', 'h', 'j', 'l', 'e', 'f', '/', '//'];

window.onload = () => {
  let el = document.getElementById("anim").innerText;
  console.log(el);
  while(true) {
    const text = "";
    for (let i; i < Math.random(20); i++){
      text+= textArray[Math.random(22)];
    }
    el = text;
    document.getElementById("anim").innerText = el;
    return false;
  }
}
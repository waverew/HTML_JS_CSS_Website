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

function animation() {
  let el = document.getElementById("anim").innerText;
  console.log(el);
  
}
setTimeout(animation(), 3000);
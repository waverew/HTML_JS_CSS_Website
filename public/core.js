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
    const button = document.getElementById('test');
    const anim = document.getElementById('anim');
    const ran = Math.floor(Math.random()*300);
    console.log(ran);
    setInterval(() => {
        let text = "";
        for (let i = 0; i < ran; i++){

            text+= textArray[Math.floor(Math.random()*23)];
        }
        anim.innerText = text;
    }, 2000);
}

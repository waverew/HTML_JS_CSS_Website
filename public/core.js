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
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry);
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
            else{
                entry.target.classList.remove('show');
            }
        })
    })
    const hidElemns = document.querySelectorAll('.main-cont');
    hidElemns.forEach((el) => {
        observer.observe(el);
    });
    const button = document.getElementById('test');
    const anim = document.getElementById('anim');
    const ran = 21000 // Math.floor(Math.random()*9000);
    console.log(ran);
    setInterval(() => {
        let text = "";
        for (let i = 0; i < ran; i++){
            text+= textArray[Math.floor(Math.random()*23)] + " ";
        }
        anim.innerText = text;
    }, 100);
}

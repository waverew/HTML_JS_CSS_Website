async function getData(){
    const value = await fetch("/",{
        method:"GET"
    });
    console.log(value);
    // const elem = document.getElementById('')  // 
    // elem.appendChild()
    // Element.innerHTML = value
}
getData();
let input = document.querySelector("input")
let form = document.querySelector("form")
let generateQr = document.getElementById("generate")
let img = document.querySelector('img')
let detail = document.getElementById('p')

form.addEventListener('submit',getData)

async function getData(e){
 e.preventDefault();
 
  try{
 const response =await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${input.value}`)
//  detail.innerText =await `QR code of ${input}`
// document.write(input)

  
 img.setAttribute("src",response.url)
// let data = response.json()
console.log(response)

  } catch(error){
    window.alert("INVALID")
  }
  form.reset()
}
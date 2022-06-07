const baslik=document.querySelector('#baslk')

baslik.style.color='pink'
baslik.style.textAlign='center'


const resim1=document.querySelector('.resim')
resim1.onmouseover=()=>{
resim1.src='./img/aslan1.jpeg'
}
resim1.onmouseout=()=>{
    resim1.src='./img/aslan2.jpeg'
}

const bagla=document.querySelector('.btn-outline-primary')
bagla.style.color='Blue'
bagla.style.backgroundColor='White'
bagla.style.border='1px solid'
bagla.onclick=()=>{
    resim1.src='./img/telbagla.gif'
}

const konus=document.querySelector('.btn-outline-danger')
konus.style.color='Red'
konus.style.backgroundColor='white'
konus.style.border='1px solid'
konus.onclick=()=>{
    resim1.src='./img/telefon.gif'
}
const arama= document.querySelector('.btn-outline-warning')
arama.style.color='Orange'
arama.style.backgroundColor='white'
arama.style.border='1px solid'

const sess=document.querySelector('.ses')
arama.onclick=()=>{
    sess.play()

}
arama.ondblclick=()=>{
    sess.pause()
}
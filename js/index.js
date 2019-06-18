window.onload=function(){
// 轮播主图
let imglist=document.querySelectorAll(".lunb .imgbox a")
let dianlist=document.querySelectorAll(".lunb .dian li a")
let bigbox=document.querySelector(".lunb")
let index=0;
imglist[0].style.opacity=1;
dianlist[0].classList.add("hot")
function move(){
    index++
    if(index>imglist.length-1){index=0}
    imglist.forEach((v,i)=>{v.style.opacity=0;dianlist[i].classList.remove("hot")})
    imglist[index].style.opacity=1
    dianlist[index].classList.add("hot")
}
let timer=setInterval(()=>{
move();
},1200)
bigbox.onmouseover=()=>{clearInterval(timer)}
bigbox.onmouseout=function(){timer=setInterval(()=>{move();},1200)}
dianlist.forEach((v,i)=>{
    v.onmouseover=()=>{
        index=i
        dianlist.forEach((a,b)=>{
            a.classList.remove("hot")
            imglist[b].style.opacity=0
        })
        imglist[index].style.opacity=1;
        dianlist[i].classList.add("hot")
    }
})

// 轮播主图左侧选项卡
let lialist=document.querySelectorAll(".lunb .left .lia")
let conlist=document.querySelectorAll(".lunb .left .content")
lialist.forEach((v,i)=>{
    v.onmouseover=()=>{
        conlist.forEach((a,b)=>{a.style.display="none";lialist[b].classList.remove("hot1")})
        v.classList.add("hot1");
        conlist[i].style.display="block"
    }
    v.onmouseout=()=>{
        v.classList.remove("hot1");conlist[i].style.display="none"
    }
})



//导航栏选项卡  
let bigl=document.querySelector(".logw .textcon")
let dclist=document.querySelectorAll(".logw .textcon .content .childlist")
let dhlist=document.querySelectorAll(".logo .text1 .menu")
dhlist.forEach((v,i)=>{
    v.onmouseover=()=>{
        dclist.forEach((a,b)=>{a.style.display="none";dhlist[b].classList.remove("hot2");
        // bigl.style.display="none";
    })
        v.classList.add("hot2");dclist[i].style.display="block";bigl.style.display="block";
    }
    v.onmouseout=()=>{
        v.classList.remove("hot2");dclist[i].style.display="none";bigl.style.display="none";
    }

})



}





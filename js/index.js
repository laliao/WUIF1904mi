window.onload = function() {
    // 轮播主图
    let imglist = document.querySelectorAll(".lunb .imgbox a")
    let dianlist = document.querySelectorAll(".lunb .dian li a")
    let bigbox = document.querySelector(".lunb")
    let jianlist = document.querySelectorAll(".lunb .jian>div")
    let index = 0;
    imglist[0].style.opacity = 1;
    dianlist[0].classList.add("hot")

    function move() {
        index++
        if (index > imglist.length - 1) { index = 0 }
        imglist.forEach((v, i) => { v.style.opacity = 0;
            dianlist[i].classList.remove("hot") })
        imglist[index].style.opacity = 1
        dianlist[index].classList.add("hot")
    }
    let timer = setInterval(() => {
        move();
    }, 1200)
    bigbox.onmouseover = () => { clearInterval(timer) }
    bigbox.onmouseout = function() { timer = setInterval(() => { move(); }, 1200) }
    dianlist.forEach((v, i) => {
        v.onmouseover = () => {
            index = i
            dianlist.forEach((a, b) => {
                a.classList.remove("hot")
                imglist[b].style.opacity = 0
            })
            imglist[index].style.opacity = 1;
            dianlist[i].classList.add("hot")
        }
    })
    jianlist[1].onclick = () => {
        move()
    }
    jianlist[0].onclick = () => {
        index--
        if (index < 0) { index = imglist.length - 1 }
        imglist.forEach((v, i) => { v.style.opacity = 0;
            dianlist[i].classList.remove("hot") })
        imglist[index].style.opacity = 1
        dianlist[index].classList.add("hot")
    }


    // 轮播主图左侧选项卡
    let lialist = document.querySelectorAll(".lunb .left .lia")
    let conlist = document.querySelectorAll(".lunb .left .content")
    let bigdhl = document.querySelector(".lunb .left")
    lialist.forEach((v, i) => {
        v.onmouseover = () => {
                conlist.forEach((a, b) => { a.style.display = "none";
                    lialist[b].classList.remove("hot1") })
                v.classList.add("hot1");
                conlist[i].style.display = "block"
            }
            // v.onmouseout=()=>{
            //     v.classList.remove("hot1");conlist[i].style.display="none"
            // }
    })
    conlist.forEach((v, i) => {
        v.onmouseover = () => {
            lialist.forEach((a, b) => { a.classList.remove("hot1");
                conlist[b].style.display = "none"; })
            lialist[i].classList.add("hot1");
            v.style.display = "block";
        }
    })
    bigdhl.onmouseout = () => {
        conlist.forEach((v, i) => {
            lialist[i].classList.remove("hot1");
            v.style.display = "none";
        })
    }

    //导航栏选项卡  
    let bigl = document.querySelector(".logw .textcon")
    let dclist = document.querySelectorAll(".logw .textcon .content .childlist")
    let dhlist = document.querySelectorAll(".logo .text1 .menu")
    dhlist.forEach((v, i) => {
        v.onmouseover = () => {
            dclist.forEach((a, b) => {
                a.style.display = "none";
                dhlist[b].classList.remove("hot2");
                // bigl.style.display="none";
            })
            v.classList.add("hot2");
            dclist[i].style.display = "block";
            bigl.style.display = "block";
        }
        v.onmouseout = () => {
            v.classList.remove("hot2");
            dclist[i].style.display = "none";
            bigl.style.display = "none";
        }

    })



    //右侧导航选项卡
    let ydlist = document.querySelectorAll(".gud .box>span")
    let yclist = document.querySelectorAll(".gud .box .zuohua")
    ydlist[1].classList.add("you")
    ydlist.forEach((v, i) => {
        v.onmouseover = function() {
            yclist.forEach((a, b) => {
                a.style.display = "none"
                ydlist[b].classList.remove("you")
            })
            yclist[i].style.display = "block"
            v.classList.add("you")
        }
        v.onmouseout = () => {
            v.classList.remove("you");
            yclist[i].style.display = "none"
        }

    })

    let imglistl = document.getElementsByTagName("img")
        // console.log(imglistl)
    $.each(imglistl, (i, v) => {
        v.classList.add("lazy")
    })
    $("img.lazy").lazyload({
        effect: "fadeIn",
        container: "#bigboxl",
        threshold: 200,
    })

    //置顶

    let toTop = document.querySelector("#toTop");
    let times;
    let scrollT, speed = 50;
    window.onscroll = () => {
        if (scrollY < window.innerHeight) {
            toTop.style.display = "none";
        } else {
            toTop.style.display = "block";
            toTop.onclick = () => {
                clearInterval(times);
                timer = setInterval(() => {
                    scrollT = document.documentElement.scrollTop;
                    scrollT -= speed;
                    scrollTo(0, scrollT);
                    if (scrollT == 0) {
                        clearInterval(times);
                    }
                }, 2)

            }
        }
    }



//内容部分
for (let i = 1; i <= 4; i++) {
    let conText = document.querySelectorAll(`.contents .bottom .box${i} .conBox .con a`);
    let conDot = document.querySelectorAll(`.contents .bottom .box${i} .conBox .dian span`);
    let conLeft = document.querySelector(`.contents .bottom .box${i} .conBox .leftBtn`)
    let conRight = document.querySelector(`.contents .bottom .box${i} .conBox .rightBtn`)
    conText[0].style.left = 0;
    conDot[0].classList.add("span1");

    let index = 0, next = 0;

    //向右滑动
    function toRight() {
        conText[index].style.left = 0;
        conText[next].style.left = "-332px";
        animate(conText[index], { left: 332 });
        animate(conText[next], { left: 0 });
        conDot[index].classList.remove("span1");
        conDot[next].classList.add("span1");
        index = next;
    }
    //向左滑动
    function toLeft() {
        conText[index].style.left = 0;
        conText[next].style.left = "332px";
        animate(conText[index], { left: -332 });
        animate(conText[next], { left: 0 });
        conDot[index].classList.remove("span1");
        conDot[next].classList.add("span1");
        index = next;
    }

    //点击左箭头，向右滑动
    conLeft.onclick = () => {
        next--;
        if (next >= 0) {
            toRight();
        } else {
            next++;
        }
    }
    //点击右箭头，向左滑动
    conRight.onclick = () => {
        next++;
        if (next <= conText.length - 1) {
            toLeft();
        } else {
            next--;
        }
    }
    conDot.forEach((v, i) => {
        v.onclick = () => {
            next = i;
            if (next < index) {  // 向右滑动
                toRight();
            } else if (next > index) {  //向左滑动
                toLeft();
            }
        }
    })

}




//大块鼠标移动
function selectCart(same) {
    let sameTop = document.querySelectorAll(same + " .top .right span");
    let sameBot = document.querySelectorAll(same + " .bottom .rightbox .right");
    console.log(sameBot)
    sameBot[0].style.display = "block";
    // sameTop[0].classList.add("span1");
    sameTop.forEach((value, index) => {
        value.onmouseover = () => {
            sameTop.forEach((v, i) => {
                // v.classList.remove("span1");
                sameBot[i].style.display = "none";
            })
            // value.classList.add("span1");
            sameBot[index].style.display = "block";
        }
    })
}


for (let i = 1; i < 6; i++) {
    let same = `.same${i}`;
    selectCart(same);
}



}
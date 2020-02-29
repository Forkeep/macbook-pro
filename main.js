let style = document.getElementById('style');

let code = document.getElementById('style-code');

const css_code = `
/* 首先我需要一台MacBook Pro */

/* 我的MacBook Pro不错吧~  */
/* 现在开始来做一个八卦图吧！ */
.taichi {
    position: relative;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 50%, 
    rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 100%);
}

.taichi::before {
    border-radius: 50%;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    transform: translateX(50%);
    width: 150px;
    height: 150px;
    background: radial-gradient(circle, rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 25%, 
    rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 1) 100%);
}

.taichi::after {
    border-radius: 50%;
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translateX(50%);
    width: 150px;
    height: 150px;
    background: radial-gradient(circle, rgba(0, 0, 0, 1) 0%, 
    rgba(0, 0, 0, 1) 25%,
    rgba(255, 255, 255, 1) 25%, 
    rgba(255, 255, 255, 1) 100%);
}

/*让太极图转起来吧*/
.taichi {
    animation: taichi 5s linear infinite;
}

/*加点阴影效果吧*/
.taichi{
    box-shadow: 0 0 5px 5px #666666;
}

/* ok啦 */


`



let n = 0;

let id = setInterval(function () {
    n = n + 1;
    code.innerHTML = Prism.highlight(css_code.substring(0, n), Prism.languages.css);
    style.innerHTML = css_code.substring(0, n);
    console.log(code.scrollHeight);
    code.scrollTop = code.scrollHeight;
    console.log(code.scrollTop)
    if (n>css_code.length){
        window.clearInterval(id)
    }
}, 0)





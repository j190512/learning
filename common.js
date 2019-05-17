//返回document --id--对象
function my$(id) {
    return document.getElementById(id);
}

//文本兼容
function setInnerText(element, text) {
    if (typeof element.textContent == "undefined") {
        element.innerText = text;
    } else {
        element.textContent = text;
    }
}

function getInnerText(element) {
    if (typeof element.textContent == "undefined") {
        return element.innerText;
    } else {
        return element.textContent;
    }
}

//获取任意一个父级元素的第一个子元素
function getFristElementChridByF(fElement) {

    if (fElement.firstElementChild) {
        return fElement.firstElementChild;
    } else {
        var node = fElement.firstChild; //第一个子节点
        while (node && node.nodeType != 1) {
            node = node.nextSibling;
        }
        return node;
    }
}
//获取任意一个父级元素的最后一个子元素
function getLastElementChridByF(fElement) {

    if (fElement.lastElementChild) {
        return fElement.lastElementChild;
    } else {
        var node = fElement.lastChild; //最后一个子节点
        while (node && node.nodeType != 1) {
            node = node.previousSibling;
        }
        return node;
    }
}
//兼容代码--为任意元素绑定任意事件
function addEventListener(element, type, fn) {
    //判断浏览器是否支持这个方法
    if (element.addEventListener) {
        element.addEventListener(type, fn, false);
    } else if (element.attachEvent) {
        element.attachEvent("on" + type, fn);
    } else {
        element["on" + type] = fn;
    }
}
//兼容代码--为任意元素解绑任意事件
function removeEventListener(element, type, fnName) {
    //判断浏览器是否支持这个方法
    if (element.removeEventListener) {
        element.removeEventListener(type, fnName, false);
    } else if (element.detachEvent) {
        element.detachEvent("on" + type, fnName);
    } else {
        element["on" + type] = null;
    }
}

//动画函数--任意一个元素移动到目标(左右)位置 
//参数：对象元素（position:absolute才能运动）  目标位置   定时器时间-默认为200毫秒(可改)
function animate(element,target,time){
    clearInterval(element.timeId);
    //定时器的id值存在对象的一个属性值中，避免创建过多的定时器
    element.timeId = setInterval(function(){
        // 获取当前位置
        var current = element.offsetLeft;
        //每次运动的距离--10px
        var step = 10;
        //移动的方向
        step = current < target ? step : -step;
        //移动到当前位置
        current += step;
        if(Math.abs(current - target)>Math.abs(step)){
            element.style.left = current + "px";
        }
        else{
            element.style.left = target + "px";
            clearInterval(element.timeId);
        }
        // console.log( element.style.left);
    },time||200);
}


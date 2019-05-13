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
let iconImage = document.querySelector('img');
iconImage.onclick = function() {
    imsSrc = iconImage.getAttribute('src');
    if (imsSrc === 'images/icon.jpeg') {
        iconImage.setAttribute('src', 'images/封面2.jpg');
    } else {
        iconImage.setAttribute('src', 'images/icon.jpeg');
    }
}

let myHeading = document.querySelector('h1');
let myButton = document.querySelector('button');

function setUserName() {
    let userName = prompt("请输入你的名字：");
    if (!userName) {
        alert("非法用户名! 请重新输入");
        setUserName();
    } else {
        localStorage.setItem("name", userName);
        myHeading.textContent = "你好，" + userName;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    myHeading.textContent = "你好，" + localStorage.getItem("name");
}

myButton.onclick = function () {
    setUserName();
}
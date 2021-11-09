const item = document.querySelectorAll(".i");
const content = document.querySelectorAll(".c");
// 实现选项卡切换
for (let i = 0; i < item.length; i++) {
  item[i].addEventListener("click", () => {
    item[i].className = "i active";
    content[i].className = "c active";
    for (let j = 0; j < item.length; j++) {
      if (j != i) {
        item[j].className = "i";
        content[j].className = "c";
      }
    }
  });
}
// 为输入框添加防抖
const inp = document.querySelectorAll("input");
function gett(num, content) {
  return function () {
    console.log(num, content.value);
  };
}
function debounce(func, delay) {
  let timer;
  let context = this;
  let args = arguments;
  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(function () {
      func.apply(context, args);
    }, delay);
  };
}
let fn = (num, content) => debounce(gett(num, content), 1000);
inp.forEach((item, index) => {
  item.addEventListener("input", fn(index, item));
});
// ===============================================================
// 鼠标跟随效果
let img = document.querySelector(".img");
// 定义图片旋转角度
let deg = 0;
let imgx = 0;
let imgy = 0;
let imgl = 0;
let imgt = 0;
let y = 0;
let index = 0;
window.addEventListener("mousemove", function (xyz) {
  // console.log(xyz);
  imgx = xyz.x - img.offsetLeft - img.clientWidth / 2;
  imgy = xyz.y - img.offsetTop - img.clientHeight / 2;
  deg = (360 * Math.atan(imgy / imgx)) / (2 * Math.PI);
  index = 0;
  let x = Event.clientX;
  if (img.offsetLeft < x) {
    y = -180;
  } else {
    y = 0;
  }

  setInterval(() => {
    // let hi = Math.random() * 360 + 1;
    img.style.cssText =
      "transform:rotateZ(" + deg + "deg) rotateY(" + y + "deg)";
    // img.style.tranform = "rotateZ(" + deg + "deg) rotateY(" + y + "deg)";
    index++;
    if (index < 50) {
      imgl += imgx / 50;
      imgt += imgy / 50;
    }
    img.style.left = imgl + "px";
    img.style.top = imgt + "px";
  }, 10);
});

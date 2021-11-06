window.onload = function hi() {
  let one = document.querySelector("input");
  let two = document.querySelector("#two");
  obj = { val: "" };
  //   访问器属性
  Object.defineProperty(obj, "val", {
    get: function () {
      one.value = two.innerText;
      return one.value;
    },
    set: function (newVal) {
      one.value = two.innerText = newVal;
    },
  });

  one.addEventListener("input", () => {
    obj.val = one.value;
    two.innerText = obj.val;
    // console.log(obj.val);
  });
  two.addEventListener("input", () => {
    // console.log("hi   " + two.innerText);
    // console.log("hello   " + obj.val);
    // obj.val = two.innerText;
    one.value = obj.val;
  });
};
// 在HTML里面，光标是一个对象，光标对象是只有当你选中某个元素的时候才会出现的。

// 当我们去点击一个输入框的时候，实际上它会产生一个选中对象-selection

window.onload = function () {
  //  默认的页面
  // 头部的日期
  let cdate = document.querySelector("b");
  let b = new Date();
  // getMonth方法返回的月是从0开始的，需要+1
  cdate.innerText = `${b.getFullYear()} 年${b.getMonth() + 1} 月`;
  let text = cdate.innerText;
  // 具体日期
  let day = document.querySelectorAll("li");
  // 用正则表达式提取可以给Date传参的信息
  // 在全局匹配模式下，每次调用exec()都会更新lastIndex值，以反映上次匹配的最后一个字符的索引。
  let expression = /\d{2,4}/g;
  // RegExp实例的主要方法是exec()，主要用于配合捕获组使用。这个方法只接收一个参数，即要应用模式的字符串
  let m1 = expression.exec(text);
  let m2 = expression.exec(text);
  function fillNumber(a, b) {
    console.log(a, b);
    // 当月第一天是星期几，月份从0开始，所以需要减一
    let ddate1 = new Date(a, b - 1, 1).getDay();
    // 0是周日，6是周六
    ddate1 = ddate1 == 0 ? 7 : ddate1;
    // 当月天数
    let ddate2 = new Date(a, b, 0).getDate();
    console.log(ddate1, ddate2);
    // 上月天数
    let ddate3 = new Date(a, b - 1, 0).getDate();
    // console.log(`上月天数是${ddate3}`);
    for (let i = 0, j = ddate3 - ddate1 + 2; i < ddate1 - 1; i++, j++) {
      day[i].innerText = j;
      day[i].style.color = "#D3D3D3";
    }
    for (let i = ddate1 - 1, j = 1; j <= ddate2; i++, j++) {
      day[i].innerText = j;
      day[i].style.color = "#555";
    }
    for (let i = ddate1 + ddate2 - 1, j = 1; i < 42; i++, j++) {
      day[i].innerText = j;
      day[i].style.color = "#D3D3D3";
      // console.log(`下月日期${j}`);
    }
  }
  fillNumber(m1[0], m2[0]);
  // ======================================================================
  // 前后页面切换按钮实现
  let pre = document.querySelector("#lt");
  let next = document.querySelector("#gt");
  // DOM2方式的主要优势是可以为同一个事件添加多个事件处理程序。
  pre.addEventListener("click", function lessen() {
    if (m2[0] > 1) {
      cdate.innerText = `${m1[0]} 年${--m2[0]} 月`;
    } else {
      m2[0] = 12;
      m1[0] -= 1;
      cdate.innerText = `${m1[0]} 年${m2[0]} 月`;
    }
    fillNumber(m1[0], m2[0]);
    // cdate.style.color = "red";
  });
  next.addEventListener("click", function grow() {
    if (m2[0] < 12) {
      cdate.innerText = `${m1[0]} 年${++m2[0]} 月`;
    } else {
      m2[0] = 1;
      m1[0]++;
      cdate.innerText = `${m1[0]} 年${m2[0]} 月`;
    }
    fillNumber(m1[0], m2[0]);
    // cdate.style.color = "green";
  });
};

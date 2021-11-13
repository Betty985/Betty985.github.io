function compile(dom, data) {
  //   Object.defineProperties(data, {
  //     get: a(dom, data),
  //     set: a(dom, data),
  //     enumerable: true,
  //     configurable: true,
  //   });
  //   function a(dom, data) {
  let expm = /{{msg}}|"msg"/g;
  let expn = /{{name}}|"name"/g;
  let expt = /{{test}}|"test"/g;
  //   let m = expm.exec(dom.innerText);
  //   let n = expn.exec(dom.innerText);
  //   let t = expt.exec(dom.innerText);
  //   let a = new Map([[,data.name],[,data.msg],[,data.test]);
  //   m.splice(0, 0, data.msg)[0];
  //   data.msg = m[0];
  //   n.splice(0, 0, data.name)[0];
  //   data.name = n[0];
  //   t.splice(0, 0, data.test)[0];
  //   data.test = t[0];
  dom.innerHTML = dom.innerHTML.replace(expm, `${data.msg}`);
  dom.innerHTML = dom.innerHTML.replace(expn, `${data.name}`);
  dom.innerHTML = dom.innerHTML.replace(expt, `${data.test}`);
  //   }
}

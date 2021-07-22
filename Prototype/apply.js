/*if (!Function.prototype.myApply) {
  Function.prototype.myApply = (ctx, ...args) => {
    function fn() {}
    fn.__proto__ = myApply.prototype;
  };
}

const obj = {
  name: "fsd",
};

fn.myApply(obj);*/

class Test {
  constructor(n) {
    let x = n;
  }

  thisExample() {
    return this.x;
  }
}

let test = new Test();
test.thisExample();

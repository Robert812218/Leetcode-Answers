function memoize(fn) {
  const cache = {};
  return function(...args) {
    const key = JSON.stringify(args);
    if (key in cache) {
      return cache[key];
    }
    const result = fn.apply(this, args);
    cache[key] = result;
    return result;
  };
}

function sum(a, b) {
  return a + b;
}

function fib(n) {
  if (n <= 1) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
}

function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return factorial(n - 1) * n;
}

function getCallCount() {
  return Object.keys(this.cache).length;
}

function runTestCases(fnName, actions, params) {
  const fn = eval(fnName); 
  const memoizedFn = memoize(fn);
  const results = [];
  for (let i = 0; i < actions.length; i++) {
    const action = actions[i];
    const param = params[i];
    if (action === "call") {
      results.push(memoizedFn(...param));
    } else if (action === "getCallCount") {
      results.push(getCallCount.call(memoizedFn));
    }
  }
  return results;
}

function composeFunctions(functions) {
  return function(x) {
    return functions.reduceRight((acc, fn) => fn(acc), x);
  }
}

var reduce = function(nums, fn, init) {
    let inn = init;
    for (const n of nums) {
        inn = fn(inn, n);
        console.log(inn);
    }
    return inn;
};

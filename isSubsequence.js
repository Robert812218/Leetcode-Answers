var isSubsequence = function(s, t) {
    if (s === t) {
        return true;
    }
    
    for (const i of t) {
        if (i === s[0]) {
            s = s.substring(1);
        }
    }
    
    if (s.length === 0) {
        return true;
    } else {
        return false;
    }
};

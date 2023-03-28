var isIsomorphic = function(s, t) {
    console.log(`s: ${s}, t: ${t}`);
    
    if (s.length !== t.length) {
        return false;
    }
    
    for (let i = 0; i < s.length; i++) {
        const a = s.indexOf(s[i]);
        const b = t.indexOf(t[i]);
        
        if (t[a] !== t[i] || s[b] !== s[i]) {
            return false;
        };
    };
    return true;
};

var reverseList = function(head) {
      if (head === null) return null;
    if (head.next === null) return head;
    
    var newHead = reverseList(head.next);
    var temp = newHead;
    while (temp.next !== null) {
        temp = temp.next;
    }
    
    head.next = null;
    temp.next = head;
    
    return newHead;
    
};
// non-recursive
var reverseList = function(head) {
    if (head === null) return null;
    if (head.next === null) return head;
    if (head.next.next === null) {
        var newHead = head.next;
        head.next = null;
        newHead.next = head;
        return newHead;
    }
    
    var prevNode = head;
    var curNode = prevNode.next;
    var nextNode = curNode.next;
    
    prevNode.next = null;
    
    do {
        curNode.next = prevNode;
        prevNode = curNode;
        curNode = nextNode;
        if (nextNode) nextNode = nextNode.next;
    } while (curNode !== null)
    
    return prevNode;  
};

// 10-->15-->16

// Create the below linked list:
// myLinkedList = {
//   head: {
//     value: 10
//     next: {
//       value: 5
//       next: {
//         value: 16
//         next: null
//       }
//     }
//   }
// };

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        this.head.next = {
            ...this.head.next,
            value,
            next: null
        };
        this.tail = value;
        this.length += 1;
    }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(15);
myLinkedList.append(16);
console.log(myLinkedList);

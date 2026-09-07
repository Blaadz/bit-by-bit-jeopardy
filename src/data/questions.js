export const initialCategories = [
  {
    id: 'prog',
    title: 'Programming',
    questions: [
      { id: 'p1', value: 100, question: 'What is the output of `print([1, 2, 3][::-1])` in Python?', answer: '[3, 2, 1]', completed: false },
      { id: 'p2', value: 200, question: 'Which data structure operates on a Last-In, First-Out (LIFO) basis?', answer: 'Stack', completed: false },
      { id: 'p3', value: 300, question: 'What is the time complexity of searching in a balanced Binary Search Tree (BST)?', answer: 'O(log n)', completed: false },
      { id: 'p4', value: 400, question: 'What keyword in JavaScript creates a block-scoped variable that cannot be reassigned?', answer: 'const', completed: false },
      { id: 'p5', value: 500, question: 'In OOP, what principle allows a subclass to provide a specific implementation of a superclass method?', answer: 'Polymorphism (Method Overriding)', completed: false },
    ]
  },
  {
    id: 'cyber',
    title: 'Cybersecurity',
    questions: [
      { id: 'c1', value: 100, question: 'What does HTTPS stand for?', answer: 'Hypertext Transfer Protocol Secure', completed: false },
      { id: 'c2', value: 200, question: 'What attack involves injecting malicious SQL commands into database queries?', answer: 'SQL Injection (SQLi)', completed: false },
      { id: 'c3', value: 300, question: 'What type of attack floods a server with internet traffic to disrupt normal operations?', answer: 'DDoS (Distributed Denial of Service)', completed: false },
      { id: 'c4', value: 400, question: 'Decode this Caesar cipher (Shift +3): "KHOOR"', answer: 'HELLO', completed: false },
      { id: 'c5', value: 500, question: 'Which cryptographic algorithm uses public and private key pairs?', answer: 'RSA (Asymmetric Encryption)', completed: false },
    ]
  },
  {
    id: 'hardware',
    title: 'Binary & Hardware',
    questions: [
      { id: 'b1', value: 100, question: 'Convert decimal 13 to 4-bit binary.', answer: '1101', completed: false },
      { id: 'b2', value: 200, question: 'Convert hexadecimal `0x1F` to decimal.', answer: '31', completed: false },
      { id: 'b3', value: 300, question: 'What logic gate produces a HIGH output ONLY when both inputs are HIGH?', answer: 'AND Gate', completed: false },
      { id: 'b4', value: 400, question: 'What component inside a CPU performs basic arithmetic and logical operations?', answer: 'ALU (Arithmetic Logic Unit)', completed: false },
      { id: 'b5', value: 500, question: 'What ASCII character is represented by decimal value 65?', answer: 'Capital "A"', completed: false },
    ]
  },
  {
    id: 'networking',
    title: 'Networking',
    questions: [
      { id: 'n1', value: 100, question: 'What protocol translates domain names into IP addresses?', answer: 'DNS (Domain Name System)', completed: false },
      { id: 'n2', value: 200, question: 'What is the standard loopback IP address for localhost?', answer: '127.0.0.1', completed: false },
      { id: 'n3', value: 300, question: 'At which layer of the OSI model does a router operate?', answer: 'Layer 3 (Network Layer)', completed: false },
      { id: 'n4', value: 400, question: 'Which protocol is connectionless and does not guarantee packet delivery: TCP or UDP?', answer: 'UDP', completed: false },
      { id: 'n5', value: 500, question: 'What port does SSH run on by default?', answer: 'Port 22', completed: false },
    ]
  }
];

export const initialTeams = [
  { id: 't1', name: 'Team Alpha', score: 0 },
  { id: 't2', name: 'Team Beta', score: 0 },
  { id: 't3', name: 'Team Gamma', score: 0 },
  { id: 't4', name: 'Team Delta', score: 0 },
];
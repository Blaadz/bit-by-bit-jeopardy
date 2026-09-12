export const initialCategories = [
  {
    id: 'prog',
    title: 'Programming',
    questions: [
      {
        id: 'p1',
        value: 100,
        question: 'What will the following Python code output?\n\nx = 5\ny = 3\nOUTPUT (x + (y * 2))',
        answer: '11',
        completed: false
      },
      {
        id: 'p2',
        value: 200,
        question: 'What will this program output?\n\nDim total As Integer = 0\nFor i As Integer = 1 To 5\n    If i Mod 2 = 0 Then\n        total += i\n    End If\nNext\nConsole.WriteLine(total)',
        answer: '6',
        completed: false
      },
      {
        id: 'p3',
        value: 300,
        question: 'What will the following Python code output?\n\nnumbers = [4, 7, 2, 9, 1]\nnumbers.sort()\nprint(numbers[1] + numbers[-1])',
        answer: '11 (2 + 9)',
        completed: false
      },
      {
        id: 'p4',
        value: 400,
        question: 'A programmer wants this function to return the largest number in a list, but it does not always work:\n\ndef largest(numbers):\n    largest = 0\n    for n in numbers:\n        if n > largest:\n            largest = n\n    return largest\n\nWhat is the problem, and how could you fix it?',
        answer: 'It fails when all numbers are negative. Initialize largest using the first list element (e.g. largest = numbers[0]).',
        completed: false
      },
      {
        id: 'p5',
        value: 500,
        question: 'A program receives a list containing 100,000 numbers. You need to determine whether any two numbers add up to 1000. Comparing every number with every other number is slow. Describe a faster approach without writing the code.',
        answer: 'Use a set of previously seen numbers and check whether 1000 − x has already appeared. Approximately O(n) time.',
        completed: false
      }
    ]
  },
  {
    id: 'cyber',
    title: 'Cybersecurity',
    questions: [
      {
        id: 'c1',
        value: 100,
        question: 'What is phishing?\n\nA) A method of encrypting files\nB) A technique for tricking users into revealing information\nC) A method of compressing data\nD) A type of computer hardware',
        answer: 'B) A technique for tricking users into revealing information',
        completed: false
      },
      {
        id: 'c2',
        value: 200,
        question: 'An attacker obtains a user\'s password from a leaked database and uses it to log into the user\'s account. What type of attack is this?',
        answer: 'Credential stuffing / use of stolen credentials.',
        completed: false
      },
      {
        id: 'c3',
        value: 300,
        question: 'Alice wants to send Bob a secret message. Bob has a public key and a private key. Which key should Alice use to encrypt the message if only Bob should be able to decrypt it?',
        answer: 'Bob\'s public key.',
        completed: false
      },
      {
        id: 'c4',
        value: 400,
        question: 'A website allows users to enter their name. A user enters:\n<script>alert("Hacked!")</script>\nWhen another user views the page, the browser executes the script. What vulnerability has occurred, and why?',
        answer: 'Cross-Site Scripting (XSS), because user-controlled input was treated as executable HTML/JavaScript.',
        completed: false
      },
      {
        id: 'c5',
        value: 500,
        question: 'You receive an email saying: "URGENT — Your school account will be permanently deleted TODAY. Click here immediately to verify your password." The email contains the school logo. Give TWO reasons why you should be suspicious.',
        answer: 'Any two: urgency/threatening language, suspicious/mismatched domain, request for a password through a link, unexpected request, or untrusted link. A logo alone does not prove authenticity.',
        completed: false
      }
    ]
  },
  {
    id: 'networking',
    title: 'Networking',
    questions: [
      {
        id: 'n1',
        value: 100,
        question: 'Which device is primarily responsible for forwarding packets between different networks?\n\nA) Switch\nB) Router\nC) Monitor\nD) Keyboard',
        answer: 'B — Router',
        completed: false
      },
      {
        id: 'n2',
        value: 200,
        question: 'Which of the following is a private IPv4 address?\n\nA) 8.8.8.8\nB) 172.20.5.4\nC) 1.1.1.1\nD) 185.10.20.1',
        answer: 'B — 172.20.5.4',
        completed: false
      },
      {
        id: 'n3',
        value: 300,
        question: 'A browser connects to a website using HTTPS. What is the main purpose of HTTPS compared with ordinary HTTP?',
        answer: 'It provides encrypted and authenticated communication using TLS.',
        completed: false
      },
      {
        id: 'n4',
        value: 400,
        question: 'A computer can access 192.168.1.1 but cannot access google.com. Its internet connection appears active. What networking component would you investigate first, and why?',
        answer: 'DNS, because the computer can reach an IP address but appears unable to resolve a domain name.',
        completed: false
      },
      {
        id: 'n5',
        value: 500,
        question: 'You are given the network 192.168.1.0/24. You need to divide it into four equal-sized subnets. What subnet prefix should you use?',
        answer: '/26. The four networks are 192.168.1.0/26, .64/26, .128/26 and .192/26.',
        completed: false
      }
    ]
  },
  {
    id: 'algo',
    title: 'Algorithms & Logic',
    questions: [
      {
        id: 'a1',
        value: 100,
        question: 'If A = TRUE and B = FALSE, what is A AND NOT B?',
        answer: 'TRUE',
        completed: false
      },
      {
        id: 'a2',
        value: 200,
        question: 'Convert 101101₂ to decimal.',
        answer: '45',
        completed: false
      },
      {
        id: 'a3',
        value: 300,
        question: 'You have the list [3, 8, 2, 9, 4]. Using linear search, how many elements must you check to find 9?',
        answer: '4',
        completed: false
      },
      {
        id: 'a4',
        value: 400,
        question: 'Three boxes are labelled APPLES, ORANGES, and APPLES + ORANGES. Every label is incorrect. You may take one fruit from one box without looking inside. Which box should you pick from to determine all three boxes?',
        answer: 'Pick from the box labelled APPLES + ORANGES. Since its label is wrong, it must contain only apples or only oranges.',
        completed: false
      },
      {
        id: 'a5',
        value: 500,
        question: 'You have 8 identical-looking balls. Exactly one is heavier. You have a balance scale and may use it only twice. How can you guarantee finding the heavier ball?',
        answer: 'Weigh 3 vs 3. If equal, compare the remaining 2. If unequal, take the heavier group of 3 and weigh 2 of them; if equal, the third is heavier.',
        completed: false
      }
    ]
  },
  {
    id: 'systems',
    title: 'Computer Systems',
    questions: [
      {
        id: 's1',
        value: 100,
        question: 'Which component performs most of the calculations and instructions required by a computer?\n\nA) RAM\nB) CPU\nC) SSD\nD) Monitor',
        answer: 'B — CPU',
        completed: false
      },
      {
        id: 's2',
        value: 200,
        question: 'What is the main difference between RAM and secondary storage?',
        answer: 'RAM is volatile working memory; secondary storage is non-volatile and stores data long-term.',
        completed: false
      },
      {
        id: 's3',
        value: 300,
        question: 'A CPU has a clock speed of 3 GHz. Approximately how many clock cycles occur every second?',
        answer: '3 billion cycles per second.',
        completed: false
      },
      {
        id: 's4',
        value: 400,
        question: 'A computer is running several programs simultaneously. Explain how an operating system can give each program the impression that it has continuous access to the CPU, even though a single CPU core can execute only one instruction stream at a time.',
        answer: 'The OS rapidly switches between processes using scheduling/time slicing, giving each a small amount of CPU time.',
        completed: false
      },
      {
        id: 's5',
        value: 500,
        question: 'A computer has 8 GB RAM. A 4 GB program is launched while several other programs are already running. Why does having 8 GB RAM not necessarily mean the 4 GB program will have enough memory available?',
        answer: 'The OS and other programs consume RAM; if physical RAM is insufficient, virtual memory/page files may be used, which are slower.',
        completed: false
      }
    ]
  },
  {
    id: 'vb_forensics',
    title: 'VB & Digital Forensics',
    questions: [
      {
        id: 'v1',
        value: 100,
        question: 'In Visual Basic, what will this code display?\n\nDim x As Integer = 5\nDim y As Integer = 3\nConsole.WriteLine(x + y * 2)',
        answer: '11',
        completed: false
      },
      {
        id: 'v2',
        value: 200,
        question: 'What will this Visual Basic code output?\n\nDim total As Integer = 0\nFor i As Integer = 1 To 5\n    If i Mod 2 = 0 Then\n        total += i\n    End If\nNext\nConsole.WriteLine(total)',
        answer: '6',
        completed: false
      },
      {
        id: 'v3',
        value: 300,
        question: 'What does ASCII primarily provide?\n\nA) A way to compress images\nB) A standard representation of characters using numerical values\nC) A method for encrypting passwords\nD) A network routing protocol',
        answer: 'B — A standard representation of characters using numerical values',
        completed: false
      },
      {
        id: 'v4',
        value: 400,
        question: 'You discover the message KHOOR. You are told it was encrypted using a Caesar cipher with a shift of 3. What is the original message?',
        answer: 'HELLO',
        completed: false
      },
      {
        id: 'v5',
        value: 500,
        question: 'You discover a QR code containing: 01001011 01000101 01011001. Convert the binary to ASCII. You then receive: WKH NHB LV LQ WKH LPDJH, encrypted with a Caesar shift of 3. What is the final message?',
        answer: 'KEY, followed by decoding the second message to: THE KEY IS IN THE IMAGE.',
        completed: false
      }
    ]
  }
];

export const initialTeams = [
  { id: 't1', name: 'LGS 55 Main Team B', score: 0 },
  { id: 't2', name: 'Sage Team A', score: 0 },
  { id: 't3', name: 'ISL RR Team C', score: 0 },
  { id: 't4', name: 'LGS Gulberg Team A', score: 0 },
];

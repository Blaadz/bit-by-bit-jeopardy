export const initialCategories = [
  {
    id: 'cat-1',
    title: 'Programming',
    questions: [
      {
        id: 'prog-100',
        value: 100,
        timer: 15,
        question: `What will the following Python code output?

x = 5
y = 3 
print(x + (y * 2))`,
        answer: '11',
        completed: false
      },
      {
        id: 'prog-200',
        value: 200,
        timer: 30,
        question: `What will this program output?

Dim total As Integer = 0
For i As Integer = 1 To 5
    If i Mod 2 = 0 Then
        total += i
    End If
Next
Console.WriteLine(total)`,
        answer: '6',
        completed: false
      },
      {
        id: 'prog-300',
        value: 300,
        timer: 45,
        question: `What will the following Python code output?

numbers = [4, 7, 2, 9, 1]
numbers.sort()
print(numbers[1] + numbers[-1])`,
        answer: '11 (2 + 9)',
        completed: false
      },
      {
        id: 'prog-400',
        value: 400,
        timer: 60,
        question: `A programmer wants this function to return the largest number in a list, but it does not always work:

def largest(numbers):
    largest = 0
    for n in numbers:
        if n > largest:
            largest = n
    return largest

What is the problem, and how could you fix it?`,
        answer: 'It fails when all numbers are negative. Initialize largest using the first list element (e.g. largest = numbers[0]).',
        completed: false
      },
      {
        id: 'prog-500',
        value: 500,
        timer: 75,
        question: 'A program receives a list containing 100,000 numbers. You need to determine whether any two numbers add up to 1000. Comparing every number with every other number is slow. Describe a faster approach without writing the code.',
        answer: 'Use a set of previously seen numbers and check whether 1000 − x has already appeared. Approximately O(n) time.',
        completed: false
      }
    ]
  },
  {
    id: 'cat-2',
    title: 'Cybersecurity',
    questions: [
      {
        id: 'sec-100',
        value: 100,
        timer: 15,
        question: `What is phishing?

A) A method of encrypting files
B) A technique for tricking users into revealing information
C) A method of compressing data
D) A type of computer hardware`,
        answer: 'B — A technique for tricking users into revealing information',
        completed: false
      },
      {
        id: 'sec-200',
        value: 200,
        timer: 30,
        question: "An attacker obtains a user's password from a leaked database and uses it to log into the user's account. What type of attack is this?",
        answer: 'Credential stuffing / use of stolen credentials.',
        completed: false
      },
      {
        id: 'sec-300',
        value: 300,
        timer: 45,
        question: 'Alice wants to send Bob a secret message. Bob has a public key and a private key. Which key should Alice use to encrypt the message if only Bob should be able to decrypt it?',
        answer: "Bob's public key.",
        completed: false
      },
      {
        id: 'sec-400',
        value: 400,
        timer: 60,
        question: `A website allows users to enter their name. A user enters:
<script>alert("Hacked!")</script>

When another user views the page, the browser executes the script. What vulnerability has occurred, and why?`,
        answer: 'Cross-Site Scripting (XSS), because user-controlled input was treated as executable HTML/JavaScript.',
        completed: false
      },
      {
        id: 'sec-500',
        value: 500,
        timer: 75,
        question: `You receive an email saying: “URGENT — Your school account will be permanently deleted TODAY. Click here immediately to verify your password.” The email contains the school logo.

Give TWO reasons why you should be suspicious.`,
        answer: 'Any two: urgency/threatening language, suspicious/mismatched domain, request for a password through a link, unexpected request, or untrusted link. A logo alone does not prove authenticity.',
        completed: false
      }
    ]
  },
  {
    id: 'cat-3',
    title: 'Networking',
    questions: [
      {
        id: 'net-100',
        value: 100,
        timer: 15,
        question: `Which device is primarily responsible for forwarding packets between different networks?

A) Switch
B) Router
C) Monitor
D) Keyboard`,
        answer: 'B — Router',
        completed: false
      },
      {
        id: 'net-200',
        value: 200,
        timer: 30,
        question: `Which of the following is a private IPv4 address?

A) 8.8.8.8
B) 172.20.5.4
C) 1.1.1.1
D) 185.10.20.1`,
        answer: 'B — 172.20.5.4',
        completed: false
      },
      {
        id: 'net-300',
        value: 300,
        timer: 45,
        question: 'A browser connects to a website using HTTPS. What is the main purpose of HTTPS compared with ordinary HTTP?',
        answer: 'It provides encrypted and authenticated communication using TLS.',
        completed: false
      },
      {
        id: 'net-400',
        value: 400,
        timer: 60,
        question: 'A computer can access 192.168.1.1 but cannot access google.com. Its internet connection appears active. What networking component would you investigate first, and why?',
        answer: 'DNS, because the computer can reach an IP address but appears unable to resolve a domain name.',
        completed: false
      },
      {
        id: 'net-500',
        value: 500,
        timer: 75,
        question: 'You are given the network 192.168.1.0/24. You need to divide it into four equal-sized subnets. What subnet prefix should you use?',
        answer: '/26. The four networks are 192.168.1.0/26, .64/26, .128/26 and .192/26.',
        completed: false
      }
    ]
  },
  {
    id: 'cat-4',
    title: 'Algorithms & Logic',
    questions: [
      {
        id: 'algo-100',
        value: 100,
        timer: 15,
        question: 'If A = TRUE and B = FALSE, what is A AND NOT B?',
        answer: 'TRUE',
        completed: false
      },
      {
        id: 'algo-200',
        value: 200,
        timer: 30,
        question: 'Convert 101101₂ to decimal.',
        answer: '45',
        completed: false
      },
      {
        id: 'algo-300',
        value: 300,
        timer: 45,
        question: 'You have the list [3, 8, 2, 9, 4]. Using linear search, how many elements must you check to find 9?',
        answer: '4',
        completed: false
      },
      {
        id: 'algo-400',
        value: 400,
        timer: 60,
        question: 'Three boxes are labelled APPLES, ORANGES, and APPLES + ORANGES. Every label is incorrect. You may take one fruit from one box without looking inside. Which box should you pick from to determine all three boxes?',
        answer: 'Pick from the box labelled APPLES + ORANGES. Since its label is wrong, it must contain only apples or only oranges.',
        completed: false
      },
      {
        id: 'algo-500',
        value: 500,
        timer: 75,
        question: 'You have 8 identical-looking balls. Exactly one is heavier. You have a balance scale and may use it only twice. How can you guarantee finding the heavier ball?',
        answer: 'Weigh 3 vs 3. If equal, compare the remaining 2. If unequal, take the heavier group of 3 and weigh 2 of them; if equal, the third is heavier.',
        completed: false
      }
    ]
  },
  {
    id: 'cat-5',
    title: 'Computer Systems',
    questions: [
      {
        id: 'sys-100',
        value: 100,
        timer: 15,
        question: `Which component performs most of the calculations and instructions required by a computer?

A) RAM
B) CPU
C) SSD
D) Monitor`,
        answer: 'B — CPU',
        completed: false
      },
      {
        id: 'sys-200',
        value: 200,
        timer: 30,
        question: 'What is the main difference between RAM and secondary storage?',
        answer: 'RAM is volatile working memory; secondary storage is non-volatile and stores data long-term.',
        completed: false
      },
      {
        id: 'sys-300',
        value: 300,
        timer: 45,
        question: 'A CPU has a clock speed of 3 GHz. Approximately how many clock cycles occur every second?',
        answer: '3 billion cycles per second.',
        completed: false
      },
      {
        id: 'sys-400',
        value: 400,
        timer: 60,
        question: 'A computer is running several programs simultaneously. Explain how an operating system can give each program the impression that it has continuous access to the CPU, even though a single CPU core can execute only one instruction stream at a time.',
        answer: 'The OS rapidly switches between processes using scheduling/time slicing, giving each a small amount of CPU time.',
        completed: false
      },
      {
        id: 'sys-500',
        value: 500,
        timer: 75,
        question: 'A computer has 8 GB RAM. A 4 GB program is launched while several other programs are already running. Why does having 8 GB RAM not necessarily mean the 4 GB program will have enough memory available?',
        answer: 'The OS and other programs consume RAM; if physical RAM is insufficient, virtual memory/page files may be used, which are slower.',
        completed: false
      }
    ]
  },
  {
    id: 'cat-6',
    title: 'VB & Digital Forensics',
    questions: [
      {
        id: 'forensics-100',
        value: 100,
        timer: 15,
        question: `In Visual Basic, what will this code display?

Dim x As Integer = 5
Dim y As Integer = 3
Console.WriteLine(x + y * 2)`,
        answer: '11',
        completed: false
      },
      {
        id: 'forensics-200',
        value: 200,
        timer: 30,
        question: `What will this Visual Basic code output?

Dim total As Integer = 0
For i As Integer = 1 To 5
    If i Mod 2 = 0 Then
        total += i
    End If
Next
Console.WriteLine(total)`,
        answer: '6',
        completed: false
      },
      {
        id: 'forensics-300',
        value: 300,
        timer: 45,
        question: `What does ASCII primarily provide?

A) A way to compress images
B) A standard representation of characters using numerical values
C) A method for encrypting passwords
D) A network routing protocol`,
        answer: 'B — A standard representation of characters using numerical values',
        completed: false
      },
      {
        id: 'forensics-400',
        value: 400,
        timer: 60,
        question: 'You discover the message KHOOR. You are told it was encrypted using a Caesar cipher with a shift of 3. What is the original message?',
        answer: 'HELLO',
        completed: false
      },
      {
        id: 'forensics-500',
        value: 500,
        timer: 75,
        question: 'You discover a QR code containing: 01001011 01000101 01011001. Convert the binary to ASCII. You then receive: WKH NHB LV LQ WKH LPDJH, encrypted with a Caesar shift of 3. What is the final message?',
        answer: 'KEY, followed by decoding the second message to: THE KEY IS IN THE IMAGE.',
        completed: false
      }
    ]
  }
];

export const initialTeams = [
  { id: 'team-1', name: 'LGS 55 Main Team B', score: 0 },
  { id: 'team-2', name: 'Sage Team A', score: 0 },
  { id: 'team-3', name: 'ISL RR Team C', score: 0 },
  { id: 'team-4', name: 'LGS Gulberg Team A', score: 0 }
];

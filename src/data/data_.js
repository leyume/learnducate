// Tutors

const tutors = [
  {
    id: 1,
    email: "doe@example.com",
    firstname: "John",
    lastname: "Doe",
    phone: "123-456-7890",
  },
  {
    id: 2,
    email: "smith@example.com",
    firstname: "Jane",
    lastname: "Smith",
    phone: "987-654-3210",
  },
  {
    id: 3,
    email: "johnson@example.com",
    firstname: "Mark",
    lastname: "Johnson",
    phone: "555-123-4567",
  },
  {
    id: 4,
    email: "wilson@example.com",
    firstname: "Sarah",
    lastname: "Wilson",
    phone: "789-456-1230",
  },
];

const tutorNames = tutors.map((tutor) => `${tutor.firstname} ${tutor.lastname}`);
console.log(tutorNames);

// students

const students = [
  {
    id: 1,
    email: "adeola@example.com",
    firstname: "Adeola",
    lastname: "Adeyemi",
    phone: "08012345678",
  },
  {
    id: 2,
    email: "ayoade@example.com",
    firstname: "Ayoade",
    lastname: "Okeke",
    phone: "08098765432",
  },
  {
    id: 3,
    email: "chidera@example.com",
    firstname: "Chidera",
    lastname: "Okoro",
    phone: "08055556666",
  },
  {
    id: 4,
    email: "damilola@example.com",
    firstname: "Damilola",
    lastname: "Balogun",
    phone: "08087654321",
  },
  {
    id: 5,
    email: "emeka@example.com",
    firstname: "Emeka",
    lastname: "Obi",
    phone: "08011112222",
  },
  {
    id: 6,
    email: "fatima@example.com",
    firstname: "Fatima",
    lastname: "Abubakar",
    phone: "08044445555",
  },
  {
    id: 7,
    email: "gabriel@example.com",
    firstname: "Gabriel",
    lastname: "Okafor",
    phone: "08077778888",
  },
  {
    id: 8,
    email: "hassan@example.com",
    firstname: "Hassan",
    lastname: "Mohammed",
    phone: "08099990000",
  },
  {
    id: 9,
    email: "ifeoma@example.com",
    firstname: "Ifeoma",
    lastname: "Ugwu",
    phone: "08033334444",
  },
  {
    id: 10,
    email: "jide@example.com",
    firstname: "Jide",
    lastname: "Ogunleye",
    phone: "08066667777",
  },
  {
    id: 11,
    email: "kemi@example.com",
    firstname: "Kemi",
    lastname: "Adeleke",
    phone: "08022223333",
  },
  {
    id: 12,
    email: "lola@example.com",
    firstname: "Lola",
    lastname: "Oladipo",
    phone: "08012343210",
  },
  {
    id: 13,
    email: "musa@example.com",
    firstname: "Musa",
    lastname: "Bello",
    phone: "08056787654",
  },
  {
    id: 14,
    email: "nkechi@example.com",
    firstname: "Nkechi",
    lastname: "Eze",
    phone: "08090807060",
  },
  {
    id: 15,
    email: "oluwatobi@example.com",
    firstname: "Oluwatobi",
    lastname: "Adewale",
    phone: "08060504030",
  },
  {
    id: 16,
    email: "patience@example.com",
    firstname: "Patience",
    lastname: "Okafor",
    phone: "08030201000",
  },
  {
    id: 17,
    email: "quadri@example.com",
    firstname: "Quadri",
    lastname: "Adeyemi",
    phone: "08011112222",
  },
  {
    id: 18,
    email: "rachael@example.com",
    firstname: "Rachael",
    lastname: "Okonkwo",
    phone: "08050506070",
  },
  {
    id: 19,
    email: "samuel@example.com",
    firstname: "Samuel",
    lastname: "Ojo",
    phone: "08070707070",
  },
  {
    id: 20,
    email: "temi@example.com",
    firstname: "Temi",
    lastname: "Adams",
    phone: "08090909090",
  },
];

const studentNames = students.map((student) => `${student.firstname} ${student.lastname}`);
console.log(studentNames);

// Courses

const courses = [
  {
    id: 1,
    name: "JavaScript Fundamentals",
    content: ["Introduction", "Chapter 1", "Chapter 2", "Chapter 3", "Chapter 4", "Chapter 5"],
    image: "javascript.png",
    tutor_id: 1,
  },
  {
    id: 2,
    name: "Python for Beginners",
    content: ["Introduction", "Chapter 1", "Chapter 2", "Chapter 3", "Chapter 4", "Chapter 5"],
    image: "python.png",
    tutor_id: 2,
  },
  {
    id: 3,
    name: "HTML & CSS Basics",
    content: ["Introduction", "Chapter 1", "Chapter 2", "Chapter 3", "Chapter 4", "Chapter 5"],
    image: "html-css.png",
    tutor_id: 3,
  },
  {
    id: 4,
    name: "Java Programming",
    content: ["Introduction", "Chapter 1", "Chapter 2", "Chapter 3", "Chapter 4", "Chapter 5"],
    image: "java.png",
    tutor_id: 4,
  },
  {
    id: 5,
    name: "C# Programming",
    content: ["Introduction", "Chapter 1", "Chapter 2", "Chapter 3", "Chapter 4", "Chapter 5"],
    image: "csharp.png",
    tutor_id: 5,
  },
];

console.log(courses);

// const courses1 = [
//   {
//     id: 1,
//     name: "JavaScript Fundamentals",
//     content: [
//       {
//         title: "Introduction",
//         description:
//           "Book Title: "JavaScript Fundamentals"

//           Chapter 1: Introduction to JavaScript
//           Chapter 2: Variables and Data Types in JavaScript
//           Chapter 3: Operators and Expressions in JavaScript
//           Chapter 4: Control Flow and Loops in JavaScript
//           Chapter 5: Functions in JavaScript
//           Chapter 6: Arrays and Objects in JavaScript
//           Chapter 7: Manipulating the Document Object Model (DOM)
//           Chapter 8: Events and Event Handling in JavaScript
//           Chapter 9: Error Handling and Debugging in JavaScript
//           Chapter 10: Working with Forms and User Input in JavaScript
//           Chapter 11: AJAX and Fetch API in JavaScript
//           Chapter 12: Introduction to Object-Oriented Programming in JavaScript
//           Chapter 13: Working with JSON Data in JavaScript
//           Chapter 14: Asynchronous Programming and Promises in JavaScript
//           Chapter 15: Modern JavaScript Tools and Libraries

//           Introduction:

//           JavaScript Fundamentals is a comprehensive guide that aims to provide readers with a solid foundation in the fundamental concepts and techniques of JavaScript programming. Whether you're a beginner looking to learn JavaScript from scratch or an experienced developer seeking to deepen your understanding, this book is designed to cater to your needs.

//           With the growing popularity of JavaScript as the language of the web, it has become essential for developers to have a strong grasp of its fundamentals. This book starts by introducing you to the basics of JavaScript, including variables, data types, and operators. You will learn how to write and execute your first JavaScript code, gaining confidence as you progress through the chapters.

//           As you delve deeper into the book, you will explore more advanced topics such as control flow, functions, arrays, and objects. You will discover how to manipulate the Document Object Model (DOM) to create dynamic web pages and enhance user interactions. The book also covers error handling, debugging techniques, and working with forms and user input.

//           Furthermore, "JavaScript Fundamentals" delves into essential concepts of modern JavaScript development, such as AJAX and the Fetch API for making asynchronous requests. You will gain a solid understanding of object-oriented programming (OOP) principles and how they can be applied in JavaScript.

//           The book also explores working with JSON data, asynchronous programming using Promises, and introduces you to some of the popular tools and libraries that make JavaScript development more efficient and enjoyable.

//           Each chapter of this book is carefully crafted to provide clear explanations, practical examples, and hands-on exercises to reinforce your learning. By the end of the book, you will have a strong foundation in JavaScript and be well-equipped to tackle more advanced JavaScript projects.

//           So, whether you're looking to build interactive web applications, create browser extensions, or dive into frameworks like React or Node.js, "JavaScript Fundamentals" is your essential companion on the journey to becoming a proficient JavaScript developer. Let's embark on this exciting adventure together!

//           [Chapter 1]

//           Chapter 1: Introduction to JavaScript

//           In this chapter, we will dive into the world of JavaScript and get acquainted with its fundamental concepts. JavaScript is a high-level programming language primarily used for developing web applications. It allows you to add interactivity and dynamic functionality to your web pages.

//           To start our journey, we'll first explore the origins of JavaScript and how it has evolved over the years. We'll then discuss the various ways to include JavaScript code in an HTML document and explore the basic syntax of the language.

//           Next, we'll delve into variables, which are used to store data in JavaScript. We'll learn about different data types, such as numbers, strings, booleans, and more. You'll discover how to declare variables, assign values to them, and perform basic operations.

//           Control flow is an essential aspect of any programming language, and JavaScript is no exception. We'll cover conditional statements like if-else and switch, as well as looping constructs like for, while, and do-while. These control structures allow you to execute different blocks of code based on certain conditions or repeat a set of instructions multiple times.

//           JavaScript functions play a crucial role in organizing and reusing code. We'll explore how to define and call functions, pass arguments, and return values. Understanding functions is key to writing modular and maintainable JavaScript code.

//           Lastly, we'll touch upon the importance of comments, which allow you to add explanatory notes to your code. Comments are essential for making your code more readable and facilitating collaboration with other developers.

//           Throughout the chapter, we'll provide plenty of examples and exercises to help solidify your understanding of the concepts discussed. By the end of this chapter, you will have a solid grasp of the fundamentals of JavaScript and be ready to explore more advanced topics in the subsequent chapters. Let's dive in!",
//       },
//       {
//         title: "Chapter 1: Variables and Data Types",
//         description:
//           "In Chapter 1, students dive into variables and data types in JavaScript. They learn about different types of variables, including strings, numbers, booleans, arrays, and objects. Students also explore data manipulation, type coercion, and the concept of scope in JavaScript.",
//       },
//       {
//         title: "Chapter 2: Variables and Data Types in JavaScript",
//         description:
//           "In this chapter, we will delve deeper into the world of variables and data types in JavaScript. Variables are essential for storing and manipulating data in a program. Understanding how to work with different data types is crucial for writing effective JavaScript code.

//           We'll start by revisiting variables and their declaration. JavaScript has dynamic typing, which means you don't need to explicitly specify the data type of a variable. We'll explore how variables are declared using the var, let, and const keywords, and discuss their scope and hoisting.

//           Next, we'll take a closer look at the different data types available in JavaScript. These include primitive types like numbers, strings, booleans, null, and undefined, as well as more complex types like objects and arrays. We'll cover how to create variables of each data type and perform operations specific to those types.

//           JavaScript provides powerful operators for manipulating variables and performing computations. We'll explore arithmetic operators, string concatenation, comparison operators, logical operators, and more. Understanding these operators is crucial for performing calculations and making logical decisions in your code.

//           Type coercion is an important concept to grasp when working with different data types in JavaScript. We'll discuss implicit and explicit type coercion and understand how JavaScript handles automatic type conversions.

//           Additionally, we'll touch upon some advanced topics related to variables and data types, such as template literals, which allow for more flexible and readable string interpolation, and the concept of truthy and falsy values in JavaScript.

//           Throughout the chapter, we'll provide examples and exercises to help solidify your understanding of variables and data types. By the end of this chapter, you will have a thorough understanding of how to declare variables, work with different data types, and perform operations on them. Let's continue our journey into JavaScript fundamentals!",
//       },
//       {
//         title: "Chapter 3: Operators and Expressions in JavaScript",
//         description:
//           "In this chapter, we will explore operators and expressions in JavaScript. Operators allow us to perform various operations on variables and values, while expressions combine variables, values, and operators to produce a result.

//           We'll start by discussing arithmetic operators, which include addition (+), subtraction (-), multiplication (*), division (/), and modulus (%). These operators are used to perform mathematical calculations in JavaScript.

//           Next, we'll dive into assignment operators, such as =, +=, -=, *=, and /=. Assignment operators are used to assign values to variables and perform arithmetic operations simultaneously.

//           Comparison operators, such as ==, ===, !=, !==, >, <, >=, and <=, are vital for making comparisons between variables and values. We'll explore how these operators evaluate expressions and return Boolean values.

//           Logical operators, including && (logical AND), || (logical OR), and ! (logical NOT), allow us to combine multiple conditions and make logical decisions in our code.

//           Additionally, we'll cover the ternary operator (? :), which provides a concise way to write conditional statements in a single line.

//           JavaScript also supports various other operators, such as the typeof operator to determine the data type of a value, the increment (++) and decrement (--) operators to modify the value of a variable, and the comma operator to separate multiple expressions.

//           Expressions in JavaScript combine variables, values, and operators to produce a single value. We'll explore different types of expressions, including arithmetic expressions, comparison expressions, logical expressions, and string expressions.

//           Understanding operators and expressions is crucial for performing calculations, making decisions, and manipulating data in JavaScript. Throughout the chapter, we'll provide examples and exercises to reinforce your understanding of these concepts.

//           By the end of this chapter, you will have a solid grasp of the various operators available in JavaScript and how to use them in expressions to perform a wide range of operations. Let's continue our exploration of JavaScript fundamentals!

//           ",
//       },
//       {
//         title: "Chapter 4: Control Flow and Loops in JavaScript",
//         description:
//           "In this chapter, we will explore control flow and loops in JavaScript. Control flow allows us to dictate the order in which our code is executed, while loops provide a way to repeat a set of instructions multiple times.

//           We'll start by discussing conditional statements, such as the if statement and the if-else statement. Conditional statements allow us to execute different blocks of code based on certain conditions. We'll explore how to write conditional statements, combine them using logical operators, and handle multiple conditions using else if.

//           Next, we'll dive into the switch statement, which provides an alternative way to handle multiple conditions. The switch statement allows us to compare a value against multiple cases and execute the code block associated with the matching case.

//           Loops are essential when we need to repeat a set of instructions multiple times. We'll cover three types of loops in JavaScript: the for loop, the while loop, and the do-while loop. We'll discuss how to write loops, control their execution using loop control statements like break and continue, and understand the differences between the three loop types.

//           Iterating over arrays and objects is a common task in JavaScript. We'll explore how to use loops to iterate over arrays and access each element individually. We'll also discuss object iteration using for...in and for...of loops.

//           Additionally, we'll touch upon the concept of short-circuit evaluation, which allows us to write concise conditional expressions using logical operators.

//           Understanding control flow and loops is crucial for creating dynamic and interactive JavaScript programs. Throughout the chapter, we'll provide examples and exercises to reinforce your understanding of these concepts.

//           By the end of this chapter, you will have a solid grasp of control flow and loops in JavaScript, enabling you to make decisions and repeat instructions efficiently in your code. Let's continue our journey through JavaScript fundamentals!

//           ",
//       },
//       {
//         title: "Chapter 5: Functions in JavaScript",
//         description:"In this chapter, we will dive into the world of functions in JavaScript. Functions are reusable blocks of code that perform a specific task or calculate a value. They play a crucial role in organizing and structuring our code.

//           We'll start by understanding the fundamentals of functions, including function declaration and function expressions. We'll explore how to define functions, provide arguments, and return values. Understanding these basics will set a solid foundation for creating more complex functions.

//           Next, we'll discuss function parameters and how they allow us to pass data into functions. We'll explore different parameter types, including default parameters and rest parameters, and understand how they enhance the flexibility and versatility of our functions.

//           JavaScript also supports anonymous functions, which are functions without a specific name. We'll explore the use of anonymous functions, including their significance in callback functions and event handling.

//           One of the powerful features of JavaScript functions is their ability to be nested within other functions. We'll discuss nested functions, also known as inner functions, and understand how they can access variables from their parent functions.

//           We'll also cover function scope, including global scope and local scope. Understanding scope is crucial for managing variables and ensuring they are accessible where they are needed.

//           As we progress, we'll explore the concept of function hoisting and how it affects the order in which functions can be called in our code.

//           Moreover, we'll discuss the use of function expressions to create higher-order functions. Higher-order functions can accept other functions as arguments or return functions as their results, providing a powerful way to manipulate and transform data.

//           Throughout the chapter, we'll provide examples and exercises to reinforce your understanding of functions. By the end of this chapter, you will have a solid grasp of JavaScript functions, enabling you to create modular, reusable, and efficient code. Let's continue our exploration of JavaScript fundamentals with the power of functions!
//           ",
//       },
//     ],
//     image: "javascript.png",
//     tutor_id: 1,
//   },
//   {
//     id: 2,
//     name: "Python for Beginners",
//     content: [
//       {
//         title: "Introduction",
//         description:
//           "The Introduction section of the Python for Beginners course provides an overview of Python and its applications. Students will learn about Python's syntax, data types, variables, and control flow structures. They will also explore the Python ecosystem, including popular libraries and frameworks.",
//       },
//       {
//         title: "Chapter 1: Core Python Concepts",
//         description:
//           "Chapter 1 focuses on core Python concepts, including variables, data types, operators, and basic input/output. Students will learn how to write Python scripts, perform arithmetic operations, manipulate strings, and work with lists and dictionaries. This chapter provides a solid foundation for further exploration of Python programming.",
//       },
//       {
//         title: "Chapter 2: Control Flow and Functions",
//         description:
//           "Chapter 2 delves into control flow structures and functions in Python. Students will learn about if-else statements, loops, and logical operators. They will also explore function definition, function arguments, return values, and recursion. This chapter equips students with essential programming skills in Python.",
//       },
//       {
//         title: "Chapter 3: Data Structures and File Handling",
//         description:
//           "Chapter 3 focuses on data structures and file handling in Python. Students will learn about tuples, sets, and advanced data structures such as stacks, queues, and linked lists. They will also explore file handling operations, including reading from and writing to files. This chapter provides practical skills for working with data in Python.",
//       },
//       {
//         title: "Chapter 4: Object-Oriented Programming",
//         description:
//           "Chapter 4 introduces object-oriented programming (OOP) in Python. Students will learn about classes, objects, inheritance, and polymorphism. They will explore OOP concepts such as encapsulation, abstraction, and inheritance hierarchies. This chapter provides a solid understanding of OOP principles in Python.",
//       },
//       {
//         title: "Chapter 5: Modules, Packages, and Beyond",
//         description:
//           "In Chapter 5, students dive into modules, packages, and advanced topics in Python. They will learn how to organize code into modules and packages, explore exception handling, work with external libraries, and delve into advanced topics such as decorators and generators. This chapter expands students' Python knowledge and prepares them for more advanced projects.",
//       },
//     ],
//     image: "python.png",
//     tutor_id: 2,
//   },
//   {
//     id: 3,
//     name: "HTML & CSS Basics",
//     content: [
//       {
//         title: "Introduction",
//         description:
//           "The Introduction section of the HTML & CSS Basics course provides an overview of HTML (Hypertext Markup Language) and CSS (Cascading Style Sheets). Students will learn about the role of HTML and CSS in web development, understand the basic structure of HTML documents, and explore CSS selectors and styling properties.",
//       },
//       {
//         title: "Chapter 1: HTML Fundamentals",
//         description:
//           "Chapter 1 focuses on HTML fundamentals. Students will learn about HTML tags, attributes, semantic elements, and document structure. They will explore essential HTML elements such as headings, paragraphs, lists, links, images, and tables. This chapter provides a solid foundation for creating well-structured HTML documents.",
//       },
//       {
//         title: "Chapter 2: CSS Styling and Layout",
//         description:
//           "Chapter 2 delves into CSS styling and layout. Students will learn how to apply CSS styles to HTML elements, including color, typography, margins, padding, and positioning. They will also explore CSS layout techniques, including float, flexbox, and grid. This chapter equips students with essential CSS skills for designing visually appealing web pages.",
//       },
//       {
//         title: "Chapter 3: Responsive Web Design and Media Queries",
//         description:
//           "Chapter 3 focuses on responsive web design and media queries. Students will learn how to create responsive layouts that adapt to different screen sizes and devices. They will explore CSS media queries, breakpoints, and responsive design patterns. This chapter ensures that students can create websites that are optimized for various devices.",
//       },
//       {
//         title: "Chapter 4: CSS Transitions and Animations",
//         description:
//           "Chapter 4 introduces CSS transitions and animations. Students will learn how to add interactive effects to web pages using CSS. They will explore CSS transitions, keyframe animations, and transform properties. Additionally, students will learn how to create smooth animations and engaging user experiences.",
//       },
//       {
//         title: "Chapter 5: CSS Frameworks and Advanced Topics",
//         description:
//           "In Chapter 5, students dive into CSS frameworks and advanced topics. They will learn how to leverage popular CSS frameworks such as Bootstrap and Tailwind CSS. Students will also explore advanced CSS techniques, including CSS preprocessors, custom properties, and best practices. This chapter prepares students for building professional-level websites.",
//       },
//     ],
//     image: "html-css.png",
//     tutor_id: 3,
//   },
//   {
//     id: 4,
//     name: "Java Programming",
//     content: [
//       {
//         title: "Introduction",
//         description:
//           "The Introduction section of the Java Programming course provides an overview of Java and its applications. Students will learn about the Java development environment, basic syntax, and the principles of object-oriented programming. They will also explore the various applications of Java, from desktop to mobile and web development.",
//       },
//       {
//         title: "Chapter 1: Java Basics",
//         description:
//           "Chapter 1 focuses on Java basics. Students will learn about variables, data types, operators, control flow structures, and input/output operations in Java. They will gain a solid foundation in writing Java programs, understanding flow control, and working with different data types.",
//       },
//       {
//         title: "Chapter 2: Object-Oriented Programming in Java",
//         description:
//           "Chapter 2 delves into object-oriented programming (OOP) in Java. Students will learn about classes, objects, inheritance, polymorphism, and abstraction. They will explore OOP concepts such as encapsulation, inheritance hierarchies, and interfaces. This chapter equips students with essential OOP skills in Java.",
//       },
//       {
//         title: "Chapter 3: Java Collections Framework",
//         description:
//           "Chapter 3 focuses on the Java Collections Framework. Students will learn about different types of collections, including lists, sets, and maps. They will explore collection operations, iteration, sorting, and searching. This chapter provides practical skills for working with data collections in Java.",
//       },
//       {
//         title: "Chapter 4: Exception Handling and File I/O",
//         description:
//           "Chapter 4 introduces exception handling and file input/output (I/O) operations in Java. Students will learn how to handle exceptions, catch and throw exceptions, and create custom exceptions. They will also explore file I/O operations, including reading from and writing to files. This chapter ensures error-free and efficient Java programs.",
//       },
//       {
//         title: "Chapter 5: GUI Programming with JavaFX",
//         description:
//           "In Chapter 5, students dive into GUI (Graphical User Interface) programming with JavaFX. They will learn how to create interactive and visually appealing desktop applications using JavaFX. Students will explore JavaFX controls, layouts, event handling, and styling. This chapter equips students with GUI programming skills in Java.",
//       },
//     ],
//     image: "java.png",
//     tutor_id: 4,
//   },
//   {
//     id: 5,
//     name: "React.js Essentials",
//     content: [
//       {
//         title: "Introduction",
//         description:
//           "The Introduction section of the React.js Essentials course provides an overview of React.js and its role in building modern web applications. Students will learn about React.js concepts such as components, JSX (JavaScript XML), and virtual DOM (Document Object Model). They will also explore the benefits of using React.js in web development.",
//       },
//       {
//         title: "Chapter 1: Getting Started with React Components",
//         description:
//           "Chapter 1 focuses on getting started with React components. Students will learn how to create functional and class components, pass props, and manage component state. They will also explore component lifecycle methods and the concept of JSX for rendering dynamic content.",
//       },
//       {
//         title: "Chapter 2: React Hooks and State Management",
//         description:
//           "Chapter 2 delves into React hooks and state management. Students will learn how to use hooks such as useState and useEffect to manage component state and handle side effects. They will also explore advanced state management techniques using libraries like Redux or React Context API.",
//       },
//       {
//         title: "Chapter 3: Routing and Navigation with React Router",
//         description:
//           "Chapter 3 focuses on routing and navigation in React.js using React Router. Students will learn how to create multiple pages and navigate between them using routes. They will explore route parameters, nested routes, and dynamic routing. This chapter equips students with essential skills for building single-page applications with React.js.",
//       },
//       {
//         title: "Chapter 4: Handling Forms and User Input",
//         description:
//           "Chapter 4 introduces handling forms and user input in React.js. Students will learn how to create controlled components, validate user input, and handle form submission. They will also explore form libraries and techniques for handling complex forms with multiple inputs.",
//       },
//       {
//         title: "Chapter 5: Advanced Topics and React Ecosystem",
//         description:
//           "In Chapter 5, students dive into advanced topics and the React ecosystem. They will explore concepts such as code splitting, lazy loading, server-side rendering (SSR), and testing React components. Additionally, students will learn about popular libraries and tools in the React.js ecosystem.",
//       },
//     ],
//     image: "react.png",
//     tutor_id: 5,
//   },
// ];

// // Get all course names in an array
// const courseNames = courses.map((course) => course.name);

// console.log(courseNames);

// // questions

// "Chapter 2: Variables and Data Types"

// const question1 = "Which keyword is used to declare a constant variable in JavaScript?";
// const options1 = [
//   { text: "1. const", isCorrect: true },
//   { text: "0. let", isCorrect: false },
//   { text: "0. var", isCorrect: false },
//   { text: "0. final", isCorrect: false }
// ];

// const question2 = "What is the data type of the value 'OpenAI' in JavaScript?";
// const options2 = [
//   { text: "0. Number", isCorrect: false },
//   { text: "0. Boolean", isCorrect: false },
//   { text: "0. Null", isCorrect: false },
//   { text: "1. String", isCorrect: true }
// ];

// "Chapter 3: Operators and Expressions"

// const question1 = "What will be the result of the expression 10 + '5' in JavaScript?";
// const options1 = [
//   { text: "0. 15", isCorrect: false },
//   { text: "0. '15'", isCorrect: false },
//   { text: "1. '105'", isCorrect: true },
//   { text: "0. NaN", isCorrect: false }
// ];

// const question2 = "Which operator is used for strict equality comparison in JavaScript?";
// const options2 = [
//   { text: "0. =", isCorrect: false },
//   { text: "0. ==", isCorrect: false },
//   { text: "1. ===", isCorrect: true },
//   { text: "0. =>", isCorrect: false }
// ];

// "Chapter 4: Control Flow and Loops"

// const question1 = "What is the syntax for the if-else statement in JavaScript?";
// const options1 = [
//   { text: "1. if (condition) { // code } else { // code }", isCorrect: true },
//   { text: "0. if (condition) { // code } else if (condition) { // code }", isCorrect: false },
//   { text: "0. if (condition) { // code } else { // code } if (condition) { // code }", isCorrect: false },
//   { text: "0. if (condition) { // code } if (condition) { // code } else { // code }", isCorrect: false }
// ];

// const question2 = "Which loop in JavaScript executes the code block at least once, even if the condition is initially false?";
// const options2 = [
//   { text: "1. do-while loop", isCorrect: true },
//   { text: "0. for loop", isCorrect: false },
//   { text: "0. while loop", isCorrect: false },
//   { text: "0. switch statement", isCorrect: false }
// ];

// "Chapter 5: Functions"

// const question1 = "What is the purpose of a return statement in a function?";
// const options1 = [
//   { text: "0. To stop the execution of the function", isCorrect: false },
//   { text: "1. To provide a value as the result of the function", isCorrect: true },
//   { text: "0. To define a new variable within the function", isCorrect: false },
//   { text: "0. To add a comment within the function", isCorrect: false }
// ];

// const question2 = "Which keyword is used to define a named function in JavaScript?";
// const options2 = [
//   { text: "0. function", isCorrect: false },
//   { text: "0. let", isCorrect: false },
//   { text: "0. const", isCorrect: false },
//   { text: "1. function functionName() {...}", isCorrect: true }
// ];

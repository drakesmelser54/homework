//javascript for HW problem #1
const data = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496"
      }
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets"
    }
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618"
      }
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains"
    }
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    address: {
      street: "Douglas Extension",
      suite: "Suite 847",
      city: "McKenziehaven",
      zipcode: "59590-4157",
      geo: {
        lat: "-68.6102",
        lng: "-47.0653"
      }
    },
    phone: "1-463-123-4447",
    website: "ramiro.info",
    company: {
      name: "Romaguera-Jacobson",
      catchPhrase: "Face to face bifurcated interface",
      bs: "e-enable strategic applications"
    }
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    address: {
      street: "Hoeger Mall",
      suite: "Apt. 692",
      city: "South Elvis",
      zipcode: "53919-4257",
      geo: {
        lat: "29.4572",
        lng: "-164.2990"
      }
    },
    phone: "493-170-9623 x156",
    website: "kale.biz",
    company: {
      name: "Robel-Corkery",
      catchPhrase: "Multi-tiered zero tolerance productivity",
      bs: "transition cutting-edge web services"
    }
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    address: {
      street: "Skiles Walks",
      suite: "Suite 351",
      city: "Roscoeview",
      zipcode: "33263",
      geo: {
        lat: "-31.8129",
        lng: "62.5342"
      }
    },
    phone: "(254)954-1289",
    website: "demarco.info",
    company: {
      name: "Keebler LLC",
      catchPhrase: "User-centric fault-tolerant solution",
      bs: "revolutionize end-to-end systems"
    }
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    address: {
      street: "Norberto Crossing",
      suite: "Apt. 950",
      city: "South Christy",
      zipcode: "23505-1337",
      geo: {
        lat: "-71.4197",
        lng: "71.7478"
      }
    },
    phone: "1-477-935-8478 x6430",
    website: "ola.org",
    company: {
      name: "Considine-Lockman",
      catchPhrase: "Synchronised bottom-line interface",
      bs: "e-enable innovative applications"
    }
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
    address: {
      street: "Rex Trail",
      suite: "Suite 280",
      city: "Howemouth",
      zipcode: "58804-1099",
      geo: {
        lat: "24.8918",
        lng: "21.8984"
      }
    },
    phone: "210.067.6132",
    website: "elvis.io",
    company: {
      name: "Johns Group",
      catchPhrase: "Configurable multimedia task-force",
      bs: "generate enterprise e-tailers"
    }
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
    address: {
      street: "Ellsworth Summit",
      suite: "Suite 729",
      city: "Aliyaview",
      zipcode: "45169",
      geo: {
        lat: "-14.3990",
        lng: "-120.7677"
      }
    },
    phone: "586.493.6943 x140",
    website: "jacynthe.com",
    company: {
      name: "Abernathy Group",
      catchPhrase: "Implemented secondary concept",
      bs: "e-enable extensible e-tailers"
    }
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
    address: {
      street: "Dayna Park",
      suite: "Suite 449",
      city: "Bartholomebury",
      zipcode: "76495-3109",
      geo: {
        lat: "24.6463",
        lng: "-168.8889"
      }
    },
    phone: "(775)976-6794 x41206",
    website: "conrad.com",
    company: {
      name: "Yost and Sons",
      catchPhrase: "Switchable contextually-based project",
      bs: "aggregate real-time technologies"
    }
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    address: {
      street: "Kattie Turnpike",
      suite: "Suite 198",
      city: "Lebsackbury",
      zipcode: "31428-2261",
      geo: {
        lat: "-38.2386",
        lng: "57.2232"
      }
    },
    phone: "024-648-3804",
    website: "ambrose.net",
    company: {
      name: "Hoeger LLC",
      catchPhrase: "Centralized empowering task-force",
      bs: "target end-to-end models"
    }
  }
];

// create and print a list of phone numbers
const phoneNumbers = data.map(user => user.phone);
console.log(phoneNumbers);

// create and print a list of website and email pairs (pair them in a string, array, or object)
const websiteAndEmailPairs = data.map(
  user => `Website = ${user.website} / Email = ${user.email}`
);
console.log(websiteAndEmailPairs);

//martins
// // FROM USERS
// // create and print a list of phone numbers
// const phoneNumbers = users.map(user => user.phone);
// console.log(phoneNumbers);
// // create and print a list of website and email pairs (pair them in a string, array, or object)
// const websiteEmailPairs = users.map(user => `${user.website}, ${user.email}`);
// console.log(websiteEmailPairs);
// // FROM TASKS/TODOS
// // create a list of user 9's to-dos
// const user9Tasks = tasks.filter(task => task.userId === 9);
// console.log(user9Tasks);
// // then find the number of user 9's incomplete tasks
// const user9IncompleteTasks = user9Tasks.reduce((acc, curr) => {
//   if (!curr.completed) {
//     return acc + 1;
//   }
//   return acc;
// }, 0);
// console.log(user9IncompleteTasks);
// // FROM POSTS
// // create a list of user 5's posts
// const user5Posts = posts.filter(post => post.userId === 5);
// console.log(user5Posts);
// // then, create a list of title and body pairs
// const user5TitleBodyPairs = user5Posts.map(post => {
//   return {
//     title: post.title,
//     body: post.body
//   };
// });
// console.log(user5TitleBodyPairs);
// // BONUS CHALLENGE, FROM TASKS/TODOS
// // create an object that summarizes the incomplete tasks of users 3, 7, & 8
// const users378IncompleteTasksSummary = tasks.reduce((acc, curr) => {
//   // if userId is 3, 7, or 8
//   if (curr.userId === 3 || curr.userId === 7 || curr.userId === 8) {
//     // if userId is not already a key in the accumulator object
//     if (!acc[`user${curr.userId}`]) {
//       // add userId as key in accumulator object and
//       // initialize summary object for that userId
//       acc[`user${curr.userId}`] = {
//         totalTasks: 1,
//         totalIncomplete: 0,
//         incompleteTasks: []
//       };
//       // if the current task is incomplete
//       if (!curr.completed) {
//         // add one to the incomplete total and
//         // add the title to the list of incomplete tasks
//         acc[`user${curr.userId}`].totalIncomplete += 1;
//         acc[`user${curr.userId}`].incompleteTasks.push(curr.title);
//       }
//       // return the accumulator object
//       return acc;
//     }
//     // (if userId is 3, 7, or 8 and)
//     // (if userId is already in the accumulator object)
//     // add one to task total
//     acc[`user${curr.userId}`].totalTasks += 1;
//     // if the current task is incomplete
//     if (!curr.completed) {
//       // add one to the incomplete total and
//       // add the title to the list of incomplete tasks
//       acc[`user${curr.userId}`].totalIncomplete += 1;
//       acc[`user${curr.userId}`].incompleteTasks.push(curr.title);
//     }
//     //return the accumulator object
//     return acc;
//   }
//   // if the userId is NOT 3, 7, or 8
//   // just return the accumulator object
//   return acc;
// }, {});
// console.log(users378IncompleteTasksSummary);

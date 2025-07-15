// Objects: Constructors(Singleton)

//ye singleton object hy:
//const tinderUser = new Object()

//Ye non-singleton object hy:
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname: {
            firstname : " Maaz",
            lastname: "Arif"
        }
    }
}
// console.log(regularUser.fullname);
//console.log(regularUser.fullname.userfullname.firstname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

//ye agaya wohi array wala problem.
//const obj3 = {obj1, obj2}
                          // target , source
//const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
//console.log(obj3);


const users = [
    {
        id: 1,
        email: "m@gmail.com"
    },
    {
        id: 2,
        email: "m@gmail.com"
    },
    {
        id: 3,
        email: "m@gmail.com"
    },
    {
        id: 4,
        email: "m@gmail.com"
    },
]

users[1].email
//console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// check krny ky liye k usky pas ye property hy ya nai
//console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// destructuring array me b hoti hy or object me b, abi hm baat kry gy object destructuring ki.ye react me b use hota hy

const course = {
    coursename : "Js in Hindi",
    price: "999",
    courseInstructor: "Hitesh"
}
// course.courseInstructor

const {courseInstructor : instructor} = course
// console.log(courseInstructor);
// console.log(instructor);

// ye react ka concept hy.ye destructuring ki ja rahi hy.
// const navbar = ({company}) => {

// }
// navbar(company = "hitesh")



// jb b apny apna kaam kisi or ky sr pr dal dena hy to usy api kahty hn.
// menu card : api ka documentation hy
// backened sy values ati hn unko kesy likhna hy, pehly xml me values ati thee jo kafi mushkil hoti thee ab JSON  me ati hn,JSON bara assan hy wo kis tarah likhy ga , wo object hehy,
// {
//     "name": "Hitesh" 
//     "coursename": "Js in Hindi",
//     "price": "999",
// }
// kbi kbi array ki form me b milti history.
// [
//     {},
//     {},
//     {}
// ]

// randomuser generator API
// JSON formatter.com

// {
//   "results": [
//     {
//       "gender": "female",
//       "name": {
//         "title": "Miss",
//         "first": "Jennie",
//         "last": "Nichols"
//       },
//       "location": {
//         "street": {
//           "number": "8929",
//           "name": "Valwood Pkwy"
//         },
//         "city": "Billings",
//         "state": "Michigan",
//         "country": "United States",
//         "postcode": "63104",
//         "coordinates": {
//           "latitude": "-69.8246",
//           "longitude": "134.8719"
//         },
//         "timezone": {
//           "offset": "+9:30",
//           "description": "Adelaide, Darwin"
//         }
//       },
//       "email": "jennie.nichols@example.com",
//       "login": {
//         "uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
//         "username": "yellowpeacock117",
//         "password": "addison",
//         "salt": "sld1yGtd",
//         "md5": "ab54ac4c0be9480ae8fa5e9e2a5196a3",
//         "sha1": "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
//         "sha256": "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
//       },
//       "dob": {
//         "date": "1992-03-08T15:13:16.688Z",
//         "age": 30
//       },
//       "registered": {
//         "date": "2007-07-09T05:51:59.390Z",
//         "age": 14
//       },
//       "phone": "(272) 790-0888",
//       "cell": "(489) 330-2385",
//       "id": {
//         "name": "SSN",
//         "value": "405-88-3636"
//       },
//       "picture": {
//         "large": "https://randomuser.me/api/portraits/men/75.jpg",
//         "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
//         "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
//       },
//       "nat": "US"
//     }
//   ],
//   "info": {
//     "seed": "56d27f4a53bd5441",
//     "results": 1,
//     "page": 1,
//     "version": "1.4"
//   }
// }


//After beutify the code.


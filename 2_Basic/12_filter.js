const my = [2,3,5,5,6,4,3,98,66,87,64,4,34];

m = my.filter( (i) => (i>10));
// m = my.filter( (i) => { return i>5});
// m = my.filter( (i) => (true));

console.log(m);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
  newbook = books.filter( (i) => i.genre === "Science")
  console.log(newbook);

// for(i of books){         // way to print object in js
//     for(j in i){
//         console.log(j,i[j]);
//     }
//     console.log();
// }

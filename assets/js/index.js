const books = [
  {
    title: "The Design of EveryDay Things",
    author: "Don Norman",
    alreadyRead: false,
    img:
      "http://t2.gstatic.com/images?q=tbn:ANd9GcTQEZhxiVNZAeKa1dGfEzKwLXiyY_78i08Gfhwn53k-JYin9TDO"
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    img:
      "http://t2.gstatic.com/images?q=tbn:ANd9GcRqNE0qeS4ldVIC9DbGkx9MOwJ4WWKi6HVvtrtZ8XTKVodonSBy"
  },
  {
    title: "Thinking with Type",
    author: "Ellen Lupton",
    alreadyRead: true,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/518%2BxIiELFL._SX258_BO1,204,203,200_.jpg"
  },
  {
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    alreadyRead: false,
    img: "https://eloquentjavascript.net/img/cover.jpg"
  }
];

const bookElement = document.querySelector('.book-list');


 
 
 const cardBody=document.createElement('div');
 const h5 = document.createElement('h5')
 

for(const book of books)
{ 
  const li = document.createElement("li");
  li.classList.add('card','book')
 
  li.style.margin='10px'
  bookElement.append(li);
  const image = document.createElement('img');
  image.classList.add('card-img-top', 'book-cover')
  
  li.append(image)
  const cardBody=document.createElement('div');
  li.append(cardBody);
  cardBody.classList.add('card-body')
  const h2 =document.createElement('h2')
  h2.classList.add('card-title')
  const h5 = document.createElement('h5');
  h5.classList.add('card-text')
  cardBody.append(h2)
  cardBody.append(h5)
  const endDiv=document.createElement('div');
  li.append(endDiv)
  const par = document.createElement('a');
  par.classList.add('btn','status')
  endDiv.classList.add('d-flex','justify-content-end')
  endDiv.append(par)
  endDiv.style.backgroundColor='lightgray'
  endDiv.style.position='relative';
  par.style.margin='10px'
 
  
  image.src=book.img;
  h2.innerText=book.title;
  h5.innerText=book.author;
  par.innerText=book.alreadyRead
  par.href='#'

  
}

let ourCard= document.querySelectorAll('.card');
ourCard.forEach(element=>{element.style.border='1px solid black'})



let ourPar= document.querySelectorAll('.btn');
ourPar.forEach(element=>{

  if(element.innerText === 'true')
  {
    element.style.background='green'
    element.innerText= 'Read'
  }
  else
  {
    element.style.background='gray'
    element.innerText= 'To read'
  }

  element.style.color='white';
  element.style.borderRadius='20px';
  
  
  })

  



// fetch('../data/js/books.json') //path to the file with json data
//         .then(response => {
//             return response.json();
//         })
//         .then(data => {
//             console.log(data);
//         });
        let authors = 
    [{
        "author": "Douglas Crockford",
        "imageLink": "add image to your project,put link to it there",
        "title": "JavaScript: The Good Parts: The Good Parts",
        "price": 30,
        "description": "With JavaScript: The Good Parts, you'll discover a beautiful, elegant, lightweight and highly expressive language that lets you create effective code, whether you're managing object libraries or just trying to get Ajax to run fast. If you develop sites or applications for the Web, this book is an absolute must"
      },
        {
          "author": "David Herman",
          "imageLink": "add image to your project,put link to it there",
          "title": "Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript",
          "price": 22,
          "description": "Effective JavaScript is organized around 68 proven approaches for writing better JavaScript, backed by concrete examples. You’ll learn how to choose the right programming style for each project, manage unanticipated problems, and work more successfully with every facet of JavaScript programming from data structures to concurrency"
        },
        {
          "author": "David Flanagan",
          "imageLink": "add image to your project,put link to it there",
          "title": "JavaScript: The Definitive Guide",
          "price": 40,
          "description": "This Fifth Edition is completely revised and expanded to cover JavaScript as it is used in today's Web 2.0 applications. This book is both an example-driven programmer's guide and a keep-on-your-desk reference, with new chapters that explain everything you need to know to get the most out of JavaScript"
        },
        {
          "author": " Eric Elliott",
          "imageLink": "add image to your project,put link to it there",
          "title": "Programming JavaScript Applications",
          "price": 19,
          "description": "Take advantage of JavaScript’s power to build robust web-scale or enterprise applications that are easy to extend and maintain. By applying the design patterns outlined in this practical book, experienced JavaScript developers will learn how to write flexible and resilient code that’s easier—yes, easier—to work with as your code base grows."
        },
        {
          "author": "Addy Osmani",
          "imageLink": "add image to your project,put link to it there",
          "title": "Learning JavaScript Design Patterns",
          "price": 32,
          "description": "With Learning JavaScript Design Patterns, you’ll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you."
        },
        {
          "author": "Boris Cherny",
          "imageLink": "add image to your project,put link to it there",
          "title": "Programming TypeScript",
          "price": 28,
          "description": "Any programmer working with a dynamically typed language will tell you how hard it is to scale to more lines of code and more engineers. That’s why Facebook, Google, and Microsoft invented gradual static type layers for their dynamically typed JavaScript and Python code. This practical book shows you how one such type layer, TypeScript, is unique among them: it makes programming fun with its powerful static type system."
        },
        {
          "author": "Alex Banks, Eve Porcello",
          "imageLink": "add image to your project,put link to it there",
          "title": "Learning React, 2nd Edition",
          "price": 25,
          "description": "If you want to learn how to build efficient React applications, this is your book. Ideal for web developers and software engineers who understand how JavaScript, CSS, and HTML work in the browser, this updated edition provides best practices and patterns for writing modern React code. No prior knowledge of React or functional JavaScript is necessary."
        },
        {
          "author": "Bradley Meck Alex Young and Mike Cantelon",
          "imageLink": "add image to your project,put link to it there",
          "title": "Node.js in Action",
          "price": 38,
          "description": "Node.js in Action, Second Edition is a thoroughly revised book based on the best-selling first edition. It starts at square one and guides you through all the features, techniques, and concepts you'll need to build production-quality Node applications."
        },
        {
          "author": "Kyle Simpson",
          "imageLink": "add image to your project,put link to it there",
          "title": "You Don't Know JS Yet: Get Started",
          "price": 26,
          "description": "It seems like there's never been as much widespread desire before for a better way to deeply learn the fundamentals of JavaScript. But with a million blogs, books, and videos out there, just where do you START? Look no further!"
        },
        {
          "author": "John Resig and Bear Bibeault",
          "imageLink": "add image to your project,put link to it there",
          "title": "Secrets of the JavaScript Ninja",
          "price": 33,
          "description": "Secrets of the Javascript Ninja takes you on a journey towards mastering modern JavaScript development in three phases: design, construction, and maintenance. Written for JavaScript developers with intermediate-level skills, this book will give you the knowledge you need to create a cross-browser JavaScript library from the ground up."
        }
      ]
class Div {
    constructor(classN, text) {
      this.class = classN
        this.text = text
    }
    createElem() {
      const div = document.createElement('div')
      div.classList.add(this.class)
      div.insertAdjacentText('beforeend',this.text)
      return div
    }
  }
  let price =0;
  class H1 {
    constructor(classN, text) {
      this.class = classN
        this.text = text
    }
    createElem() {
      const h1 = document.createElement('h1')
      h1.classList.add(this.class)
      h1.insertAdjacentText('beforeend',this.text)
      return h1
    }
  }
  class H2 {
    constructor(classN, text) {
      this.class = classN
        this.text = text
    }
    createElem() {
      const h2 = document.createElement('h2')
      h2.classList.add(this.class)
      h2.insertAdjacentText('beforeend',this.text)
      return h2
    }
  }
  class H3 {
    constructor(classN, text) {
      this.class = classN
        this.text = text
    }
    createElem() {
      const h3 = document.createElement('h3')
      h3.classList.add(this.class)
      h3.insertAdjacentText('beforeend',this.text)
      return h3
    }
  }
  class Span {
    constructor(classN, text) {
      this.class = classN
        this.text = text
    }
    createElem() {
      const span = document.createElement('span')
      span.classList.add(this.class)
      span.insertAdjacentText('beforeend',this.text)
      return span
    }
  }
  class Img {
    constructor(classN, text) {
      this.class = classN
        this.text = text
    }
    createElem() {
      const img = document.createElement('img')
      img.classList.add(this.class)
      img.insertAdjacentText('beforeend',this.text)
      return img
    }
  }
  class P {
    constructor(classN, text) {
      this.class = classN
        this.text = text
    }
    createElem() {
      const p = document.createElement('p')
      p.classList.add(this.class)
      p.insertAdjacentText('beforeend',this.text)
      return p
    }
  }
  class A {
    constructor(classN, text) {
      this.class = classN
        this.text = text
    }
    createElem() {
      const a = document.createElement('a')
      a.classList.add(this.class)
      a.insertAdjacentText('beforeend',this.text)
      return a
    }
  }
let fragment = new DocumentFragment();
const htmlE = document.querySelector('.mainWrapper')
function addElements() {
    const newDiv = new Div('mainHeader', "").createElem()
    fragment.append(newDiv)
    const newH1 = new H1('mainHeader1', "quality product").createElem()
    newDiv.append(newH1);
    const newspan = new Span('mainSpan', "best prices !!!").createElem()
    newH1.append(newspan);
    const newDiv1 = new Div('catalog', "").createElem()
    fragment.append(newDiv1);
    const newH2 = new H2('headerCatalog', "catalog").createElem()
    newDiv1.append(newH2);
    const bagDiv = new Div('bag', "").createElem()
    fragment.append(bagDiv) 
    const header22 = new H1('headerBag', "Your Shopping Bag").createElem()
        bagDiv.append(header22) 
        const header22Div = new Div('insideBag', "").createElem()
        header22Div.style.minHeight = "500px"
        header22Div.addEventListener("dragover", (event)=>{
          event.preventDefault();
        });
        header22Div.addEventListener("drop", (event)=>{
          let arr = document.querySelectorAll(".addToBag")
          console.log(arr);
          const id = event
          
    .dataTransfer
    .getData('text');
    const draggableElement = document.getElementById(id);
    const dropzone = event.target;
    console.log(count);
  
    arr.forEach((el)=>{
      if(el.parentElement.parentElement.parentElement.parentElement.id ===id ) {
        console.log(el.parentElement.parentElement.childNodes[3]);
        el.innerHTML = "remove"
        let bprice = el.parentElement.parentElement.childNodes[3].innerText
         price +=  parseInt(bprice)
        priceTag.innerText=price;
      }
    })

    dropzone.appendChild(draggableElement);
    event
    .dataTransfer
    .clearData();
        });
        bagDiv.append(header22Div) 
        let price = 0;
        const buyBtn = new A('ByuBtn', "Buy Now!!!").createElem()
        
        bagDiv.append(buyBtn)
        const priceTag =  new H3('priecetag',price ).createElem()
        bagDiv.append(priceTag)
    let count = 0;
    authors.forEach((Element)=>{
        count++;
        const newDiv2 = new Div('item', "").createElem();
        newDiv2.draggable = "true";
        newDiv2.setAttribute('id', `id${count}`) 
        newDiv1.append(newDiv2);
        newDiv2.addEventListener("dragstart", (event)=>{
          console.log(event.target.id);
          event
          .dataTransfer
          .setData('text/plain', event.target.id);
          
        
        })
        const newDiv3 = new Div('imgWrapper', "").createElem()
        newDiv2.append(newDiv3);
        const newDiv4 = new Div('textWrapper', "").createElem()
        newDiv2.append(newDiv4);
        const Img1 =  new Img('img', "").createElem()
        Img1.src="./assets/images/books/book"+count+".jpg"
        Img1.style.pointerEvents = "none"
        newDiv3.append(Img1)
        const modalDiv = new Div('modal', "").createElem()
        newDiv3.append(modalDiv)
        const Par1 = new P('description',Element["description"] ).createElem()
        const newDiv5 = new Div('textWrapperInside', "").createElem()
        modalDiv.append(newDiv5)
        newDiv5.append(Par1)
        const newbtn1 = new A('closeModalBtn', "close").createElem()
       
        modalDiv.append(newbtn1)
        const Header3 =  new Div('textWrapperInside',"" ).createElem()
        newDiv4.append(Header3)
        const Header4 =  new H3('author',Element["author"] ).createElem()
        Header3.append(Header4)
        const Header5 =  new H3('bookName',Element["title"] ).createElem()
        Header3.append(Header5)
        const par2 =  new P('price',Element["price"] ).createElem()
        Header3.append(par2)
        const btnWrapper =  new Div('btnWrapper',"" ).createElem()
        Header3.append(btnWrapper)
        const newbtn2 = new A('showMore', "show more").createElem()
        
        btnWrapper.append(newbtn2)
        const newbtn3 = new A('addToBag', "add to bag").createElem()
        
        btnWrapper.append(newbtn3)
        newbtn1.addEventListener("click", modalHide);
        function modalHide() {
            modalDiv.style.transform = "translateX(-3000%)";
        }
        newbtn2.addEventListener("click", modalShow);
        function modalShow() {
            modalDiv.style.transform = "translateX(0)"; 
        }
        newbtn3.addEventListener("click", addToBag);
        
        
        function addToBag() {
            
            if(newbtn3.innerText !== "remove") {
                newbtn3.innerText = "remove";
                if(header22Div.childNodes !==0) {
                 price += Element["price"];
                 priceTag.innerText=price;
                }
                header22Div.append(newDiv2);   
            } else if(newbtn3.innerText === "remove") {
              if(header22Div.childNodes !==1) {
                price -= Element["price"];
                priceTag.innerText=price;
              }
                newbtn3.innerText = "add to bag";
                newDiv1.append(newDiv2);
            }
            
        }
        
    });
    buyBtn.addEventListener("click", byuStuff)
        function byuStuff() {
          
          if(priceTag.innerText!=0) {
            location. href = "./form.html";
          } else{
            alert("Don't Be Stingy, Buy Something")
          }
        }
}






addElements();






  
  
  htmlE.append(fragment)
  
  
// div = div.classList.add("mainWrapper")
// fragment.appendChild(Div);

// div.appendChild(fragment)






      console.log(authors.length)
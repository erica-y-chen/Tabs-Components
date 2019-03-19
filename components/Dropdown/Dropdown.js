class Dropdown {
  constructor(element) {
  
    // Assign this.element to the dropdown element
    this.element= element;
    
    // Get the element with the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
    this.button = this.element.querySelector('.dropdown-button');
    
    // assign the reference to the ".dropdown-content" class found in the dropdown element
    this.content= this.element.querySelector('.dropdown-content');
    
    // Add a click handler to the button reference and call the toggleContent method.
  //   this.button.addEventListener('click', () => {
  //       this.toggleContent();
  //   })
  // }
    this.button.addEventListener('click', () => this.toggleContent());
  }

  toggleContent() {

    // Toggle the ".dropdown-hidden" class off and on    this.button.classList.toggle('dropdown-hidden');
    this.content.classList.toggle('dropdown-hidden');
  }
}


// Nothing to do here, just study what the code is doing and move on to the Dropdown class
let dropdowns = document.querySelectorAll('.dropdown').forEach( dropdown => new Dropdown(dropdown));
// let dropdowns = document.querySelectorAll('.dropdown');
// dropdowns.forEach( function(dropdown){
//   return new Dropdown(dropdown);
// })




// // Step 3: Define our class that will create a new object!
// class Link {
//   constructor(link) {
//     this.link = link;
//     // 1,2,3,4
//     console.log(this.link.dataset.tab); 
//     this.content = document.querySelector(`.content[data-tab='${this.link.dataset.tab}']`);
//     //console.log(this.content);
//     // This is creating a new Content object using the DOM content object
//     //console.log(this.content);
//     this.content = new Content(this.content);
//     //console.log(this.content);
   
//     // this.link.addEventListener('click', this.linkClick.bind(this));
//     this.link.addEventListener('click', () => this.linkClick());
//   }
//   // methods
//   linkClick() {
//     this.content.toggleContent();
//   }
// }

// class Content {
//   constructor(content) {
//     this.contentTab = content;
//   }
//   // Methods
//   toggleContent() {
//     this.contentTab.classList.toggle('change');
//   }
// }

// // Step 1: Get our DOM elements and store them in links
// const links = document.querySelectorAll('.link');

// // Step 2: Iterate over the NodeList and create a new object
// links.forEach(function(link){
//   // we are returning our newly created objects here
//   return new Link(link);
// });
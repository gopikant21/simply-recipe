console.log("hello world");
const getElement = (selector) =>{
  const element = document.querrySelector(selector);
  if(element) return element
  throw Error('Please double check your class names, there is no ${selector} class')
}

const links = getElement('.nav-links')
const navBtnDOM = getElement('.nav-btn')

navBtnDOM.addEventListener('click',()=>{
  links.classList.toggle('show-links')
})
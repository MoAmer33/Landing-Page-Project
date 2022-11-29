
const sections=document.querySelectorAll(".section");
let nav=document.getElementById("navigation");
//this for loob append the section link in navigation
for(let i=1;i<=sections.length;i++){
    let li=document.createElement("li");
    nav.appendChild(li);
    let a=document.createElement("a");
    li.appendChild(a);
    a.setAttribute("href","#section"+i);
    a.setAttribute("class","sectionLink");
    a.textContent="section"+i;

}  
const idOfLink=document.querySelectorAll(".sectionLink");
//This action  happen when i make a scroll, i measure the distance between top section and bottom and 
//when i make a scroll if this section in this specific distance for this section, will active
//and when i scroll down if this section not in specific distance for his distance section the active in this section will remove
document.addEventListener("scroll",function(){

for(let element=0;element<sections.length;element++){
if(150>=sections[element].getBoundingClientRect().top
&&-150<=sections[element].getBoundingClientRect().bottom-200){
  sections[element].style.backgroundColor="#9B5A4C";
  sections[element].classList.add("active");
  idOfLink[element].style.backgroundColor="#9B5A4C";
}else{
idOfLink[element].style.backgroundColor="transparent";
sections[element].classList.remove("active");
sections[element].style.backgroundColor="transparent";
}

}});
//this attribute store all elment like this a[href^="#"] and i can accses all element  for this attribute
let smoothPage=document.querySelectorAll('a[href^="#"]');

smoothPage.forEach(element => {
  element.addEventListener('click', function (click) {
      click.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});


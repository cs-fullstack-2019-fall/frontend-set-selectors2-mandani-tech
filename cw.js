

// cw front end selectors

elp=document.getElementsByTagName("p")[0];//Print the first p tag to the console using the tag
console.log(elp);
el_ID=document.getElementById("first"); //Print the first p tag to the console using the ID
console.log(el_ID);
el_class=document.getElementsByClassName("special")[0]; //Print the first p tag to the console using the class
console.log(el_class);

el_qs=document.querySelector("p.special"); //Print the special class using both the query selector
console.log(el_qs);

el_qsa=document.querySelectorAll("p.special");//Print the special class using both the query selector All
for(let i=0;i<el_qsa.length;i++)
{
console.log(el_qsa[i]);}

//-----------------------------------------------------

// Change the color of the h1 statement to blue.
let el=document.getElementsByTagName("h1")[0];
el.style.color='blue';

//Change the color of the last p tag to yellow
let el_p=document.getElementsByTagName("p");
i=el_p.length;
el_p[i-1].style.color='blue';



let output;

const parent = document.querySelector('.parent');

output = parent.childNodes;
output = parent.childNodes[0].textContent;
output = parent.childNodes[0].nodeName;
output = parent.childNodes[3].textContent;
output = parent.childNodes[3].outerHTML;

output = parent.childNodes[3].innerText = 'Child One';
output = parent.childNodes[3].style.color = 'red';

output = parent.FirstChild;
output = parent.lastChild;

//Parent nodes

const child = document.querySelector('.child');

output = child.parentNode;

//Siblings

const SecondItem = document.querySelector('child:nth-child(2)');

output = SecondItem.nextSibling;
output = SecondItem.previousSibling;

console.log(output);
const allHeading = document.getElementsByTagName('h1');

for(const h1 of allHeading){

    console.log(h1.innerText);
}

const allList = document.getElementsByTagName('li');
for (const li of allList){

    console.log(li.innerText)
}

const pera1 = document.getElementById('para1');
console.log(pera1.innerText);
pera1.innerText = "This paragraph is changed by javaScript" ;

const listClass = document.getElementsByClassName('para1List');
console.log(listClass);



for(const lists of listClass){

    console.log(lists.innerText);

    lists.innerText = "All list has been changed by the javaScript";  

    
}
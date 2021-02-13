const text = document.getElementById('text');
const textArray = text.innerText.split('');

const newElement = document.createElement('h1');
newElement.innerHTML = `
    ${textArray.map(letter => 
            `<span style="${randomVisibility()}">${letter}</span>`
        ).join('')}   
`;
console.log(newElement);
newElement.classList.add('letter');
document.body.appendChild(newElement);
console.log(textArray);


function randomVisibility(){
    return Math.random() < 0.5 ? 'visibility:hidden' : 'visibility:visible';
}
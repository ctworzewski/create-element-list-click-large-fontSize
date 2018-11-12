let size = 10;
let orderElement = 1;


const init = () => {
    const btn = document.createElement('button');
    const btnReset = document.createElement('button');
    btn.textContent = 'Twórz';
    btnReset.textContent = 'Wyczyść ';
    document.body.appendChild(btn);
    document.body.appendChild(btnReset);
    const ul = document.createElement('ul');
    document.body.appendChild(ul);
    btn.addEventListener('click', createLiElement);
    btnReset.addEventListener('click', resetLiElement);

}

const createLiElement = () => {
    // console.log('test btn');
    for (let i = 0; i < 10; i++) {
        const li = document.createElement('li');
        li.textContent = `Element nr ${orderElement++}`;
        li.style.fontSize = `${size++}px`;
        document.querySelector('ul').appendChild(li);
    }
}

const resetLiElement = () => {
    document.querySelector('ul').textContent = '';
    size = 10;
    orderElement = 1
}


init();
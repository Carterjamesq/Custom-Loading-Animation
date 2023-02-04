const createElements = () => {
    const root = document.createElement('div');
    const text = document.createElement('div');
    const container = document.createElement('div');
    const load = document.createElement('div');

    return ({root, text, container, load});
};

const setAttribute = ({root, text, container, load}) => {
    root.setAttribute("class", "root");
    text.setAttribute("class", "text");
    container.setAttribute("class", "container");
    load.setAttribute("class", "load");
};

const startCounter = ({width, load, text}) => {
    let count = 0;
    let intervalId;
    const func = () => {
        if (count === 101) {
            clearInterval(intervalId);
            return
        }
        text.textContent = `${count}%`;
        load.style.width = `${count}%`;
        count++;
    };

    intervalId = setInterval(func, 20);
};

const init = () => {
    const {root, text, container, load} = createElements();
    setAttribute({root, text, container, load});

    document.body.appendChild(root);
    root.appendChild(text);
    root.appendChild(container);
    container.appendChild(load);

    startCounter({width: 101, text, load, count: 1000});
};

init();
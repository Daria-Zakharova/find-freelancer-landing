//accepts parameter object like {selector: ".slider-item:nth-child(3)", position: "after",}

export function cloneAll({ selector, position = 'before' }) {
    if (position === 'before') {
        return cloneAllBefore(selector);
    }
    if (position === 'after') {
        return cloneAllAfter(selector);
    }
    throw new Error(`Wrong format of cloned slider elements position, choose either 'after' or 'before' instead of '${position}'`);
}

function cloneAllBefore(selector) {
    const className = selector.match(/^.*:/g)[0].slice(0, -1);
    const elementNumber = selector.replace(/^.*\((\d)\).*/g, '$1');
    const nodesToClone = [];

    for (let i = 1; i <= elementNumber; i += 1) {
        const clonedSelector = `${className}:nth-child(${i})`;
        const node = document.querySelector(clonedSelector);
        nodesToClone.push(node);
    }
    return clone(nodesToClone);
}

function cloneAllAfter(selector) {
    const className = selector.match(/^.*:/g)[0].slice(0, -1);
    const selectorCloned = `${selector}~${className}`;
    const nodesToClone = document.querySelectorAll(selectorCloned);
    return clone(nodesToClone);
}

function clone(arrayOfNodes) {
    const cloned = [];
    arrayOfNodes.forEach(el => {
        const newEl = el.cloneNode(true);
        cloned.push(newEl);
    });
    return cloned;
}

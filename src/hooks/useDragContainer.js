const useDragContainer  = container => {
    container.addEventListener('dragenter', e => e.preventDefault());
    container.addEventListener('dragover', e => e.preventDefault());
    container.addEventListener('drop', e => {
        e.preventDefault();
        const element = document.querySelector('.dragging');
        const body = container.querySelector('.body');
        const elementRef = getElementRef(Array.from(body.querySelectorAll(".task:not(.dragging)")), e.clientY);
        elementRef ? body.insertBefore(element, elementRef) : body.appendChild(element);
    })
}

function getElementRef(elements, y){
    return elements.reduce((previous, current) => {
        const currentRect = current.getBoundingClientRect();
        const offset = y - currentRect.top - currentRect.height/2;
        if(offset < 0 && offset > previous.offset)
            return { offset, element: current };
        else
            return previous;
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}

export default useDragContainer;
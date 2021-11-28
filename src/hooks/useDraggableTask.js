const useDraggableTask = element => {
    element.addEventListener('dragstart', e => {
        e.dataTransfer.setData('text/plain', e.target.id);
        element.classList.add('dragging');
    });
    element.addEventListener('dragend', e => {
        element.classList.remove('dragging');
    });
}
export default useDraggableTask;
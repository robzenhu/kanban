export default class DRopZone{
    static createDropZone(){
        const range = document.createRange();
        range.selectNode(document.body);
        const dropZone = range.createContextualFragment(`
        <div class="kanban_dropzone"></div>`).children[0];
    }
}
export default class Column {
    constructor(id, title) {
        this.elements ={};
        this.elements.root = Column.createRoot();
        this.elements.title = this.elements.root.querySelector(".kanban_column-title");
        this.elements.items = this.elements.root.querySelector(".kanban_column-items");
        this.elements.addItem = this.elements.root.querySelector(".kanban_add-item");

        this.elements.root.dataset.id = id;
        this.elements.title.textContent = title;

        this.elements.addItem.addEventListener('click',()=>{

        })
       
    }
    static createRoot() {
        const range = document.createRange();

        range.selectNode(document.body);

        return range.createContextualFragment(`
            <div class="kanban_column">
                <div class="kanban_column-title"></div>
                <div class="kanban_column-items"></div>
                <button class="kanban_add-item" type="button">+ Add</button>
            </div>        
        `).children[0];
    }
    renderItem(data){

    }
}
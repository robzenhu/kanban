import KanbanAPI from "../api/KanbanAPI.js";

export default class Item {
    constructor(id,content){
        this.elements = {};
        this.elements.root = Item.createRoot();
        this.elements.input = this.elements.root.querySelector(".kanban_item-input");

        this.elements.root.dataset.id = id;
        this.elements.input.textContent = content;
        this.content = content;
        
        const onBlur = () =>{
            const newContent = this.elements.input.textContent.trim();
            if(newContent == this.content){
                return;
            }
            this.content = newContent;
            KanbanAPI.updateItem(id,{
                content : this.content
            });
        };
       

        this.elements.input.addEventListener("blur",onBlur);
        this.elements.root.addEventListener("dblclick",()=>{
            const check = confirm("Tem certeza de que deseja excluir este item?")
            if(check){
                KanbanAPI.deleteItem(id);

                this.elements.input.removeEventListener("blur", onBlur);
                this.elements.root.parentElement.removeChild(this.elements.root);
            }
        });
        this.elements.root.addEventListener("dragstart",e =>{
            e.dataTransfer.setData("text/plain",id);
        });
        this.elements.input.addEventListener("drop", e =>{
            e.preventDefault();        
        });
    }
    static createRoot(){
        const range = document.createRange();

        range.selectNode(document.body);

        return range.createContextualFragment(`
            <div class="kanban_item" draggable="true">
                <div class="kanban_item-input" contenteditable></div>
            </div>        
        `).children[0];
    }
}
// Requesting Variables

let list_items = window.document.getElementById('list');

let items = list_items.getElementsByClassName('items');

let button_add = window.document.getElementById('add');

let buttons_remove = window.document.getElementsByClassName("b_remove");

let buttons_edit = window.document.getElementsByClassName("b_edit");

// Adding Functions to Buttons

button_add.addEventListener('click', add_item, false);

function set_buttons(){
    for(let i = 0; i < buttons_remove.length; i++){
        buttons_remove[i].addEventListener('click', remove_item, false);
    }
    
    for(let i = 0; i < buttons_edit.length; i++){
        buttons_edit[i].addEventListener('click', edit_item, false);
    }
}

// Declaring Functions

function add_item(){
    let new_item = window.document.createElement("li");
    new_item.id = `item${list_items.childElementCount + 1}`;
    new_item.className = "items";

    let new_item_text = window.document.getElementById("item_tolist");

    let new_p = window.document.createElement("p");
    new_p.id = `i_text${list_items.childElementCount + 1}` ;
    new_p.className ="text_item";
    new_p.innerText = new_item_text.value;

    let new_button_edit = window.document.createElement("input");
    new_button_edit.type = "button";
    new_button_edit.id = `b_edit${list_items.childElementCount + 1}`;
    new_button_edit.className = "b_edit";
    new_button_edit.value = "EDIT";

    let new_button_remove = window.document.createElement("input");
    new_button_remove.type = "button";
    new_button_remove.id = `b_remove${list_items.childElementCount + 1}`;
    new_button_remove.className = "b_remove";
    new_button_remove.value = "X";

    new_item.appendChild(new_p);
    new_item.appendChild(new_button_edit);
    new_item.appendChild(new_button_remove);
    list_items.appendChild(new_item);

    set_buttons();
}

function edit_item(){
    let item_edit_id = this.parentNode.id;
    let itemT_edit = window.document.getElementById(item_edit_id);
    
    let text_item_id = itemT_edit.children[0].id;
    let text_item = window.document.getElementById(text_item_id);
    
    let text = text_item.innerText;
    let text_item_class = itemT_edit.children[0].className;

    if(text_item_class == "text_item"){
        itemT_edit.removeChild(text_item);

        let new_input = window.document.createElement("input");
        new_input.type = "text";
        new_input.id = `input_text${itemT_edit.id.substr(4,5)}`
        new_input.className = "input_text_item";
        new_input.value = text;

        itemT_edit.prepend(new_input);
        new_input.focus();

        new_input.addEventListener('focusout', edit_text);

    }

    function edit_text(){
        let input_item_id = itemT_edit.children[0].id;
        let input_item = window.document.getElementById(input_item_id);

        itemT_edit.removeChild(input_item);

        let new_text = window.document.createElement("p");
        new_text.id = `i_text${itemT_edit.id.substr(4,5)}`
        new_text.className = "text_item";
        new_text.innerText = input_item.value;

        itemT_edit.prepend(new_text);
    }
}

function remove_item(){
    let itemT_remove_id = this.parentNode.id;
    let itemT_remove = window.document.getElementById(itemT_remove_id);
    
    let parentOf_id = itemT_remove.parentNode.id;
    let parentOf = window.document.getElementById(parentOf_id);
    
    parentOf.removeChild(itemT_remove);
}
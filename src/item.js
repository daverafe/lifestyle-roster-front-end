class Item {
    static all = []
    static itemsContainer = document.getElementById('items-container')
    static itemForm = document.getElementById('form-container')

    constructor(name, image, price, url, bought, roster_id){
        this.name = name 
        this.image = image
        this.price = price
        this.url = url 
        this.bought = bought 
        this.roster_id = roster_id
        Item.all.push(this) 
    }

    appendItemHTML(){
        Item.itemsContainer.innerHTML += `
        <div id="${this.name.id}">
            <input type="hidden" id="${this.name.roster_id}">
            <h4>${this.name.name}</h4>
            <img src="${this.name.image}">
            <p>$${this.name.price}</p>
            <a href="${this.name.url}">${this.name.name}</a>
            <button>Mark Bought</button>
            <button>Remove Item</button>
        </div>
        `
        return Item.itemsContainer
    }

    static renderForm(){
        Item.itemForm.innerHTML += `
        <form id="new-item-form">
            <h4>Add A New Item:</h4>
            <input type="text" id="name" placeholder="name">
            <input type="text" id="image" placeholder="image address">
            <input type="number" id="price" placeholder="price">
            <input type="text" id="url" placeholder="page url">
            <input type="submit" value="create">
        </form>
        `
    }


}
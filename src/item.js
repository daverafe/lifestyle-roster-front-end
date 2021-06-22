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

    //build the item HTML
    appendItemHTML(){
        Item.itemsContainer.innerHTML += `
        <div id="${this.name.id}">
            <h4>${this.name.name}</h4>
            <img src="${this.name.image}">
            <p>$${this.name.price}</p>
            <a href="${this.name.url}">${this.name.name}</a>
            <button>Mark Bought</button>
        </div>
        `
        return Item.itemsContainer
    }


    //append item to dom


}
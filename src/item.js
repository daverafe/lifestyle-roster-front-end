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
            <div class="col-sm">
                 <div class="card" id="${this.name.id}">
                    <input type="hidden" id="${this.name.roster_id}">
                    <img src="${this.name.image}" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">${this.name.name}</h5>
                            <p class="card-text">
                            $${this.name.price}
                            <a href="${this.name.url}">${this.name.name}</a>
                            </p>
                            ${this.name.bought === false ? `<button type="button" class="btn btn-primary">Mark Bought</button>` : `<button type="button" class="btn btn-primary">Bought</button>`} 
                            <buttontype="button" class="btn btn-danger">Remove Item</button>
                        </div>
                </div>
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
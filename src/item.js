class Item {
    static all = []
    static itemsContainer = document.getElementById('items-container')
    static itemForm = document.getElementById('form-container')

    constructor({id, name, image, price, url, bought, roster_id}){
        this.id = id 
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
                 <div class="card" id="${this.id}">
                    <input type="hidden" id="${this.roster_id}">
                    <img src="${this.image}" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">${this.name}</h5>
                            <p class="card-text">
                            $${this.price} <br>
                            Buy it here: <a href="${this.url}">${this.name}</a>
                            </p>
                            ${this.bought === false ? `<button type="button" class="btn btn-primary">Mark Bought</button>` : `<button type="button" class="btn btn-success">Bought</button>`} 
                            <buttontype="button" class="btn btn-danger">Remove Item</button>
                        </div>
                </div>
            </div>
        `
        return Item.itemsContainer
    }

    static renderForm(rosterId){
        Item.itemForm.innerHTML += `
        <form id="new-item-form" data-id="${rosterId}">
            <h4>Add A New Item:</h4>
            <input type="text" id="name" placeholder="name">
            <input type="text" id="image" placeholder="image address">
            <input type="number" id="price" placeholder="price">
            <input type="text" id="url" placeholder="page url">
            <button type="submit" class="btn btn-primary">Create</button>        
        </form>
        `
    }

    static backToRoster(){
        Item.itemsContainer.innerHTML += `
            <div id="back-bttn">
                <button type="button" class="btn btn-secondary" id="back-bttn">Back To Rosters</button> 
            </div>
        `
    }


}
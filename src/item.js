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


}
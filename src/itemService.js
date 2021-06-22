class ItemService {
    constructor(endpoint) {
        this.endpoint = endpoint
    }

    getItems(roster){
        fetch(`${this.endpoint}/items`)
        .then(resp => resp.json())
        .then(items => {
           const itemOjb = items.map(item => {
               return new Item(item)
            })
            const filteredItems = Item.all.filter(item => {
               return item.name.roster_id === parseInt(roster.id) 
            }) 
            filteredItems.forEach(item => {
                item.appendItemHTML()
            })       
         })
    }

}



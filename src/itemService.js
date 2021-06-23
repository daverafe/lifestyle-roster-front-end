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

    createItem(item){
        const itemObj = {
            name: event.target.name.value,
            image: event.target.image.value,
            price: event.target.price.value,
            url: event.target.url.value,
            roster_id: item.firstElementChild.id 
        }

        const configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(itemObj)
        }

        fetch(`${this.endpoint}/items`, configObj)
        .then(resp => resp.json())
        .then(item => {
            const i = new Item(item)
            i.appendItemHTML()
        })
    }

}



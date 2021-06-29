class ItemService {
    constructor(endpoint) {
        this.endpoint = endpoint
    }

    getItems(rosterId){
        fetch(`${this.endpoint}/items`)
        .then(resp => resp.json())
        .then(items => {
            items.forEach(item => {
               return new Item(item)
            })
            if(rosterId === undefined){
                const filteredItems = Item.all.filter(item => {
                    return item.bought === true 
                 }) 
                 filteredItems.forEach(item => {
                     item.appendItemHTML()
                 }) 
            } else {
                const filteredItems = Item.all.filter(item => {
                    return item.roster_id === parseInt(rosterId) 
                 }) 
                 filteredItems.forEach(item => {
                     item.appendItemHTML()
                 }) 
            }
                 
         })
    }

    createItem(rosterId){
        const itemObj = {
            name: document.getElementById('name').value,
            image: document.getElementById('image').value,
            price: document.getElementById('price').value,
            url: document.getElementById('url').value,
            roster_id: rosterId 
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

    deleteItem(id){
        fetch(`${this.endpoint}/items/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(json => alert(json.message))
    }

    itemBought(id){
        const markBought = {
            bought: event.target.innerText === "Mark Bought" ? true : false 
        }

        const patchObj = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(markBought)
          }
          fetch(`${this.endpoint}/items/${id}`, patchObj)
          .then(resp => resp.json())
          .then()
      
    }

}



class ItemService {
    constructor(endpoint) {
        this.endpoint = endpoint
    }

    getItems(roster){
        fetch(`${this.endpoint}/items`)
        .then(resp => resp.json())
        .then(items => {
            items.forEach(item => {
                const i = new Item(item)
                i.appendItemHTML()
            })
            //append item to dom 
        })
    }

}

// const filteredItems = items.filter(item => {
//     if(item.roster_id === roster.id){
//         return item 
//     }  
// })
// console.log(filteredItems)
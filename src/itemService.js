class ItemService {
    constructor(endpoint) {
        this.endpoint = endpoint
    }

    getItems(roster){
        fetch(`${this.endpoint}/items`)
        .then(resp => resp.json())
        .then(items => {
            const filteredItems = items.filter(item => {
                 if(item.roster_id === roster.id){
                     return item 
                 }  
            })
            console.log(filteredItems)
            //append item to dom 
        })
    }

}
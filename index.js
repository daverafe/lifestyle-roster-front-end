const base_url = "http://127.0.0.1:3000"
const rosterService = new RosterService(base_url)
const itemService = new ItemService(base_url)

Roster.rosterForm.addEventListener('submit', handleRosterSubmit)
Roster.rostersContainer.addEventListener('click', handleRosterDelete)
Roster.rostersContainer.addEventListener('click', handleItems)

Item.itemForm.addEventListener('submit', handleItemSubmit)
Item.itemsContainer.addEventListener('click', handleItemDelete)
Item.itemsContainer.addEventListener('click', handleItemBought)

rosterService.getRosters()
Roster.renderForm()

function handleRosterSubmit(){
    if (event.target.id === "new-roster-form"){
        event.preventDefault()
        rosterService.createRoster()
        event.target.reset() 
    }
}

function handleRosterDelete(){
    if(event.target.innerText === "Delete"){
        event.target.parentElement.remove()
        rosterService.deleteRoster(event.target.parentElement.id)
    }
}

function handleItems(){
    if(event.target.id === "roster-title"){
        this.innerHTML = ""
        Roster.rosterForm.innerHTML = ""
        Item.renderForm()
        let roster = event.target.parentElement.id
        itemService.getItems(roster)
    }
}

function handleItemSubmit() {
    event.preventDefault()
    let item = this.previousElementSibling.firstElementChild
    itemService.createItem(item)
    event.target.reset()
}

function handleItemDelete(){
    if(event.target.innerText === "Remove Item"){
        event.target.parentElement.remove()
        itemService.deleteItem(event.target.parentElement.id)
    }
}

function handleItemBought(){
    if(event.target.innerText === "Mark Bought"){
        itemService.itemBought(event.target.parentElement.id)
        event.target.innerText = "Bought"
    } else if(event.target.innerText === "Bought"){
        itemService.itemUnbought(event.target.parentElement.id)
        event.target.innerText = "Mark Bought"
    }
}
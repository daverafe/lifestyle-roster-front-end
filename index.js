const base_url = "http://127.0.0.1:3000"
const rosterService = new RosterService(base_url)
const itemService = new ItemService(base_url)

Roster.rosterForm.addEventListener('submit', handleRosterSubmit)
Roster.rostersContainer.addEventListener('click', handleRosterDelete)
Roster.rostersContainer.addEventListener('click', handleItems)
Roster.rostersContainer.addEventListener('click', handleAllBought)

Item.itemForm.addEventListener('submit', handleItemSubmit)
Item.itemsContainer.addEventListener('click', handleItemDelete)
Item.itemsContainer.addEventListener('click', handleItemBought)
Item.itemsContainer.addEventListener('click', handleBack)

rosterService.getRosters()
Roster.renderForm()
Roster.allBoughtItems()

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

function handleAllBought() {
    if(event.target.innerText === "All Bought Items"){
        this.innerHTML = ""
        Roster.rosterForm.innerHTML = ""
        Item.all = []
        Item.backToRoster()
        itemService.getItems()
    }
}

function handleItems(){
    if(event.target.id === "roster-title"){
        this.innerHTML = ""
        Roster.rosterForm.innerHTML = ""
        let roster = event.target.parentElement.parentElement.id
        Item.renderForm(roster)
        Item.backToRoster()
        itemService.getItems(roster)
        
    }
}

function handleItemSubmit() {
    event.preventDefault()
    let rosterId = event.target.dataset.id 
    itemService.createItem(rosterId)
    event.target.reset()
}

function handleItemDelete(){
    if(event.target.innerText === "Remove Item"){
        event.target.parentElement.parentElement.remove()
        itemService.deleteItem(event.target.parentElement.parentElement.id)
    }
}

function handleItemBought(){
    if(event.target.innerText === "Mark Bought"){
        itemService.itemBought(event.target.parentElement.parentElement.id)
        event.target.innerText = "Bought"
        event.target.className = "btn btn-success"
    } else if(event.target.innerText === "Bought"){
        itemService.itemBought(event.target.parentElement.parentElement.id)
        event.target.innerText = "Mark Bought"
        event.target.className = "btn btn-primary"
    }
}

function handleBack() {
    if(event.target.innerText === "Back To Rosters"){
        this.innerHTML = ""
        Item.itemForm.innerHTML = ""
        Item.all = []
        rosterService.getRosters()
        Roster.renderForm()
        Roster.allBoughtItems()
    }
}
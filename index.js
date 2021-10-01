const base_url = "https://safe-badlands-86660.herokuapp.com"
const rosterService = new RosterService(base_url)
const itemService = new ItemService(base_url)


Roster.rosterForm.addEventListener('submit', handleRosterSubmit)
Roster.rostersContainer.addEventListener('click', handleRosterDelete)
Roster.rostersContainer.addEventListener('click', handleItems)
Roster.rostersContainer.addEventListener('click', handleAllBought)
Roster.rostersContainer.addEventListener('click', handleRosterAdd)

Item.itemForm.addEventListener('submit', handleItemSubmit)
Item.itemsContainer.addEventListener('click', handleItemDelete)
Item.itemsContainer.addEventListener('click', handleItemBought)
Item.itemsContainer.addEventListener('click', handleBack)
Item.itemsContainer.addEventListener('click', handleItemAdd)

rosterService.getRosters()
Roster.allBoughtItems()
Roster.welcome()
Roster.header()

function handleRosterSubmit(){
    if (event.target.id === "new-roster-form"){
        event.preventDefault()
        rosterService.createRoster()
        event.target.reset() 
    }
}

function handleRosterDelete(){
    if(event.target.innerText === "Delete"){
        event.target.parentElement.parentElement.parentElement.remove()
        rosterService.deleteRoster(event.target.parentElement.parentElement.id)
    }
}

function handleAllBought() {
    if(event.target.innerText === "All Bought Items"){
        this.innerHTML = ""
        Roster.rosterForm.innerHTML = ""
        Roster.all = []
        Item.all = []
        Item.backToRoster()
        Item.allBoughtHeader()
        itemService.getItems()
    }
}

function handleRosterAdd() {
    if(event.target.tagName === 'IMG' && Roster.rosterForm.innerText === ""){
        Roster.renderForm()
    } else {
        Roster.rosterForm.innerHTML = ""
    }
}

function handleItems(){
    if(event.target.id === "roster-title"){
        this.innerHTML = ""
        Roster.rosterForm.innerHTML = ""
        let roster = event.target.parentElement.parentElement.id
        Item.backToRoster()    
        Item.header(roster)
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
        event.target.parentElement.parentElement.parentElement.remove()
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

function handleItemAdd() {
    if(event.target.tagName === 'IMG' && Item.itemForm.innerText === ""){
        let rosterId = event.target.parentElement.dataset.id
        Item.renderForm(rosterId)
    } else {
        Item.itemForm.innerHTML = ""
    }
}

function handleBack() {
    if(event.target.innerText === "Back To Rosters"){
        this.innerHTML = ""
        Item.itemForm.innerHTML = ""
        Item.all = []
        Roster.all = [] 
        rosterService.getRosters()
        Roster.allBoughtItems()
        Roster.welcome()
        Roster.header()
    }
}

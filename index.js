const base_url = "http://127.0.0.1:3000"
const rosterService = new RosterService(base_url)
const itemService = new ItemService(base_url)

Roster.rosterForm.addEventListener('submit', handleRosterSubmit)
Roster.rostersContainer.addEventListener('click', handleRosterDelete)
Roster.rostersContainer.addEventListener('click', handleItems)

rosterService.getRosters()
Roster.renderForm()

function handleRosterSubmit(){
    event.preventDefault()
    rosterService.createRoster()
    event.target.reset() 
}

function handleRosterDelete(){
    if(event.target.innerText === "Delete"){
        event.target.parentElement.remove()
        rosterService.deleteRoster(event.target.parentElement.id)
    }
}

function handleItems(roster){
    if(event.target.id === "roster-title"){
        this.remove()
        roster = event.target.parentElement
        itemService.getItems(roster)
    }
}
const base_url = "http://127.0.0.1:3000"
const rosterService = new RosterService(base_url)

Roster.rosterForm.addEventListener('submit', handleRosterSubmit)
Roster.rostersContainer.addEventListener('click', handleRosterDelete)

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
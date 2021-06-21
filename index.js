const base_url = "http://127.0.0.1:3000"
const rosterService = new RosterService(base_url)

Roster.rosterForm.addEventListener('submit', handleSubmit)

rosterService.getRosters()
Roster.renderForm()

function handleSubmit(){
    event.preventDefault()
    rosterService.createRoster()
    event.target.reset() 
}
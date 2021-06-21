const base_url = "http://127.0.0.1:3000"
const rosterService = new RosterService(base_url)

rosterService.getRosters()

Roster.renderForm()
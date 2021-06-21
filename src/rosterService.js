class RosterService {
    constructor(endpoint) {
        this.endpoint = endpoint
    }

    getRosters(){
        fetch(`${this.endpoint}/rosters`)
        .then(resp => resp.json())
        .then(rosters => {
            rosters.forEach(roster => {
                const r = new Roster(roster)
                r.appendRosterHTML()
            })
        })
    }

    createRoster(){
        const roster = {
            title: event.target.title.value
        }

        const configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(roster)
        }

        fetch(`${this.endpoint}/rosters`, configObj)
        .then(resp => resp.json())
        .then(roster => {
            const r = new Roster(roster)
            r.appendRosterHTML()
        })
    }

    deleteRoster(id){
        fetch(`${this.endpoint}/rosters/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(json => alert(json.message))
    }
}
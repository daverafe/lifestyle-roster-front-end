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
                r.appendToDom()
            })
        })
    }
}
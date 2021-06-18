class Roster {
    static all = []
    static rostersContainer = document.getElementById('rosters-container')

    constructor(title) {
        this.title = title 
        Roster.all.push(this)
    }

    rosterHTML() {
        Roster.rostersContainer.innerHTML += `
            <div>
                <h2>${this.title.title}</h2>
            </div>
        `
    }

    appendToDom() {
        Roster.rostersContainer.append(this.rosterHTML())
    }
}
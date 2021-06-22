class Roster {
    static all = []
    static rostersContainer = document.getElementById('rosters-container')
    static rosterForm = document.getElementById('form-container')

    constructor(title) {
        this.title = title 
        Roster.all.push(this)
    }

    appendRosterHTML() {
        Roster.rostersContainer.innerHTML += `
            <div id="${this.title.id}">
                <h2 id="roster-title">${this.title.title}</h2>
                <button>Delete</button>
            </div>
        `
        return Roster.rostersContainer
    }

    static renderForm(){
        Roster.rosterForm.innerHTML += `
        <form id="new-roster-form">
            <h4>Start A New Roster:</h4>
            <input type="text" id="title" placeholder="title">
            <input type="submit" value="create">
        </form>
        `
    }


}

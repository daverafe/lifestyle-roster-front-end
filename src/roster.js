class Roster {
    static all = []
    static rostersContainer = document.getElementById('rosters-container')
    static rosterForm = document.getElementById('form-container')

    constructor({id, title}) {
        this.id = id 
        this.title = title 
        Roster.all.push(this)
    }

    appendRosterHTML() {
        Roster.rostersContainer.innerHTML += `
            <div id="${this.id}" class="roster">
                <h2 id="roster-title">${this.title}</h2>
                <button type="button" class="btn btn-danger">Delete</button>
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

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
        <div class="col-sm">
            <div id="${this.id}" class="card">
                <div class="card-body">
                    <h2 id="roster-title">${this.title}</h2>
                    <button type="button" class="btn btn-danger">Delete</button>
                </div>
            </div>
        </div>
        `
        return Roster.rostersContainer
    }

    static renderForm(){
        Roster.rosterForm.innerHTML += `
        <form id="new-roster-form">
            <h4>Start A New Roster:</h4>
            <input type="text" id="title" placeholder="title">
            <button type="submit" class="btn btn-primary">Create</button>        
        </form>
        `
    }

    static allBoughtItems(){
        Roster.rostersContainer.innerHTML += `
            <div class="container">
                <button type="button" class="btn btn-secondary" id="back-bttn">All Bought Items</button> 
            </div>
        `
    }

    static header(){
        Roster.rostersContainer.innerHTML += `
            <div class="container">
                <h1>Rosters</h1>
            </div>
        `
    }


}

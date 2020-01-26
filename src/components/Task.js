import React, { Component } from 'react'

class Task extends Component {

    render() {
        return (
        <div className="task">
            <input type="checkbox" name="vehicle1" value="Bike"/>
            <code>{this.props.id}</code>
        </div>
        )
    }
}

export default Task

// <div className="task">
// <input type="checkbox" name="vehicle1" value="Bike"/>
// Database Table
// </div>
// <div className="command">
// <input type="checkbox" name="vehicle1" value="Bike"/>
// <div>MakeMigrations</div>
// </div>
// <div className="command">
// <input type="checkbox" name="vehicle1" value="Bike"/>
// <div>Migrate</div>
// </div>
// <div className="task">
// <div>API Endpoint</div>
// <input type="checkbox" name="vehicle1" value="Bike"/>
// </div>

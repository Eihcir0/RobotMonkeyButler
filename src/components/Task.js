import React, { Component } from 'react'

class Task extends Component {

    render() {
        let className = !this.props.parentEnabled || !this.props.enabled ? 'task dim' : 'task'
        return (
        <div className={className}>
                     <input type="checkbox" name={`${this.props.name}::enabled`} onClick={this.props.handleChange} checked={this.props['enabled']} value={this.props['enabled']}></input>
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

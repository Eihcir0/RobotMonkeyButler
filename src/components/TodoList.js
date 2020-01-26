import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Task from './Task'
import Process from './Process'


class TodoList extends Component {
    static propTypes = {
        todoList: PropTypes.array.isRequired,
        processes: PropTypes.object.isRequired,
        tasks: PropTypes.object.isRequired,
    }

    renderItem = (itemId) => {

        if (itemId in this.props.tasks) {
            const task = this.props.tasks[itemId]
            return <Task {...task}/>
        } else if (itemId in this.props.processes) {
            const process = this.props.processes[itemId]
            return <Process {...this.props} {...process}/>
        }
        else return (
            <div>
                Unrecognized ID in todo list! <code>{itemId}</code>
            </div>
        )
    }

    render() {
        let className = 'todo-list'
        if (!this.props.parentEnabled) className += ' dim'
        return (
            <div className={className}>
                {this.props.todoList.map((item, idx) => {
                    return this.renderItem(item)
                })}
            </div>
        )
    }
}

export default TodoList
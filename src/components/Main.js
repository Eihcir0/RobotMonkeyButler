import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TodoList from './TodoList'
import Project from './../config.json'

class Main extends Component {
    state = {
        processes: {},
        tasks: {},
        env: {},
        go_list: [],
    }

    componentDidMount() {
        this.setState(Project)
    }

    isProcess = id => id in this.state.processes

    handleChange = event => {
        const [ id, prop ] = event.target.name.split('.')
        console.log(id, prop)
        const table = this.isProcess(id) ? 'processes' : 'tasks'
        this.setState(prevState => {
            return {
                [table]: {
                    ...prevState[table],
                    [id]: {
                        ...prevState[table][id],
                        enabled: !prevState[table][id][prop],
                    }
                }
            }
        })
    }

    render() {
        const {
            processes,
            tasks,
            env,
            go_list,
        } = this.state
        console.log(Project)
        return (
            <div className="main">
                <TodoList
                    processes={processes}
                    tasks={tasks}
                    env={env}
                    todoList={go_list}
                    handleChange={this.handleChange}
                    parentEnabled
                />
            </div>
        )
    }
}

export default Main
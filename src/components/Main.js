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

    download = (data, filename, type) => {
        var file = new Blob([data], {type: type})
        var a = document.createElement("a")
        var url = URL.createObjectURL(file)
        a.href = url
        a.download = filename
        document.body.appendChild(a)
        a.click()
        setTimeout(function() {
            document.body.removeChild(a)
            window.URL.revokeObjectURL(url)
        }, 0)
    }

    save = () => {
        this.download(JSON.stringify(this.state), 'config.json', 'text/plain')
    }

    isProcess = id => id in this.state.processes

    handleChange = event => {
        const [ id, prop ] = event.target.name.split('::')
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
                <div className="center-container" style={{marginTop: '1rem', marginBottom: '1rem'}}>
                    Project Name: <input className="textbox" type='text' name='projectName' label='Project Name'/>
                </div>

                <TodoList
                    processes={processes}
                    tasks={tasks}
                    env={env}
                    todoList={go_list}
                    handleChange={this.handleChange}
                    parentEnabled
                />
                <div className="center-container">
                    <button onClick={this.save} className="save-button">Save</button>
                </div>
            </div>
        )
    }
}

export default Main
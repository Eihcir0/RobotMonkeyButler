import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import TodoList from './TodoList'
import { AiOutlineCaretRight, AiOutlineCaretLeft } from "react-icons/ai";
import Expand from "react-expand-animated";

const styles = {
    open: { background: "#ecf0f1" }
  };
const transitions = ["height" ];

class Process extends Component {
    state = {
        expanded: false,
        showProps: false,
    }
    static propTypes = {

    }

    handleExpand = () => {
        this.setState(prevState => ({ expanded: !prevState.expanded }))
    }

    render() {
        const { expanded } = this.state
        const caret = expanded ?  <AiOutlineCaretRight/> : <AiOutlineCaretLeft/>
        let className = !expanded ? 'process-expanded' : 'process'
        const disabled = (!this.props.parentEnabled || !this.props.enabled)
        if  (disabled) className += ' dim'
        const fieldName = 'enabled'
        return (
            <div className={className} key={this.props.id}>
                <Fragment>
                    <div className="left-side-process">
                        <div className="process-label">
                            <input type="checkbox" name={`${this.props.name}::${fieldName}`} onClick={this.props.handleChange} checked={this.props[fieldName]} value={this.props[fieldName]}></input>
                            <code>{this.props.id}</code>
                            <button className="caret" onClick={this.handleExpand}>{caret}</button>
                        </div>
                    </div>
                    <Expand
                        open={expanded}
                        duration={100}
                        styles={styles}
                        transitions={transitions}
                    >
                        <div className="right-side-process">
                            <TodoList
                                todoList={this.props.todo_list}
                                tasks={this.props.tasks}
                                processes={this.props.processes}
                                handleChange={this.props.handleChange}
                                parentEnabled={this.props.parentEnabled && this.props.enabled}
                            />
                        </div>
                    </Expand>

                </Fragment>
            </div>
        )
    }
}

export default Process
import React, { Component } from 'react'

class RepoItem extends Component {
    render() {
        const {repo} = this.props
        return (
            <div className="card">
                <h3>
                    <a href={repo.html_url}>{repo.name}</a>
                </h3>
            </div>
        )
    }
}

export default RepoItem

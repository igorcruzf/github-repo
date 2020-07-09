import React, {useState} from 'react'

import fetchRepos from '../service/reposApi'
import ReposList from './ReposList'

function ReposContainer() {

    const [repos, setRepos] = useState([])
    const [username, setUsername] = useState('')

    function changeHandler(evt){
        setUsername(evt.target.value);
    }

    function submitHandler(evt){
        evt.preventDefault();
        fetchRepos(username)
            .then(res => setRepos(res.data))
    }

    return (
    <div>
        <h1>Repos Container</h1>
        <form action="#" onSubmit={submitHandler}>
            <input
            onChange={changeHandler}
            style={{width:'250px'}}
            type="search"
            placeholder="Informe usuário e tecle ENTER"
            >
            </input>
        </form>
        {<ReposList repos={repos}/>}
    </div>
    )
}

export default ReposContainer;
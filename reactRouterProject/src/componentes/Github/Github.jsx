import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://api.github.com/users/kanix-1801')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(data);
            })
    }), []
    return (
        <div>
            <div>user name : {data.name}</div>
            <div>user_id : {data.login}</div>
            <img src={data.avatar_url} alt="avtar" />
        </div>
    )
}

export default Github

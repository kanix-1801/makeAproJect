import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/kanix-1801')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //             setData(data);
    //         })
    // }), []
    return (
        <div>
            <div>user name : {data.name}</div>
            <div>user_id : {data.login}</div>
            <img src={data.avatar_url} alt="avtar" />
        </div>
    )
}

export default Github
export const githubInfo = async () => {
    const response = await fetch('https://api.github.com/users/kanix-1801');
    return response.json();
}

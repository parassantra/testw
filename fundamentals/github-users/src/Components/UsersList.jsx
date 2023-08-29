import { useState } from "react"
import { useEffect } from "react"

const UsersList = () => {
    const [users, setUsers] = useState([])
    useEffect(()=>{
       const fetchUsers = async () => {
            try{
                const data = await fetch('https://api.github.com/users')
                const users = await data.json()
                setUsers(users)
            }catch(err){
                console.log(err)
            }
       }
       fetchUsers()
    }, [])
  return users.length === 0 ? ("Loading") : (
    <div>
        <ul>
        {
            users.map(user => (
                <li key={user.id} className="user">
                    <img src={user.avatar_url}/>
                    <div>
                        <h5>{user.login}</h5>
                        <a href={user.url}>Profile</a>
                    </div>
                </li>
            ))
        }
        </ul>
    </div>

  )
}

export default UsersList
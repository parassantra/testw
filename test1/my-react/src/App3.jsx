import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';

let url = `http://localhost:3000/users`;

const App3 = () => {
    const [page, setPage] = useState(1)
    const [data, setData] = useState(null)
    const [totalPages, setTotalPages] = useState(null)

    const fetchData = async () => {
        try{
            const res = await axios.get(`${url}?page=${page}`)
            console.log(res)
            setData(res.data.data)
            setTotalPages(res.data.totalPages)
        }
        catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        fetchData()
    }, [page])

    const nextPage = () => {
        setPage(page+1)
    }
    const prevPage = () => {
        setPage(page-1)
    }
    

    if(!data){
        return <div>Loading</div>
    }

    return (
        <div>
            {
                data.map(item=>{
                    return <div key={item.id}>{item.val}</div>
                })
            }
            <button
            disabled={page === 1}
            onClick={() => setPage(1)}
            >
                first
            </button>
            <button
            disabled={page === totalPages}
            onClick={() => nextPage()}
            >
                next
            </button>
            <button
            onClick={() => prevPage()}
            disabled={page === 1}
            >
                prev
            </button>
            <button
            disabled={page === totalPages}
            onClick={() => setPage(totalPages)}
            >
                last
            </button>
        </div>
    )
}

export default App3
import React from 'react'
import { FaTrashAlt } from "react-icons/fa";



function Body({ allitems, setallitems }) {


    function checbox(id) {


        let nwearray = allitems.map((items) => items.id === id ? { ...items, checked: !items.checked } : items)
        setallitems(nwearray)
        console.log("ggclick", nwearray)
        localStorage.setItem("todo_list",JSON.stringify(nwearray))


    }
    function del(id) {


        let nwearray2 = allitems.filter((items) => items.id != id)
        setallitems(nwearray2)
        localStorage.setItem("todo_list",JSON.stringify(nwearray2))



    }

    return (
        <div className='body'>




            {allitems.length ? <ul className='container'>
                {allitems.map((item) => (
                    // item.length?

                    <li className='box' key={item.id}>
                        <input type="checkbox"   checked={item.checked} onClick={() => checbox(item.id)} />
                        <p className='para'onDoubleClick={() => checbox(item.id)}  style={(item.checked==true)?{textDecoration:'line-through'}:null}>{item.details}</p>
                        <button className='btn_trash' onClick={() => del(item.id)}><FaTrashAlt role='button' tabIndex="0" /></button>


                    </li>
                ))}
            </ul> : <p className='para2'>Empty</p>}






        </div>
    )
}

export default Body

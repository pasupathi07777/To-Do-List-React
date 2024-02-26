import { useState,useRef,useEffect } from 'react';
import './App.css';
import Body from './components/body';
import Foooter from './components/foooter';
import Header from './components/header';
import Additems from './components/Additems';
import Searchcox from './components/searchcox';








function App() {

  let app_nanme = "to do list"
 

  // -------------------------------------

  let [allitems, setallitems] = useState(JSON.parse(localStorage.getItem("todo_list")) || [])
  let [input, setinput] = useState("")
  let [search, setsearch] = useState("")
  console.log(search)

  function create_box(a) {
    let id = allitems.length + 1
    console.log(id)
    let details = a
    let checked = false
    let arr = { id, details, checked }
    let arr2 = [...allitems, arr]
    




    setallitems(arr2)
    localStorage.setItem("todo_list",JSON.stringify(arr2))

  }
  useEffect(()=>{
    
    
  },[allitems])


  function prevent(e) {
    console.log("sumit")
    console.log(input)
    e.preventDefault()
    if (!input) return
    setinput("")
    create_box(input)
  }
  let footer_lines=`${allitems.length} items in list `



  return (
    <div className="App">
      <Header app_nanme={app_nanme} />
      
      <Additems input={input} setinput={setinput} prevent={prevent} />
      <Searchcox search={search} setsearch={setsearch} />

      <Body allitems={allitems.filter(item => (item.details).includes(search))} setallitems={setallitems} />
      <Foooter footer_lines={footer_lines} />

    </div>
  );
}

export default App;

// {id:1,checked:true,details:"play cricket"},{id:2,checked:false,details:"play cricket"}

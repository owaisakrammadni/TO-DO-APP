import React, { useState } from "react";
import reactDOM from "react-dom";
import css from  "./index.css" ;
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {button} from "react-bootstrap";

function App() {

  const [Data, setData] = useState([])
  React.useEffect(() => {
    const userData = localStorage.getItem('Data')
    if (userData) {
      setData(JSON.parse(userData))
    }
  }, [])

  React.useEffect(() => {
    localStorage.setItem('Data', JSON.stringify(Data))
  })
  function TodoApp(e) {
    e.preventDefault()

    var todoText = document.getElementById('TodoText').value
    if(todoText === ""){
      alert("some text ")
    }

    setData((previouseVlaue) => {
      return previouseVlaue.concat(todoText)
      
    })
    // var text = document.createElement('li')
    // text.innerHTML = todoText
    // document.getElementById('ListPost').innerHTML = text
  }

  const remove = (index) => {
    let todo = [...Data]
    todo.splice(index, 1)
    setData(todo)
  };





  return (
    <div  className="todoList">
      <form onSubmit={TodoApp} className="form">
      <h1><i>𝓣𝓞 𝓓𝓞 𝓛𝓘𝓢𝓣 𝓐𝓟𝓟</i></h1>
        <input type="text" id="TodoText" placeholder="Some Type" /><button class="btn btn-warning">add</button>
      </form>

      {Data.map((value, index) => {

        
        return (
          <div className="flex" key={index} >
            <p className="listText">{value}</p><button type="button" class="btn btn-primary"onClick={()=> remove(index)}>Clear</button>
            
          </div>
        )
      })}

    </div>
  )
}

reactDOM.render(<App />, document.getElementById('root'))
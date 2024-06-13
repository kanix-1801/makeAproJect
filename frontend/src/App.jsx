import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [jokes, setjokes] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/api')
      .then((response) => {
        // console.log(response.data)
        setjokes(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  })
  return (
    <>
      <h1>hello</h1>
      <p>jokes : {jokes.length}</p>
      {/* <p>jokes : {jokes.}</p> */}

      {
        jokes.map((joke, index) => {
          return (<div key={index}>
            <h4>{joke.setup}</h4>
            <h5>{joke.punchline}</h5>
          </div>)

        })
      }
    </>
  )
}

export default App

import ExpenseItem from "./components/ExpenseItem";

import { useEffect, useState } from 'react'

const App = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    fetch('http://localhost:8000/expense')
      .then((response) => response.json())
      .then((json) => {
        setData(json)
      })

  }, [])

  console.log(data)
  return (
    <div>

      <ExpenseItem data={data} />

    </div>
  )
}
export default App
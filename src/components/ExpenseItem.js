


const ExpenseItem = ({ data }) => {
    console.log(data)

    return (
        <div>
            <h1> This is the list Items </h1>
            <div>
                <ul>
                    {data.map(item => {
                        return (
                            <>
                                <li key={item.id}><a href=" "> {item.id} </a></li>
                                <li> Title {item.title} </li>
                                <li> Amount {item.amount} </li>
                                <li> Date {item.date} </li>
                            </>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}


export default ExpenseItem 

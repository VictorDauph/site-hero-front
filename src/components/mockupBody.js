import {useState, useEffect} from "react"

function MockupBody(props){
    const [emails,setEmails]=useState(props.datas)
    useEffect(()=>{
        setEmails(props.datas)
        console.log(emails)
    },[props.datas])

    return(
        <main className="container my-2">
            <table className="tableMail shadow">
                {/* Table header*/}
                <thead >
                    <tr>
                        <th>Expediteur</th>
                        <th>Objet</th>
                        <th>date</th>
                    </tr>
                </thead>
                {/* Table body*/}
                <tbody>
                    {emails?.map((email)=>(
                        <tr>
                            <td>{email.sender} </td>
                            <td>{email.object}</td>
                            <td>{email.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </main>
    )
}

export default MockupBody
import {useState, useEffect} from "react"

function EmailList(props){
    const [emails,setEmails]=useState(props.datas)

    //useEffect refresh the state when when props.datas is updated
    useEffect(()=>{
        sortByDate.then((sortedEmails)=>{setEmails(sortedEmails)})
        //setEmails(sortedEmails)
        //console.log(sortedEmails, emails)
    },[props.datas])

    //the emails must be sorted by date before beeing displayed
    const sortByDate= new Promise((resolve)=>{
             let datas=props.datas
            let sortedDatas=datas.sort((a,b)=>{
                return new Date(b.date) - new Date(a.date)
            })
            console.log("sortedDatas",sortedDatas)
            resolve(sortedDatas)
        })
    

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
                        <tr className={email.unread?"unread":null} key={email.key}> 
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

export default EmailList

//{ email.unread ? "className=font-weight-bold":null} key={email.key}
//{email.unread?"unread":null}
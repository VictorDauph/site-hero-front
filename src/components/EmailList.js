import {useState, useEffect,useContext} from "react"
import {EmailContext} from "../contexts/EmailContext"
import EmailListRow from "./EmailListRow"

function EmailList(){
    //the context is apply modifications on the emailList fetched in the email context
    const EmailCtx=useContext(EmailContext)
    const [emails,setEmails]=useState([])


    //useEffect refresh the state when when EmailCtx.emailList is updated
    useEffect(()=>{
        sortByDate.then((sortedEmails)=>{setEmails(sortedEmails)})
        //setEmails(sortedEmails)
        console.log("emails sorted", emails)
    },[EmailCtx.emailList])

    //the emails must be sorted by date before beeing displayed
    const sortByDate= new Promise((resolve)=>{
        if(EmailCtx.emailList){
            console.log("EmailCtx.emailList",EmailCtx.emailList)
            let datas=EmailCtx.emailList
            let sortedDatas=datas.sort((a,b)=>{
                return new Date(b.date) - new Date(a.date) 
            })
            console.log("sortedDatas",datas,sortedDatas)
            resolve(sortedDatas)
        }
        else{
            console.log("!EmailCtx.emailList",EmailCtx.emailList)
            resolve([])
        }
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
                {emails.map((email)=>(
                    <EmailListRow key={email.key} email={email}/>
                    ))}
                </tbody>
            </table>
        </main>
    )
}

export default EmailList


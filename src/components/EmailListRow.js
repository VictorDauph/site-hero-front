import { useState,useContext } from "react"
import {EmailContext} from "../contexts/EmailContext"
import { useNavigate } from "react-router-dom";

function EmailListRow({email}){
    const navigate = useNavigate()
    const EmailCtx= useContext(EmailContext)
    const [unread,setUnread]=useState(email.unread)
    let emailListTemp = EmailCtx.emailList
    const emailIndex = emailListTemp.indexOf(email)


    function ClickHandler(){
        //setUnread(false)
        EmailCtx.updateLoadedEmail(email)
        //we splice the email to read to remove it from the email list in the context and copy it in emailToRead
        let emailToRead= emailListTemp.splice(emailIndex,1)[0]
        //we set unread=false to the copied email
        emailToRead.unread=false
        //We put back the modified email in the context list, then the unread state is kept in memory by the react App
        emailListTemp.splice(emailIndex,0,emailToRead)
        EmailCtx.setEmailList(emailListTemp)
        console.log(unread,EmailCtx.loadedEmail,email.key)
        navigate("/email")
    }
    return(
        <tr className={EmailCtx.emailList[emailIndex].unread?"unread":null}  onClick={ClickHandler} > 
            <td>{email.sender} </td>
            <td>{email.object}</td>
            <td>{email.date}</td>
        </tr>
    )
}

export default EmailListRow

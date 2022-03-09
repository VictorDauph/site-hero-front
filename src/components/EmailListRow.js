import { useState,useContext } from "react"
import {EmailContext} from "../contexts/EmailContext"
import { useNavigate } from "react-router-dom";

function EmailListRow({email}){
    const navigate = useNavigate()
    const EmailCtx= useContext(EmailContext)
    const [unread,setUnread]=useState(email.unread)

    function ClickHandler(){
        setUnread(false)
        EmailCtx.setLoadedEmail(email)
        console.log(unread,EmailCtx.loadedEmail,email.key)
        navigate("/email")
    }
    return(
        <tr className={unread?"unread":null}  onClick={ClickHandler} > 
            <td>{email.sender} </td>
            <td>{email.object}</td>
            <td>{email.date}</td>
        </tr>
    )
}

export default EmailListRow

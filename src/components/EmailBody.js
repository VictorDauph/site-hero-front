import {useContext} from "react"
import { EmailContext } from "../contexts/EmailContext"

function EmailBody(){
    const EmailCtx=useContext(EmailContext)
    return(
        <div className="container">
            <h2>Email Body </h2>
            <p>{EmailCtx.loadedEmail.content}</p>
        </div>
    )
}

export default EmailBody
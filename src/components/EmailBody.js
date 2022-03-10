import {useContext} from "react"
import { EmailContext } from "../contexts/EmailContext"
import {Form} from "react-bootstrap"

function EmailBody(){
    const EmailCtx=useContext(EmailContext)
    return(
        <div className="container my-3">
            <h2>{EmailCtx.loadedEmail.object} </h2>
            <p> from <strong>{EmailCtx.loadedEmail.sender}</strong>  to me. sent <strong>{EmailCtx.loadedEmail.date}</strong></p>
            <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" rows={10} readOnly placeholder={EmailCtx.loadedEmail.content} id="email-body"/>
            </Form.Group>
            </Form>
        </div>
    )
}

export default EmailBody
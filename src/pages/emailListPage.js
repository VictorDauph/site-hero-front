import Header from "../components/header"
import EmailList from "../components/EmailList"

function EmailListPage(props){
    return(
        
        <div>
            <Header />
            <EmailList datas={props.datas} />
        </div>
    )
}

export default EmailListPage
import Header from "../components/header"
import MockupBody from "../components/mockupBody"

function MockupPage(props){
    return(
        
        <div>
            <Header />
            <MockupBody datas={props.datas} />
        </div>
    )
}

export default MockupPage
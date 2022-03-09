//Ce fichier sert à rendre disponibles les variables contextuelles liées à la gestion du light/dark theme.
import { createContext, useState, useEffect } from "react";
import fakeDatas from "../fakeDatas/fakeDatas.json"

export const EmailContext = createContext({
    emailList:[],
    loadedEmail:{},
    setLoadedEmail:()=>{}

})

export function EmailContextProvider(props){
    const [emailList,setEmailList]=useState([])
    const [loadedEmail,setLoadedEmail]=useState({})
    
    useEffect(()=>{
        setEmailList(fakeDatas.data)
        console.log("emailListContext",emailList)
    },[])
    

    
    const context ={
        emailList:emailList,
        loadedEmail:loadedEmail,
        setLoadedEmail:setLoadedEmail

    }

    return(<EmailContext.Provider value={context}> {/* Ce bout de code sert à passer le contenu de MovieFetchContext au reste du projet. */}
        {props.children}
    </EmailContext.Provider>);
}





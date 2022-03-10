//Ce fichier sert à rendre disponibles les variables contextuelles liées à la gestion du light/dark theme.
import { createContext, useState, useEffect } from "react";
import fakeDatas from "../fakeDatas/fakeDatas.json"

export const EmailContext = createContext({
    emailList:[],
    setEmailList:()=>{},
    loadedEmail:{},
    updateLoadEmail:()=>{},


})

export function EmailContextProvider(props){
    const [emailList,setEmailList]=useState([])
    const [loadedEmail,setLoadedEmail]=useState({})
    
    useEffect(()=>{
        //chargement de la liste d'emails au chargement de l'app
        setEmailList(fakeDatas.data)
        console.log("emailListContext",emailList)
        //chargement du loaded email depuis le local storage au chargement de l'app
        loadEmail.then((email)=>{setLoadedEmail(JSON.parse(email))})
    },[])

    const loadEmail= new Promise((resolve,reject)=>{
        resolve(localStorage.getItem("loadedEmail"))
        reject({})
    })
    
    function updateLoadedEmail(email){
        localStorage.setItem("loadedEmail",JSON.stringify(email))
        setLoadedEmail(email)
    }
    
    const context ={
        emailList:emailList,
        setEmailList:setEmailList,
        loadedEmail:loadedEmail,
        updateLoadedEmail:updateLoadedEmail,

    }

    return(<EmailContext.Provider value={context}> {/* Ce bout de code sert à passer le contenu de MovieFetchContext au reste du projet. */}
        {props.children}
    </EmailContext.Provider>);
}





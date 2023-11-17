'use client'
import { useContext, createContext, useState } from "react"
import { v4 as uuidv4 } from 'uuid'
import { useTranslations } from "next-intl"
import { Link, ProductType } from '../interfaces'
import data from '../server/data.json'

interface Props {
    mode : boolean,
    setMode : Function,
    links : Link[],
    menu : boolean,
    setMenu : Function,
    lng : string | null,
    products : ProductType[],
    setProducts : Function
}

const GlobalContext = createContext<Props>({
    mode : true,
    setMode : () => '',
    links : [],
    menu : false,
    setMenu : () => '',
    lng : '',
    products : [],
    setProducts : () => ''
})

export const GlobalContextProvider = ({ children } : any) => {
    const [mode, setMode] = useState(true);
    const [menu, setMenu] = useState(false)
    const [products, setProducts] = useState(data)  
    const t = useTranslations("Index")
    const lng = localStorage.getItem('locale')
    const links = [
        {
            id : uuidv4(),
            path : `/${lng}`,
            name : t("home"),
            active : true
        },
        {
            id : uuidv4(),
            path : `/${lng}/blog`,
            name : t("blog"),
            active : false
        },
        {
            id : uuidv4(),
            path : `/${lng}/contact`,
            name : t("contact"),
            active : false
        }
    ]
    return (
        <GlobalContext.Provider value={{ mode, setMode, links, menu, setMenu, lng, products, setProducts }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext)
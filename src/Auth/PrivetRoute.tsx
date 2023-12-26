import { ReactNode } from "react";
import { Navigate } from "react-router-dom";


interface IProps  {
    IsLogin: boolean;
    pathComponent:string
    children:ReactNode
}

const PrivetRoute = ({IsLogin,pathComponent,children}: IProps) => {

if(!IsLogin) return <Navigate to={pathComponent} />
    return children
}

export default PrivetRoute
import {Event} from "../pages/event"
import {Login} from "../pages/login"


export interface Iroute {
    path: string
    element: any
}



export enum Routes {
    LOGIN = "/Login",
    EVENT = "/"
}

export const PublicRoute: Iroute[] = [
    {path: Routes.LOGIN, element: Login}
]

export const PrivateRoute: Iroute[] = [
    {path: Routes.EVENT, element: Event}
]

// Если будут добавляться новые роуты - занести их в массив и мапов вывести в компоненте AppRouter
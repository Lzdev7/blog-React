import { Outlet } from "react-router-dom"
import { LaytoutContainer } from "./styles";

export function DefaultLayout() {
    return (
        <>
            <LaytoutContainer>
                <Outlet/>
            </LaytoutContainer>
        </>
    )
}
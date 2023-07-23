import { Nav } from "./menu";
import { HeaderContainer } from "./style";

export function Header() {
    return (
        <>
            <HeaderContainer>
                <div className="container">
                    <h1>LhzDev/</h1>
                    <Nav />
                </div>
            </HeaderContainer>
        </>
    )
}
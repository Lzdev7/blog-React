import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { Post } from "./pages/posts";
import { DefaultLayout } from "./layout/DefaultLayout";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout/>} >
                <Route path="/" element={<Home />} />
                <Route path="/posts" element={<Post />} />
            </Route>
        </Routes>
    )
}
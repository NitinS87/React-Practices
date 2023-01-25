import { Link, Outlet } from "react-router-dom";

//created a list of links for predefined books
//outlet - for rendering children elements
export function BookLayout() {
    const anchor = {
        "text-decoration": "none",
    }
    return (
        <>
            <Link to={"/books/1"} style={anchor}>Book 1</Link><br />
            <Link to={"/books/2"} style={anchor}>Book 2</Link><br />
            <Link to={"/books/new"} style={anchor}>New Book</Link>
            <Outlet />
        </>
    )
}
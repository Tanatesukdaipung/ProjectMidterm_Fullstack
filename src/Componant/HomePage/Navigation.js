import { useEffect, useState } from "react";
import GetCatagory from "../CategoryPage/CategoryDataComponant";
import {
     Navbar, Nav, NavLink, UncontrolledDropdown,
    DropdownToggle, DropdownMenu, DropdownItem
  } from 'reactstrap';
import { Link } from "react-router-dom";

export default function NavigationBar(){
    const [Categories , setData] = useState([]);
    useEffect(() => {
        let mounted =true;
        GetCatagory()
        .then(data => {
            if(mounted){
                setData(data)
            }
        })
        return () => mounted = false;
    },[])
    return(
        <Navbar>
                <Nav>
                    <NavLink href='/'>
                        HomePage
                    </NavLink>
                    <Link to="/Author" style={{ color: 'black', textDecoration: 'none' }}>
                        <NavLink>
                            AuthorPage
                        </NavLink>
                    </Link>
                    <UncontrolledDropdown>
                        <DropdownToggle
                            caret
                            nav
                        >
                        Category
                        </DropdownToggle>
                        <DropdownMenu right>
                            {Categories.map(data => <Link to={'/Category/' + data.id} style={{ color: 'black', textDecoration: 'none' }}><DropdownItem>{data.id}<p>{data.description}</p></DropdownItem></Link>)}
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
        </Navbar>
    )

}
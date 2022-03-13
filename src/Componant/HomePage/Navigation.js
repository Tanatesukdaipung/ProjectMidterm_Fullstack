import { useEffect, useState } from "react";
import GetCatagory from "../CategoryPage/CategoryDataComponant";
import {
     Navbar, Nav, NavLink, UncontrolledDropdown,
    DropdownToggle, DropdownMenu, DropdownItem
  } from 'reactstrap';

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
                    <NavLink href='/Author'>
                        AuthorPage
                    </NavLink>
                    <UncontrolledDropdown>
                        <DropdownToggle
                            caret
                            nav
                        >
                        Category
                        </DropdownToggle>
                        <DropdownMenu right>
                            {Categories.map(data => <DropdownItem href={'/Category/' + data.id} >{data.id}<p>{data.description}</p></DropdownItem>)}
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
        </Navbar>
    )

}
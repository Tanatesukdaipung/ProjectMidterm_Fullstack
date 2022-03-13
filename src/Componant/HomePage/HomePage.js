import {
    Container, Row, Col, Form, Input, Button, Navbar, Nav,
    NavbarBrand, NavLink, NavItem, UncontrolledDropdown,
    DropdownToggle, DropdownMenu, DropdownItem
  } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './Navigation';
import { useEffect, useState } from 'react';
import GetDataFromAPI from '../GetDataFromAPI';
import { Link } from 'react-router-dom';
import PostCard from '../PostContentPage/PostCard';

export default function HomePage() {
    const [post_data , setPostData] = useState([]);
    useEffect(() => {
        let mounted =true;
        GetDataFromAPI('https://fswd-wp.devnss.com/wp-json/wp/v2/posts?')
        .then(data => {
            if(mounted){
                setPostData(data)
            }
        })
        return () => mounted = false;
    },[])
    return(
          <Container>
                <Row>
                    <Col>
                        <h1>Homepage</h1>
                        <p>This is Home page</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <NavigationBar/>
                    </Col>
                </Row>
                <Row>
                    {post_data.map(data => <Col sm="2"><Link to={"/PostPage/"+data.id} style={{ color: 'black', textDecoration: 'none' }}> <PostCard id={data.id+""}/></Link></Col>)}
                </Row>
          </Container>
          
    )
}
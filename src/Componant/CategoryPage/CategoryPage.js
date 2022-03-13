import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import GetDataFromAPI from "../GetDataFromAPI";
import NavigationBar from "../HomePage/Navigation";
import PostCard from "../PostContentPage/PostCard";
export default function CategoryPage(){
    let {id} = useParams()
    console.log(id)
    const [data , setData] = useState([]);
    useEffect(() => {
        let mounted =true;
        GetDataFromAPI('https://fswd-wp.devnss.com/wp-json/wp/v2/Categories/', id+"")
        .then(data => {
            if(mounted){
                setData(data)
            }
        })
        return () => mounted = false;
    },[id])
    console.log(data)
    const [data_2 , setData_2] = useState([]);
    useEffect(() => {
        let mounted =true;
        GetDataFromAPI('https://fswd-wp.devnss.com/wp-json/wp/v2/posts?categories=', id+"")
        .then(data_2 => {
            if(mounted){
                setData_2(data_2)
            }
        })
        return () => mounted = false;
    },[id])
    console.log(data_2)
    var posts_list = data_2.map((data_2) => <Col sm="2"><Link to={"/PostPage/"+data_2.id}style={{ color: 'black', textDecoration: 'none' }}><PostCard id ={data_2.id+""}/></Link></Col>)
    return(
        <Container>
            <Row>
                <Col>
                    <h1>CategoryPage</h1>
                    <NavigationBar/>
                    <p>{data.description}</p>
                    <ul>
                        <li>ID: {id}</li>
                    </ul>
                </Col>
            </Row>
            <Row>
                {posts_list}
            </Row>
        </Container>
    )
}
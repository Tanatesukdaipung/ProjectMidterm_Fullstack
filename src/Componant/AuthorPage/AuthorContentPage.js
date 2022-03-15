import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import GetDataFromAPI from "../GetDataFromAPI";
import NavigationBar from "../HomePage/Navigation";
import PostCard from "../PostContentPage/PostCard";

export default function AuthorContentPage(){
    let {id} = useParams();
    const [data , setData] = useState([]);
    const [img_url , setImgUrl] = useState([])
    useEffect(() => {
        let mounted =true;
        GetDataFromAPI('https://fswd-wp.devnss.com/wp-json/wp/v2/users/',  id+"")
        .then(data => {
            if(mounted){
                setData(data)
                setImgUrl(data.avatar_urls["96"])
            }
        })
        return () => mounted = false;
    },[id])
    const [post_data , setPostData] = useState([]);
    useEffect(() => {
        let mounted =true;
        GetDataFromAPI('https://fswd-wp.devnss.com/wp-json/wp/v2/posts?author=',  id+"")
        .then(data => {
            if(mounted){
                setPostData(data)
            }
        })
        return () => mounted = false;
    },[id])
    console.log(post_data)
    return(
        <Container>
            <Row>
                <h1>AuthorPage</h1>
            </Row>
            <NavigationBar/>
            <Row>
                <Col>
                    <img src={img_url} alt="Profile"/>
                </Col>
                <Col sm="10">
                    <h1>{data.name}</h1>
                    <p>description: {data.description}</p>
                </Col>
            </Row>
            <Row>
                <h2>Post By {data.name}</h2>
                {post_data.map(data => <Col sm="2"><Link to={"/PostPage/"+data.id} style={{ color: 'black', textDecoration: 'none' }}> <PostCard id={data.id+""}/></Link></Col>)}
            </Row>

        </Container>
    )
}
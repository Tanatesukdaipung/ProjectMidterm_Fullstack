import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row } from "reactstrap";
import GetDataFromAPI from "../GetDataFromAPI";
import NavigationBar from "../HomePage/Navigation";
import AuthorPageCard from "./AuthorPageCard";

export default function AuthorPage(){
    
    const [data , setData] = useState([]);
    useEffect(() => {
        let mounted =true;
        GetDataFromAPI('https://fswd-wp.devnss.com/wp-json/wp/v2/users')
        .then(data => {
            if(mounted){
                setData(data)
            }
        })
        return () => mounted = false;
    },[])
    console.log(data)
    var list_id = data.map((data) =><Link to={"/Author/"+data.id} style={{ color: 'black', textDecoration: 'none' }}> <AuthorPageCard id = {data.id}/></Link>)
    return(
        <Container>
            <Row>
                <h1>AuthorPage</h1>
            </Row>
            <Row>
                <NavigationBar/>
            </Row>
            <Row width="10%">
                {list_id}
            </Row>
        </Container>
    )
}
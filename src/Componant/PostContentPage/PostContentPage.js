import { Col, Container,Row } from "reactstrap";
import NavigationBar from "../HomePage/Navigation";
import GetPostContant from "./GetPostContant";
import PostCard from "./PostCard";

export default function PostContentPage(){
    return(
        <Container>
            <Row>
                <h1>PostContentPage</h1>
                <NavigationBar/>
                <GetPostContant />
            </Row>
        </Container>
    )
}
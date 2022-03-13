import { useEffect, useState } from "react";
import { Card, CardBody, CardHeader, CardImg, CardSubtitle, CardTitle, Col, Row } from "reactstrap";
import GetDataFromAPI from "../GetDataFromAPI";
import PropTypes from 'prop-types'

export default function AuthorPageCard({id}){
    AuthorPageCard.propTypes = {
        id: PropTypes.string.isRequired
    }
    AuthorPageCard.defaultProps = {
        id : "1"
    }
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
    return(
                <Card>
                    <CardBody>
                        <Row>
                        <Col sm="2">
                            <CardImg top width="100%" src={img_url} alt="Card image cap"></CardImg>
                        </Col>
                        <Col>
                        <CardHeader>
                            {data.name}
                        </CardHeader>
                            <CardTitle>ID: {data.id}</CardTitle>
                            <CardSubtitle>description: {data.description}</CardSubtitle>
                        </Col>
                        </Row>
                    </CardBody>
                </Card>
    )
}
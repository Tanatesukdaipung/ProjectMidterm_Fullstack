import PropTypes from 'prop-types'
import { useEffect, useState } from 'react';
import { Card, CardBody, CardHeader, CardTitle } from 'reactstrap';
import GetDataFromAPI from '../GetDataFromAPI';

export default function PostCard({id}){
    PostCard.propTypes = {
        id: PropTypes.string.isRequired
    }
    PostCard.defaultProps = {
        id:"395"
    }
    const [data , setData] = useState([]);
    const [title_render , setTitle] = useState([]);
    useEffect(() => {
        let mounted =true;
        GetDataFromAPI('https://fswd-wp.devnss.com/wp-json/wp/v2/posts/',  id+"")
        .then(data => {
            if(mounted){
                setData(data)
                setTitle(data.title.rendered)
            }
        })
        return () => mounted = false;
    },[id])
    return(
            <Card>
                <CardBody>
                    <CardHeader>{data.id}</CardHeader>
                    <CardTitle>{title_render}</CardTitle>
                </CardBody>
            </Card>
    )
}
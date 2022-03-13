import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import { Col } from "reactstrap";
import GetDataFromAPI from "../GetDataFromAPI";

export default function GetPostContant(){
    let {id} = useParams();
    console.log(id)
    const [data_api, setData] = useState([]);
    const [Title_name, setTitle] = useState([]);
    const [normalData, setNormalData] = useState([]);
    useEffect(() => {
        let mounted = true;
        GetDataFromAPI('https://fswd-wp.devnss.com/wp-json/wp/v2/posts/' , id+"")
        .then(data => {
            if(mounted){
                setData(data.content.rendered)
                setTitle(data.title.rendered)
                setNormalData(data)
            }
        })
        return () => mounted = false;
    },[id])
    console.log(data_api)
    console.log(Title_name)
    return (
        <Col>
            <h2>{Title_name}</h2>
            <p>By <Link to={"/Author/" + normalData.author}>ID:{normalData.author}</Link></p>
            <div dangerouslySetInnerHTML={{__html: data_api}}/>
        </Col>
    )
}

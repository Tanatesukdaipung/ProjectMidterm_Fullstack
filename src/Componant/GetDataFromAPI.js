export default function GetDataFromAPI(url, param1="", param2="", param3=""){
    return fetch(url + param1 + param2 + param3)
    .then(data => data.json())
}
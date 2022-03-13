
export default function GetCatagory(id=""){
  return fetch('https://fswd-wp.devnss.com/wp-json/wp/v2/Categories/'+id)
  .then(data => data.json())
}

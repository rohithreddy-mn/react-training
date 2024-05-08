import { useParams } from "react-router-dom";


function Edit({datatable}){
    const params = useParams();
    const userid = params.userid;
    console.log(datatable);
    return(
        <h4>User Data:{userid}</h4>
    )
}

export default Edit;
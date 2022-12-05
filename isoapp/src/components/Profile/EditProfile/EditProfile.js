import EditBasicInfo from "./EditBasicInfo";
import EditServiceInfo from "./EditServiceInfo";
function EditProfile(){
    var isProvider = true;
    return(
        <div>
        {isProvider ? (
            <div>
                <EditBasicInfo/>
                <EditServiceInfo/>
            </div>
        ):
        <div>
            <EditBasicInfo/> 
        </div>
        }
        </div>
    )
}
export default EditProfile;
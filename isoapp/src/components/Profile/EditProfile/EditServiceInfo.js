import EditPhoto from "./EditPhoto";
import EditServiceBasic from "./EditServiceBasic";
function EditServiceInfo(){
    return(
        <div className="d-flex flex-column mt-5">
            <h3 className="text-center">Services</h3>
            <div class="d-flex flex-column w-100 mt-3">
                <h4 class="text-center">Images</h4>
                <EditPhoto></EditPhoto>
                <h4 class="text-center mt-3 mb-0">Basic Info</h4>
                <EditServiceBasic/>
            </div>
        </div>
    )
}
export default EditServiceInfo;
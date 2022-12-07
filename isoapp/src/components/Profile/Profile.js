import BasicInfo from "./ProfileBasicInfo";
import ServiceInfo from "./ServiceInfo";

function Profile() {
    var isProvider = true;
    return(
        <div>
            {isProvider ? (
                <div>
                    <BasicInfo/>
                    <ServiceInfo/>
                </div>
            ):
            <div>
                <BasicInfo/>
            </div>
            }
        </div>
    )
}

export default Profile;
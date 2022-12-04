import styled, { css } from 'styled-components'

function EditPhoto() {
    var isFavorite1 = true;
    var isFavorite2 = false;
    var isFavorite3 = false;
    var isFavorite4 = false;

    return(
        <div className="d-flex justify-content-center flex-wrap">
            <Container>
                <Main_image src="/photographer.jpg" width="150" height="150" className="mx-3 mb-3"/>
                {isFavorite1 ? (
                    <div>
                        <a><Overlay_Star src="/285661_star_icon.png" height="20"/></a>
                    </div>
                ):
                    <div>
                        <a><Overlay_Star src="/216469_star_icon.png" height="20"/></a>
                    </div>
                }
                {/* <div>
                    <a><Overlay_Star src="/1398917_circle_close_incorrect_invalid_icon.png" height="20"/></a>
            </div> */}
            </Container>
            <Container>
                <Main_image src="/photographer.jpg" width="150" height="150" className="mx-3 mb-3"/>
                {isFavorite2 ? (
                    <div>
                        <a><Overlay_Star src="/285661_star_icon.png" height="20"/></a>
                    </div>
                ):
                    <div>
                        <a><Overlay_Star src="/216469_star_icon.png" height="20"/></a>
                    </div>
                }
            </Container>
            <Container>
                <Main_image src="/photographer.jpg" width="150" height="150" className="mx-3 mb-3"/>
                {isFavorite3 ? (
                    <div>
                        <a><Overlay_Star src="/285661_star_icon.png" height="20"/></a>
                    </div>
                ):
                    <div>
                        <a><Overlay_Star src="/216469_star_icon.png" height="20"/></a>
                    </div>
                }
            </Container>
            <Container>
                <Main_image src="/AddPhoto.PNG" width="150" height="150" className="mx-3 mb-3"/>
                {isFavorite4 ? (
                    <div>
                        <a><Overlay_Star src="/285661_star_icon.png" height="20"/></a>
                    </div>
                ):
                    <div>
                        <a><Overlay_Star src="/216469_star_icon.png" height="20"/></a>
                    </div>
                }
            </Container>
            
        </div>
    )
}

export default EditPhoto;

const Container = styled.div`
    position: relative;
    width: 150px;
    height: 150px;
`
const Main_image = styled.img`
    width: 100%;
    height: 100%;
`
const Overlay_Star = styled.img`
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 30px;
    height: 30px;
`
const Overlay_Delete = styled.img`
    position: absolute;
    bottom: 4px;
    right: 4px;
    width: 30px;
    height: 30px;
`
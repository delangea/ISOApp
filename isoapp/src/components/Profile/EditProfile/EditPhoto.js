//import styled, { css } from 'styled-components'

export default function EditPhoto({picNum}) {
    return(
        <div className="d-flex align-items-center justify-content-center mb-2">
            <input type="text" className="form-control w-50 mx-2" />
            <button type="button" className="btn btn-primary bg-blue me-2">Save</button>
        </div>
    )
}


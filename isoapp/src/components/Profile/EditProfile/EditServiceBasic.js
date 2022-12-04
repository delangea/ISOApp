function EditServiceBasic(){
    return(
        <div>
            <div className="mx-2 mt-3" style={{display: "grid", gridTemplateColumns: ".25fr 1.5fr", gridTemplateRows: "auto", gridColumnGap: ".5rem", gridRowGap: ".5rem"}}>
                    <b>Experience (in years):</b>
                    <input className="form-control" type="number" step="0.1" min="0"/>
                    <b>Bio:</b>
                    <textarea className="form-control"></textarea>
                    <b>Price Range:</b>
                    <div class="d-flex align-items-center">
                        <h3 class="mb-0 mx-1">$</h3>
                        <input className="form-control" type="number" min="0"/>
                        <h2 class="mb-0 mx-1">-</h2>
                        <h3 class="mb-0 mx-1">$</h3>
                        <input className="form-control" type="number" min="0"/>
                    </div>
                    <b>Price Description:</b>
                    <textarea className="form-control"></textarea>
                    <b>Contact Info:</b>
                    <textarea className="form-control"></textarea>
                </div>
                <div class="d-flex justify-content-center p-4">
                    <button className="btn btn-primary bg-blue me-2">Save</button>
                    <button className="btn btn-danger bg-red">Cancel</button>
                </div>
        </div>
    )
}
export default EditServiceBasic;
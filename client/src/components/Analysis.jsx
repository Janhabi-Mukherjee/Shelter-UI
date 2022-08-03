import React from "react";
import '../css/Analysis.css'
import Heading from "./Heading";

function Analysis(){
    return(
        <>
            <Heading/>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dolorum aut facere veniam alias repellendus commodi ullam nostrum, explicabo illum cumque incidunt quaerat similique qui placeat illo eius voluptatem id?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A maiores cumque, perferendis molestiae temporibus ullam quod neque eveniet nemo tenetur ad. Beatae enim fugit sapiente expedita soluta, ullam delectus magnam!
            </p>
            <form className="queryForm">
                <div class="input-group mb-3">
                <label class="input-group-text" for="inputGroupSelect01">Queries</label>
                <select class="form-select" id="inputGroupSelect01">
                    <option>Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                </div>
                <button type="submit" className="btn btn-primary btnLogin">Submit</button>
            </form>
        </>
    )
}
export default Analysis;
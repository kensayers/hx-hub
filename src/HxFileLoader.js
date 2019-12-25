import React from 'react';

function FileLoader(props) {

    function onChangeHandler(event) {

        var file = event.target.files[0];
        var reader = new FileReader();
        reader.onload = handleFileRead;

        reader.readAsText(file);

    };

    function handleFileRead(e) {
        props.onUploadCompleted(JSON.parse(JSON.stringify(e.target.result)));
    };

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <form method="post" action="#" id="#">
                      <div className="form-group files">
                            <label>Upload Your File </label>
                            <input type="file" className="form-control" multiple="" onChange={onChangeHandler}/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default FileLoader;
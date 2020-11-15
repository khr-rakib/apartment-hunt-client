import React from 'react';
import UploadIcon from '../../assets/icons/upload-icon.png'

const AddHouse = () => {
    return (
        <div className="order__form row">
            <div className="col-md-6">
                <div className="form-group">
                    <label htmlFor="title">Service Title</label>
                    <input placeholder="Service Title" type="text" className="form-control" />
                </div>
            </div>
            <div className="col-md-6">
                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input placeholder="Price" type="text" className="form-control" />
                </div>
            </div>
            <div className="col-md-6">
                <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <input placeholder="Location" type="text" className="form-control" />
                </div>
            </div>
            <div className="col-md-6">
                <div className="form-group">
                    <label htmlFor="bedroom">Number of Bedroom</label>
                    <input placeholder="Number of bedroom" id="bedroom" type="number" className="form-control" />
                </div>
            </div>
            <div className="col-md-6">
                <div className="form-group">
                    <label htmlFor="bathroom">Number of Bathroom</label>
                    <input placeholder="Number of bathroom" id="bathroom" type="number" className="form-control" />
                </div>
            </div>
            <div className="col-md-6">
                <div className="form-group">
                    <label htmlFor="bathroom">Number of Bathroom</label>
                    <div className="uploadBtn__area">
                        <input style={{ display: "none" }} type="file" accept="image/*" id="imageUpload" />
                        <label htmlFor="imageUpload">
                            <span className="upload__btn">
                                <img src={UploadIcon} alt="" style={{ height: "25px", marginRight: "10px" }} />
                                Upload project file
                             </span>
                        </label>
                    </div>
                </div>
            </div>

            <button type="button" className="app__btn ml-auto mt-4">Submit</button>
        </div>
    );
};

export default AddHouse;
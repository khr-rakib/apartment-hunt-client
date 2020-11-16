import React from 'react';

const MyRent = () => {
    return (
        <div style={{ background: "white" }}>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">House Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">KH Rakib</th>
                        <td>khr.rakib@gmail.com</td>
                        <td>
                            <button className="app__btn myRentBtn">View Details</button>
                        </td>
                    </tr>

                    <tr>
                        <th scope="row">KH Rakib</th>
                        <td>khr.rakib@gmail.com</td>
                        <td>
                            <button className="app__btn myRentBtn">View Details</button>
                        </td>
                    </tr>

                    <tr>
                        <th scope="row">KH Rakib</th>
                        <td>khr.rakib@gmail.com</td>
                        <td>
                            <button className="app__btn myRentBtn">View Details</button>
                        </td>
                    </tr>

                    <tr>
                        <th scope="row">KH Rakib</th>
                        <td>khr.rakib@gmail.com</td>
                        <td>
                            <button className="app__btn myRentBtn">View Details</button>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    );
};

export default MyRent;
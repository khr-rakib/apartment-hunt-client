import React from 'react';

const BookingList = () => {
    return (
        <div style={{ background: "white" }}>
            <table className="table table-striped table-responsive">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email ID</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Message</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">KH Rakib</th>
                        <td>khr.rakib@gmail.com</td>
                        <td>+8801779968783</td>
                        <td>hi this is a test message</td>
                        <td>
                            <select className="border border-light">
                                <option value="Pending"> Pending</option>
                                <option value="Done">Done</option>
                            </select>
                        </td>
                    </tr>

                    <tr>
                        <th scope="row">KH Rakib</th>
                        <td>khr.rakib@gmail.com</td>
                        <td>+8801779968783</td>
                        <td>hi this is a test message</td>
                        <td>
                            <select className="border border-light">
                                <option value="Pending"> Pending</option>
                                <option value="Done">Done</option>
                            </select>
                        </td>
                    </tr>

                    <tr>
                        <th scope="row">KH Rakib</th>
                        <td>khr.rakib@gmail.com</td>
                        <td>+8801779968783</td>
                        <td>hi this is a test message</td>
                        <td>
                            <select className="border border-light">
                                <option value="Pending"> Pending</option>
                                <option value="Done">Done</option>
                            </select>
                        </td>
                    </tr>

                    <tr>
                        <th scope="row">KH Rakib</th>
                        <td>khr.rakib@gmail.com</td>
                        <td>+8801779968783</td>
                        <td>hi this is a test message</td>
                        <td>
                            <select className="border border-light">
                                <option value="Pending"> Pending</option>
                                <option value="Done">Done</option>
                            </select>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    );
};

export default BookingList;
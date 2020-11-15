import React from 'react';
import logo from "../assets/logo.png"
import { Link, NavLink, Route, Switch, useRouteMatch } from 'react-router-dom';

import PlusIcon from '../assets/icons/plus-icon.png'
import HomeIcon from '../assets/icons/home-icon.png'
import BookingListIcon from '../assets/icons/booking-list-icon.png'

import BookingList from '../components/BookingList/BookingList';
import AddHouse from '../components/AddHouse/AddHouse';
import MyRent from '../components/MyRent/MyRent';

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    return (
        <div className="customer__area">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="customer__area__left">
                            <div className="customer__area__left__top">
                                <Link to="/">
                                    <img src={logo} alt="" />
                                </Link>
                            </div>
                            <div className="customer__area__left__bottom">
                                {
                                    true ?
                                        <div>
                                            <NavLink activeStyle={{ color: "#009444", fontWeight: "bold" }} to={`${url}/booking-list`}>
                                                <img src={BookingListIcon} alt="" /> Booking List
                                            </NavLink>
                                            <NavLink activeStyle={{ color: "#009444", fontWeight: "bold" }} to={`${url}/add-house`}>
                                                <img src={PlusIcon} alt="" /> Add House
                                            </NavLink>
                                            <NavLink activeStyle={{ color: "#009444", fontWeight: "bold" }} to={`${url}/my-rent`}>
                                                <img src={HomeIcon} alt="" /> My Rent
                                            </NavLink>
                                        </div>
                                        :
                                        <div>
                                            <NavLink activeStyle={{ color: "#009444", fontWeight: "bold" }} to={`${url}/my-rent`}>
                                                My Rent
                                            </NavLink>
                                        </div>
                                }
                            </div>
                        </div>
                    </div>

                    <div className="col-md-9">
                        <div className="customer__area__right">
                            <div className="customer__area__right__top">
                                <div>Dashboard</div>
                                <div>username</div>
                            </div>
                            <div className="customer__area__right__bottom">
                                <Switch>
                                    <Route exact path={`${path}/booking-list`}>
                                        <BookingList />
                                    </Route>

                                    <Route exact path={`${path}/add-house`}>
                                        <AddHouse />
                                    </Route>

                                    <Route exact path={`${path}/my-rent`}>
                                        <MyRent />
                                    </Route>
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;
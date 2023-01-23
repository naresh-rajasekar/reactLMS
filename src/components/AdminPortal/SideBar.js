import React from "react";
import { Link } from "react-router-dom";

export default function Admin() {
  return (
    <div>
      {/* <!-- Sidebar --> */}
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        {/* <!-- Sidebar - Brand --> */}
        <div className="sidebar-brand d-flex align-items-center justify-content-center">
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
          </div>
          <div className="sidebar-brand-text mx-3">AskLeave</div>
        </div>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider my-0" />

        {/* <!-- Nav Item - Dashboard --> */}
        <li className="nav-item active">
          <Link to="/all-users">
            <div className="nav-link">
              <i className="fas fa-fw fa-tachometer-alt"></i>
              <span>All Users</span>
            </div>
          </Link>
        </li>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider" />

        {/* <!-- Nav Item - Pages Collapse Menu --> */}
        <li className="nav-item">
          <Link to="/add-user">
            <div
              className="nav-link collapsed"
              data-toggle="collapse"
              data-target="#collapseTwo"
              aria-expanded="true"
              aria-controls="collapseTwo"
            >
              <i className="fas fa-fw fa-cog"></i>
              <span>Pending Request</span>
            </div>
          </Link>
        </li>

        {/* <!-- Nav Item - Utilities Collapse Menu --> */}
        <li className="nav-item">
          <Link to="/nested-route-example">
            <div
              className="nav-link collapsed"
              data-toggle="collapse"
              data-target="#collapseUtilities"
              aria-expanded="true"
              aria-controls="collapseUtilities"
            >
              <i className="fas fa-check"></i>
              <span>Approved Request</span>
            </div>
          </Link>
        </li>
        <hr className="sidebar-divider" />

        <li className="nav-item">
          <Link to="/hooks">
            <div
              className="nav-link collapsed"
              data-toggle="collapse"
              data-target="#collapseUtilities"
              aria-expanded="true"
              aria-controls="collapseUtilities"
            >
              <i className="fas fas fa-ban"></i>
              <span>Rejected Request</span>
            </div>
          </Link>
        </li>
        <hr className="sidebar-divider" />
      </ul>
    </div>
  );
}

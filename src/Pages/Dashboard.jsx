import React from 'react';
import { useSelector } from 'react-redux';
import Orders from '../Components/Orders';

function Dashboard() {
  // Redux store se dynamic orders array nikal rahe hain
  const orders = useSelector((state) => state.orders.orders) || [];

  // Dynamic calculations for top stats cards
  const totalOrders = orders.length;

  const totalRevenue = orders.reduce((sum, order) => sum + (order.totalAmount || 0), 0);

  const pendingOrders = orders.filter((order) => order.status === 'Pending').length;

  return (
    <div className="container py-4">
      <h2 className="fw-bold mb-4">Admin Dashboard</h2>
      
      {/* Top Dynamic Stats Cards */}
      <div className="row g-3 mb-4">
        <div className="col-md-4">
          <div className="card bg-primary text-white p-3 border-0 shadow-sm">
            <h5>Total Orders</h5>
            <h3 className="fw-bold">{totalOrders}</h3>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card bg-success text-white p-3 border-0 shadow-sm">
            <h5>Total Revenue</h5>
            <h3 className="fw-bold">${totalRevenue.toFixed(2)}</h3>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card bg-warning text-dark p-3 border-0 shadow-sm">
            <h5>Pending Orders</h5>
            <h3 className="fw-bold">{pendingOrders}</h3>
          </div>
        </div>
      </div>

      {/* Dynamic Orders Component Call */}
      <Orders />
    </div>
  );
}

export default Dashboard;
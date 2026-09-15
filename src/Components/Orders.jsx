import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateOrderStatus } from '../features/orders/ordersSlice';

function Orders() {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.orders) || [];

  const handleStatusChange = (id, newStatus) => {
    dispatch(updateOrderStatus({ id, newStatus }));
  };

  const getBadgeColor = (status) => {
    switch (status) {
      case 'Completed':
      case 'Delivered':
        return 'bg-success';
      case 'Processing':
        return 'bg-info text-dark';
      case 'Cancelled':
        return 'bg-danger';
      default:
        return 'bg-warning text-dark'; // Pending
    }
  };

  return (
    <div className="card shadow-sm border-0">
      <div className="card-header bg-white py-3">
        <h5 className="mb-0 fw-bold">Customer Orders</h5>
      </div>
      <div className="card-body p-0">
        {orders.length === 0 ? (
          <div className="p-4 text-center text-muted">
            <h5>No orders placed yet!</h5>
            <p className="mb-0">When customers place an order, it will appear here.</p>
          </div>
        ) : (
          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0">
              <thead className="table-light">
                <tr>
                  <th>Order ID</th>
                  <th>Customer Name</th>
                  <th>Items Included</th>
                  <th>Date</th>
                  <th>Total Bill</th>
                  <th>Current Status</th>
                  <th>Update Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id}>
                    <td className="fw-bold">#{order.id}</td>
                    <td className="fw-semibold text-primary">{order.userName}</td>
                    <td>
                      <ul className="list-unstyled mb-0 small">
                        {order.items?.map((item, idx) => (
                          <li key={idx}>
                            • {item.title} (x{item.quantity})
                          </li>
                        ))}
                      </ul>
                    </td>
                    <td>{order.date}</td>
                    <td className="text-success fw-bold">${order.totalAmount?.toFixed(2)}</td>
                    <td>
                      <span className={`badge ${getBadgeColor(order.status)}`}>
                        {order.status}
                      </span>
                    </td>
                    <td>
                      <select
                        className="form-select form-select-sm w-auto"
                        value={order.status}
                        onChange={(e) => handleStatusChange(order.id, e.target.value)}
                      >
                        <option value="Pending">Pending</option>
                        <option value="Processing">Processing</option>
                        <option value="Completed">Completed</option>
                        <option value="Cancelled">Cancelled</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default Orders;
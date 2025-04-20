import React from 'react';
import { NavLink } from 'react-router-dom';

const AdminDashboard = () => {
    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            background: 'linear-gradient(to right, #fff1eb, #ace0f9)',
            fontFamily: 'Poppins, sans-serif'
        }}>
            {/* Sidebar */}
            <div style={{
                width: '250px',
                background: 'linear-gradient(to bottom, #f43f5e, #f97316)',
                color: '#fff',
                padding: '30px 20px',
                boxShadow: '4px 0 12px rgba(0,0,0,0.1)'
            }}>
                <h4 className="fw-bold mb-4">💸 Admin Panel</h4>
                <ul className="nav flex-column gap-3">
                    <li><NavLink className="text-white text-decoration-none" to="#">🏠 Dashboard</NavLink></li>
                    <li><NavLink className="text-white text-decoration-none" to="#">📥 Pemasukan</NavLink></li>
                    <li><NavLink className="text-white text-decoration-none" to="#">📤 Pengeluaran</NavLink></li>
                    <li><NavLink className="text-white text-decoration-none" to="#">📊 Laporan</NavLink></li>
                    <li><a className="text-white text-decoration-none" href="/home">🚪 Logout</a></li>
                </ul>
            </div>

            {/* Content */}
            <div className="p-5 flex-grow-1">
                <h2 className="fw-bold text-danger">Dashboard Keuangan</h2>
                <p className="text-secondary">Selamat datang kembali, Admin Chicken Sizzle! 🐔💼</p>

                <div className="row mt-4">
                    <div className="col-md-4">
                        <div className="rounded-4 p-4 shadow-lg text-white"
                            style={{
                                background: 'linear-gradient(135deg, #16a34a, #22c55e)',
                                boxShadow: '0 8px 24px rgba(34, 197, 94, 0.3)'
                            }}>
                            <h5 className="fw-semibold">Total Pemasukan</h5>
                            <h3 className="fw-bold mt-2">Rp 25.000.000</h3>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="rounded-4 p-4 shadow-lg text-white"
                            style={{
                                background: 'linear-gradient(135deg, #dc2626, #f87171)',
                                boxShadow: '0 8px 24px rgba(220, 38, 38, 0.3)'
                            }}>
                            <h5 className="fw-semibold">Total Pengeluaran</h5>
                            <h3 className="fw-bold mt-2">Rp 10.000.000</h3>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="rounded-4 p-4 shadow-lg text-white"
                            style={{
                                background: 'linear-gradient(135deg, #3b82f6, #60a5fa)',
                                boxShadow: '0 8px 24px rgba(59, 130, 246, 0.3)'
                            }}>
                            <h5 className="fw-semibold">Saldo Akhir</h5>
                            <h3 className="fw-bold mt-2">Rp 15.000.000</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;

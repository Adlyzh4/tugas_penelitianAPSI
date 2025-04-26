import React from 'react';
import { NavLink } from 'react-router-dom';
import AdminSidebar from '../components/adminSidebar';

const ReportPage = () => {
    // Data dummy - ganti nanti dengan data asli dari backend/state management
    const incomeData = [
        { id: 1, date: '2025-04-21', description: 'Penjualan Ayam Geprek', amount: 1000000 },
        { id: 2, date: '2025-04-22', description: 'Penjualan Ayam Bakar', amount: 750000 },
    ];

    const expenseData = [
        { id: 1, date: '2025-04-21', description: 'Beli Minyak', amount: 200000 },
        { id: 2, date: '2025-04-22', description: 'Beli Gas Elpiji', amount: 150000 },
    ];

    const totalIncome = incomeData.reduce((total, i) => total + i.amount, 0);
    const totalExpense = expenseData.reduce((total, e) => total + e.amount, 0);
    const netProfit = totalIncome - totalExpense;

    return (
        <div className="d-flex" style={{ minHeight: '100vh', fontFamily: 'Poppins, sans-serif', paddingTop: '90px' }}>
            
            {/* Sidebar Admin */}
            <AdminSidebar />

            {/* Konten */}
            <div className="flex-grow-1 p-4">
                <div className="rounded-4 shadow-lg p-4 mb-4"
                    style={{
                        background: 'linear-gradient(to right, #fcd34d, #34d399)',
                        color: '#1f2937'
                    }}>
                    <h2 className="fw-bold text-center mb-0">📊 Laporan Keuangan</h2>
                    <p className="text-center">Ringkasan pemasukan, pengeluaran, dan keuntungan usaha Chicken Sizzle</p>
                </div>

                {/* Ringkasan */}
                <div className="row mb-4 text-white">
                    <div className="col-md-4 mb-3">
                        <div className="p-4 rounded-4 shadow-lg"
                            style={{ background: 'linear-gradient(to right, #38bdf8, #60a5fa)' }}>
                            <h5>Pemasukan</h5>
                            <h3 className="fw-bold">Rp {totalIncome.toLocaleString()}</h3>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className="p-4 rounded-4 shadow-lg"
                            style={{ background: 'linear-gradient(to right, #f87171, #fb7185)' }}>
                            <h5>Pengeluaran</h5>
                            <h3 className="fw-bold">Rp {totalExpense.toLocaleString()}</h3>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className="p-4 rounded-4 shadow-lg"
                            style={{ background: netProfit >= 0 ? 'linear-gradient(to right, #34d399, #10b981)' : 'linear-gradient(to right, #facc15, #f87171)' }}>
                            <h5>{netProfit >= 0 ? 'Keuntungan Bersih' : 'Kerugian Bersih'}</h5>
                            <h3 className="fw-bold">Rp {netProfit.toLocaleString()}</h3>
                        </div>
                    </div>
                </div>

                {/* Tabel Pemasukan */}
                <div className="table-responsive shadow rounded-4 mb-5 bg-white">
                    <h5 className="fw-bold p-3">📥 Tabel Pemasukan</h5>
                    <table className="table table-bordered table-hover text-center align-middle">
                        <thead style={{ background: '#a5f3fc' }}>
                            <tr>
                                <th>No</th>
                                <th>Tanggal</th>
                                <th>Deskripsi</th>
                                <th>Jumlah</th>
                            </tr>
                        </thead>
                        <tbody>
                            {incomeData.map((item, index) => (
                                <tr key={item.id}>
                                    <td>{index + 1}</td>
                                    <td>{item.date}</td>
                                    <td>{item.description}</td>
                                    <td>Rp {item.amount.toLocaleString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Tabel Pengeluaran */}
                <div className="table-responsive shadow rounded-4 bg-white">
                    <h5 className="fw-bold p-3">📤 Tabel Pengeluaran</h5>
                    <table className="table table-bordered table-hover text-center align-middle">
                        <thead style={{ background: '#fbcfe8' }}>
                            <tr>
                                <th>No</th>
                                <th>Tanggal</th>
                                <th>Deskripsi</th>
                                <th>Jumlah</th>
                            </tr>
                        </thead>
                        <tbody>
                            {expenseData.map((item, index) => (
                                <tr key={item.id}>
                                    <td>{index + 1}</td>
                                    <td>{item.date}</td>
                                    <td>{item.description}</td>
                                    <td>Rp {item.amount.toLocaleString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ReportPage;

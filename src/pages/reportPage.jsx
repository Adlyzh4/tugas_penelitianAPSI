import React from 'react';
import AdminSidebar from '../components/adminSidebar';

const ReportPage = () => {
    const incomeData = [
        { id: 1, date: '2025-04-21', description: 'Penjualan Ayam Geprek', amount: 1000000 },
        { id: 2, date: '2025-04-22', description: 'Penjualan Ayam Bakar', amount: 750000 },
    ];

    const expenseData = [
        { id: 1, date: '2025-04-21', description: 'Pembelian Minyak', amount: 200000 },
        { id: 2, date: '2025-04-22', description: 'Pembelian Gas Elpiji', amount: 150000 },
    ];

    const totalIncome = incomeData.reduce((total, i) => total + i.amount, 0);
    const totalExpense = expenseData.reduce((total, e) => total + e.amount, 0);
    const netProfit = totalIncome - totalExpense;

    return (
        <div className="d-flex" style={{ minHeight: '100vh', fontFamily: 'Poppins, sans-serif', backgroundColor: '#f8fafc', paddingTop: '90px' }}>
            
            <AdminSidebar />

            <div className="flex-grow-1 p-4">
                {/* Header */}
                <div className="p-4 rounded-4 mb-4 shadow-sm"
                    style={{ background: 'linear-gradient(to right, #0ea5e9, #22d3ee)', color: '#ffffff' }}>
                    <h2 className="fw-bold text-center mb-0">📈 Laporan Keuangan</h2>
                    <p className="text-center">Analisis pemasukan, pengeluaran, dan keuntungan usaha Chicken Sizzle</p>
                </div>

                {/* Summary Cards */}
                <div className="row g-4 mb-5">
                    <div className="col-md-4">
                        <div className="p-4 bg-white shadow rounded-4 text-center">
                            <h6 className="text-muted">Total Pemasukan</h6>
                            <h3 className="fw-bold text-success">Rp {totalIncome.toLocaleString()}</h3>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="p-4 bg-white shadow rounded-4 text-center">
                            <h6 className="text-muted">Total Pengeluaran</h6>
                            <h3 className="fw-bold text-danger">Rp {totalExpense.toLocaleString()}</h3>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="p-4 bg-white shadow rounded-4 text-center">
                            <h6 className="text-muted">{netProfit >= 0 ? 'Keuntungan Bersih' : 'Kerugian Bersih'}</h6>
                            <h3 className={`fw-bold ${netProfit >= 0 ? 'text-success' : 'text-danger'}`}>
                                Rp {netProfit.toLocaleString()}
                            </h3>
                        </div>
                    </div>
                </div>

                {/* Table Section */}
                <div className="bg-white p-4 rounded-4 shadow-sm mb-5">
                    <h5 className="fw-bold mb-3">📥 Tabel Pemasukan</h5>
                    <div className="table-responsive">
                        <table className="table table-hover table-striped align-middle text-center">
                            <thead className="table-light">
                                <tr>
                                    <th>#</th>
                                    <th>Tanggal</th>
                                    <th>Deskripsi</th>
                                    <th>Jumlah (Rp)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {incomeData.map((item, index) => (
                                    <tr key={item.id}>
                                        <td>{index + 1}</td>
                                        <td>{item.date}</td>
                                        <td>{item.description}</td>
                                        <td className="text-success fw-semibold">{item.amount.toLocaleString()}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="bg-white p-4 rounded-4 shadow-sm">
                    <h5 className="fw-bold mb-3">📤 Tabel Pengeluaran</h5>
                    <div className="table-responsive">
                        <table className="table table-hover table-striped align-middle text-center">
                            <thead className="table-light">
                                <tr>
                                    <th>#</th>
                                    <th>Tanggal</th>
                                    <th>Deskripsi</th>
                                    <th>Jumlah (Rp)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {expenseData.map((item, index) => (
                                    <tr key={item.id}>
                                        <td>{index + 1}</td>
                                        <td>{item.date}</td>
                                        <td>{item.description}</td>
                                        <td className="text-danger fw-semibold">{item.amount.toLocaleString()}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ReportPage;

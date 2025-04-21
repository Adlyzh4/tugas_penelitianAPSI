import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import AdminSidebar from '../components/adminSidebar';

const IncomePage = () => {
    const [incomes, setIncomes] = useState([
        { id: 1, date: '2025-04-21', description: 'Penjualan Ayam Geprek', amount: 1000000 },
    ]);

    const [form, setForm] = useState({ date: '', description: '', amount: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (form.date && form.description && form.amount) {
            const newIncome = {
                id: incomes.length + 1,
                date: form.date,
                description: form.description,
                amount: parseFloat(form.amount)
            };
            setIncomes([...incomes, newIncome]);
            setForm({ date: '', description: '', amount: '' });
        }
    };

    const totalIncome = incomes.reduce((total, income) => total + income.amount, 0);

    return (
        <div className="d-flex" style={{ minHeight: '100vh', fontFamily: 'Poppins, sans-serif' }}>
            
            {/* Sidebar Admin */}
            <AdminSidebar />

            {/* Konten */}
            <div className="flex-grow-1 p-4">
                <div
                    className="rounded-4 shadow-lg p-4 mb-4"
                    style={{
                        background: 'linear-gradient(to right, #facc15, #fb923c)',
                        color: '#1f2937',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                    }}
                >
                    <h2 className="fw-bold text-center mb-0">💰 Data Pemasukan</h2>
                    <p className="text-center">Kelola semua data pemasukan dengan mudah dan elegan</p>
                </div>

                <div className="table-responsive shadow rounded-4 mb-4 bg-white">
                    <table className="table table-bordered table-hover text-center align-middle mb-0">
                        <thead style={{ background: '#f87171', color: '#fff' }}>
                            <tr>
                                <th>No</th>
                                <th>Tanggal</th>
                                <th>Deskripsi</th>
                                <th>Jumlah</th>
                            </tr>
                        </thead>
                        <tbody>
                            {incomes.map((income, index) => (
                                <tr key={income.id}>
                                    <td>{index + 1}</td>
                                    <td>{income.date}</td>
                                    <td>{income.description}</td>
                                    <td>Rp {income.amount.toLocaleString()}</td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr style={{ background: '#fef3c7' }}>
                                <td colSpan="3" className="fw-bold text-end">Total Pemasukan:</td>
                                <td className="fw-bold text-success">Rp {totalIncome.toLocaleString()}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>

                <div className="mt-5">
                    <h5 className="fw-bold mb-3">➕ Tambah Pemasukan Baru</h5>
                    <form className="row g-3" onSubmit={handleSubmit}>
                        <div className="col-md-4">
                            <input
                                type="date"
                                name="date"
                                value={form.date}
                                onChange={handleChange}
                                className="form-control rounded-3"
                                required
                            />
                        </div>
                        <div className="col-md-4">
                            <input
                                type="text"
                                name="description"
                                value={form.description}
                                onChange={handleChange}
                                className="form-control rounded-3"
                                placeholder="Deskripsi pemasukan"
                                required
                            />
                        </div>
                        <div className="col-md-4">
                            <input
                                type="number"
                                name="amount"
                                value={form.amount}
                                onChange={handleChange}
                                className="form-control rounded-3"
                                placeholder="Jumlah (Rp)"
                                required
                            />
                        </div>
                        <div className="col-12 text-end">
                            <button
                                className="btn text-white px-4"
                                style={{
                                    background: 'linear-gradient(to right, #ec4899, #8b5cf6)',
                                    border: 'none',
                                    borderRadius: '30px',
                                    boxShadow: '0 8px 20px rgba(139, 92, 246, 0.3)'
                                }}
                            >
                                Simpan
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default IncomePage;

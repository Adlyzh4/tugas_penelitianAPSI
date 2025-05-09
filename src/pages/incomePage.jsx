import React, { useState } from 'react';
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
        <div className="d-flex" style={{ minHeight: '100vh', fontFamily: 'Poppins, sans-serif', paddingTop: '90px' }}>
            <AdminSidebar />

            <div className="flex-grow-1 p-4">
                <div className="rounded-4 shadow-sm p-4 mb-4 bg-white">
                    <h2 className="fw-bold text-center mb-1">💰 Data Pemasukan</h2>
                    <p className="text-center text-muted">Kelola semua data pemasukan Chicken Sizzle</p>
                </div>

                {/* Tabel Pemasukan */}
                <div className="table-responsive shadow-sm rounded-4 bg-white mb-5 p-3">
                    <table className="table table-hover align-middle text-center mb-0">
                        <thead style={{ backgroundColor: '#bbf7d0' }}>
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
                            <tr style={{ backgroundColor: '#fef9c3' }}>
                                <td colSpan="3" className="fw-bold text-end">Total Pemasukan:</td>
                                <td className="fw-bold text-success">Rp {totalIncome.toLocaleString()}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>

                {/* Form Tambah Pemasukan */}
                <div className="p-4 rounded-4 shadow-sm bg-white">
                    <h5 className="fw-bold mb-4">➕ Tambah Pemasukan Baru</h5>
                    <form className="row g-3" onSubmit={handleSubmit}>
                        <div className="col-md-4">
                            <input
                                type="date"
                                name="date"
                                value={form.date}
                                onChange={handleChange}
                                className="form-control rounded-pill"
                                required
                            />
                        </div>
                        <div className="col-md-4">
                            <input
                                type="text"
                                name="description"
                                value={form.description}
                                onChange={handleChange}
                                className="form-control rounded-pill"
                                placeholder="Deskripsi Pemasukan"
                                required
                            />
                        </div>
                        <div className="col-md-4">
                            <input
                                type="number"
                                name="amount"
                                value={form.amount}
                                onChange={handleChange}
                                className="form-control rounded-pill"
                                placeholder="Jumlah (Rp)"
                                required
                            />
                        </div>
                        <div className="col-12 text-end">
                            <button
                                className="btn btn-primary rounded-pill px-5"
                                style={{ background: 'linear-gradient(to right, #3b82f6, #6366f1)', border: 'none' }}
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

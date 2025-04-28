import React, { useState } from 'react';
import AdminSidebar from '../components/adminSidebar';

const ExpensePage = () => {
    const [expenses, setExpenses] = useState([
        { id: 1, date: '2025-04-21', description: 'Beli Minyak Goreng', amount: 200000 },
    ]);

    const [form, setForm] = useState({ date: '', description: '', amount: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (form.date && form.description && form.amount) {
            const newExpense = {
                id: expenses.length + 1,
                date: form.date,
                description: form.description,
                amount: parseFloat(form.amount),
            };
            setExpenses([...expenses, newExpense]);
            setForm({ date: '', description: '', amount: '' });
        }
    };

    const totalExpense = expenses.reduce((total, expense) => total + expense.amount, 0);

    return (
        <div className="d-flex" style={{ minHeight: '100vh', fontFamily: 'Poppins, sans-serif', paddingTop: '90px' }}>
            
            {/* Sidebar Admin */}
            <AdminSidebar />

            {/* Konten */}
            <div className="flex-grow-1 p-4">
                {/* Header */}
                <div
                    className="rounded-4 shadow-lg p-4 mb-4"
                    style={{
                        background: 'linear-gradient(to right, #38bdf8, #818cf8)',
                        color: '#fff',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                    }}
                >
                    <h2 className="fw-bold text-center mb-0">💸 Data Pengeluaran</h2>
                    <p className="text-center">Catat dan kelola semua pengeluaran usaha dengan rapi dan stylish</p>
                </div>

                {/* Table Pengeluaran */}
                <div className="table-responsive shadow rounded-4 mb-4 bg-white">
                    <table className="table table-bordered table-hover text-center align-middle mb-0">
                        <thead style={{ background: '#60a5fa', color: '#fff' }}>
                            <tr>
                                <th>No</th>
                                <th>Tanggal</th>
                                <th>Deskripsi</th>
                                <th>Jumlah</th>
                            </tr>
                        </thead>
                        <tbody>
                            {expenses.map((expense, index) => (
                                <tr key={expense.id}>
                                    <td>{index + 1}</td>
                                    <td>{expense.date}</td>
                                    <td>{expense.description}</td>
                                    <td>Rp {expense.amount.toLocaleString('id-ID')}</td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr style={{ background: '#e0f2fe' }}>
                                <td colSpan="3" className="fw-bold text-end">Total Pengeluaran:</td>
                                <td className="fw-bold text-danger">Rp {totalExpense.toLocaleString('id-ID')}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>

                {/* Form Tambah Pengeluaran */}
                <div className="mt-5">
                    <h5 className="fw-bold mb-3">➖ Tambah Pengeluaran Baru</h5>
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
                                placeholder="Deskripsi pengeluaran"
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
                                type="submit"
                                className="btn text-white px-4"
                                style={{
                                    background: 'linear-gradient(to right, #ec4899, #8b5cf6)',
                                    border: 'none',
                                    borderRadius: '30px',
                                    boxShadow: '0 8px 20px rgba(139, 92, 246, 0.3)',
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

export default ExpensePage;

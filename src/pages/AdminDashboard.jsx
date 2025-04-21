import React, { useEffect } from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import AdminSidebar from '../components/adminSidebar';

const AdminDashboard = () => {
  const financeData = [
    { bulan: 'Jan', pemasukan: 7000000, pengeluaran: 3000000 },
    { bulan: 'Feb', pemasukan: 6000000, pengeluaran: 2500000 },
    { bulan: 'Mar', pemasukan: 8000000, pengeluaran: 4000000 },
    { bulan: 'Apr', pemasukan: 4000000, pengeluaran: 1500000 },
  ];

  const pieData = [
    { name: 'Bahan Baku', value: 5000000 },
    { name: 'Gaji', value: 3000000 },
    { name: 'Operasional', value: 1500000 },
    { name: 'Pemasaran', value: 500000 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  // Reset body style after offcanvas is closed
  useEffect(() => {
    const handleOffcanvasHidden = () => {
      document.body.style.overflow = 'auto';
      document.body.style.paddingRight = '0px';
    };
    const offcanvasEl = document.getElementById('adminSidebar');
    if (offcanvasEl) {
      offcanvasEl.addEventListener('hidden.bs.offcanvas', handleOffcanvasHidden);
    }

    // Add Bootstrap Icons if not already in the document
    if (!document.querySelector('link[href*="bootstrap-icons"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css';
      document.head.appendChild(link);
    }
    
    // Add Google Font if not already in the document
    if (!document.querySelector('link[href*="family=Poppins"]')) {
      const font = document.createElement('link');
      font.rel = 'stylesheet';
      font.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap';
      document.head.appendChild(font);
    }

    return () => {
      if (offcanvasEl) {
        offcanvasEl.removeEventListener('hidden.bs.offcanvas', handleOffcanvasHidden);
      }
    };
  }, []);

  return (
    <div
      className="d-flex flex-column flex-md-row" 
      style={{
        minHeight: '100vh',
        background: '#f8fafc',
        fontFamily: '"Poppins", sans-serif',
        overflowX: 'hidden',
      }}
    >
      {/* Sidebar */}
      <AdminSidebar />
      
      {/* Main Content */}
      <div className="flex-grow-1 p-0 "  > 


        <div className="px-4 pb-5">
          {/* Welcome Section */}
          <div className="mb-5 text-center">
            <h1 className="fw-bold text-dark">Dashboard Keuangan</h1>
            <p className="text-secondary">
              Selamat datang kembali, <span className="fw-medium">Admin Chicken Sizzle</span>! Berikut ringkasan data keuangan bulan ini.
            </p>
          </div>

          {/* Statistics Cards */}
          <div className="row row-cols-1 row-cols-md-4 g-4 mb-5">
            <div className="col">
              <div className="card border-0 shadow-sm h-100 rounded-4 overflow-hidden">
                <div className="card-body position-relative">
                  <div className="d-flex align-items-center mb-3">
                    <div className="rounded-circle d-flex align-items-center justify-content-center" 
                         style={{ width: '45px', height: '45px', background: 'rgba(34, 197, 94, 0.2)' }}>
                      <i className="bi bi-wallet2 text-success fs-4"></i>
                    </div>
                    <div className="ms-3">
                      <h6 className="text-muted mb-0 small">Total Pemasukan</h6>
                      <h4 className="fw-bold mb-0">Rp 25.000.000</h4>
                    </div>
                  </div>
                  <div className="text-success d-flex align-items-center">
                    <i className="bi bi-arrow-up"></i>
                    <span className="fw-medium ms-1">12.5%</span>
                    <span className="text-muted ms-2 small">dari bulan lalu</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col">
              <div className="card border-0 shadow-sm h-100 rounded-4 overflow-hidden">
                <div className="card-body position-relative">
                  <div className="d-flex align-items-center mb-3">
                    <div className="rounded-circle d-flex align-items-center justify-content-center" 
                         style={{ width: '45px', height: '45px', background: 'rgba(239, 68, 68, 0.2)' }}>
                      <i className="bi bi-credit-card text-danger fs-4"></i>
                    </div>
                    <div className="ms-3">
                      <h6 className="text-muted mb-0 small">Total Pengeluaran</h6>
                      <h4 className="fw-bold mb-0">Rp 10.000.000</h4>
                    </div>
                  </div>
                  <div className="text-danger d-flex align-items-center">
                    <i className="bi bi-arrow-up"></i>
                    <span className="fw-medium ms-1">5.3%</span>
                    <span className="text-muted ms-2 small">dari bulan lalu</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col">
              <div className="card border-0 shadow-sm h-100 rounded-4 overflow-hidden">
                <div className="card-body position-relative">
                  <div className="d-flex align-items-center mb-3">
                    <div className="rounded-circle d-flex align-items-center justify-content-center" 
                         style={{ width: '45px', height: '45px', background: 'rgba(59, 130, 246, 0.2)' }}>
                      <i className="bi bi-bar-chart text-primary fs-4"></i>
                    </div>
                    <div className="ms-3">
                      <h6 className="text-muted mb-0 small">Saldo Akhir</h6>
                      <h4 className="fw-bold mb-0">Rp 15.000.000</h4>
                    </div>
                  </div>
                  <div className="text-primary d-flex align-items-center">
                    <i className="bi bi-arrow-up"></i>
                    <span className="fw-medium ms-1">18.2%</span>
                    <span className="text-muted ms-2 small">dari bulan lalu</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col">
              <div className="card border-0 shadow-sm h-100 rounded-4 overflow-hidden">
                <div className="card-body position-relative">
                  <div className="d-flex align-items-center mb-3">
                    <div className="rounded-circle d-flex align-items-center justify-content-center" 
                         style={{ width: '45px', height: '45px', background: 'rgba(168, 85, 247, 0.2)' }}>
                      <i className="bi bi-people text-purple fs-4" style={{ color: '#a855f7' }}></i>
                    </div>
                    <div className="ms-3">
                      <h6 className="text-muted mb-0 small">Pelanggan Baru</h6>
                      <h4 className="fw-bold mb-0">42</h4>
                    </div>
                  </div>
                  <div className="d-flex align-items-center" style={{ color: '#a855f7' }}>
                    <i className="bi bi-arrow-up"></i>
                    <span className="fw-medium ms-1">8.7%</span>
                    <span className="text-muted ms-2 small">dari bulan lalu</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Charts */}
          <div className="row g-4 mb-4">
            {/* Bar Chart */}
            <div className="col-12 col-lg-8">
              <div className="card border-0 shadow-sm rounded-4 h-100">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <h5 className="card-title fw-bold mb-0">Keuangan Bulanan</h5>
                    <div className="dropdown">
                      <button className="btn btn-sm btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown">
                        2025
                      </button>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">2025</a></li>
                        <li><a className="dropdown-item" href="#">2024</a></li>
                      </ul>
                    </div>
                  </div>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={financeData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="bulan" axisLine={false} tickLine={false} />
                      <YAxis axisLine={false} tickLine={false} />
                      <Tooltip 
                        formatter={(value) => `Rp ${value.toLocaleString()}`}
                        contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                      />
                      <Legend />
                      <Bar dataKey="pemasukan" fill="#22c55e" radius={[4, 4, 0, 0]} name="Pemasukan" />
                      <Bar dataKey="pengeluaran" fill="#ef4444" radius={[4, 4, 0, 0]} name="Pengeluaran" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
            
            {/* Pie Chart */}
            <div className="col-12 col-lg-4">
              <div className="card border-0 shadow-sm rounded-4 h-100">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <h5 className="card-title fw-bold mb-0">Kategori Pengeluaran</h5>
                    <button className="btn btn-sm btn-light">
                      <i className="bi bi-three-dots"></i>
                    </button>
                  </div>
                  <ResponsiveContainer width="100%" height={250}>
                    <PieChart>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        nameKey="name"
                        label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => `Rp ${value.toLocaleString()}`} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
          
          {/* Recent Transactions */}
          <div className="card border-0 shadow-sm rounded-4">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h5 className="card-title fw-bold mb-0">Transaksi Terbaru</h5>
                <button className="btn btn-primary btn-sm rounded-3">Lihat Semua</button>
              </div>
              
              <div className="table-responsive">
                <table className="table table-hover align-middle">
                  <thead className="table-light">
                    <tr>
                      <th scope="col" className="fw-semibold">ID</th>
                      <th scope="col" className="fw-semibold">Tanggal</th>
                      <th scope="col" className="fw-semibold">Deskripsi</th>
                      <th scope="col" className="fw-semibold">Kategori</th>
                      <th scope="col" className="fw-semibold">Jumlah</th>
                      <th scope="col" className="fw-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>#TR-001</td>
                      <td>20 Apr 2025</td>
                      <td>Penjualan Ayam Goreng</td>
                      <td><span className="badge bg-success-subtle text-success rounded-pill px-3 py-2">Pemasukan</span></td>
                      <td className="fw-medium">Rp 1.500.000</td>
                      <td><span className="badge bg-primary-subtle text-primary rounded-pill px-3 py-2">Selesai</span></td>
                    </tr>
                    <tr>
                      <td>#TR-002</td>
                      <td>18 Apr 2025</td>
                      <td>Pembelian Bahan Baku</td>
                      <td><span className="badge bg-danger-subtle text-danger rounded-pill px-3 py-2">Pengeluaran</span></td>
                      <td className="fw-medium">Rp 750.000</td>
                      <td><span className="badge bg-primary-subtle text-primary rounded-pill px-3 py-2">Selesai</span></td>
                    </tr>
                    <tr>
                      <td>#TR-003</td>
                      <td>15 Apr 2025</td>
                      <td>Pembayaran Gaji Karyawan</td>
                      <td><span className="badge bg-danger-subtle text-danger rounded-pill px-3 py-2">Pengeluaran</span></td>
                      <td className="fw-medium">Rp 2.000.000</td>
                      <td><span className="badge bg-warning-subtle text-warning rounded-pill px-3 py-2">Proses</span></td>
                    </tr>
                    <tr>
                      <td>#TR-004</td>
                      <td>12 Apr 2025</td>
                      <td>Penjualan Catering</td>
                      <td><span className="badge bg-success-subtle text-success rounded-pill px-3 py-2">Pemasukan</span></td>
                      <td className="fw-medium">Rp 3.500.000</td>
                      <td><span className="badge bg-primary-subtle text-primary rounded-pill px-3 py-2">Selesai</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
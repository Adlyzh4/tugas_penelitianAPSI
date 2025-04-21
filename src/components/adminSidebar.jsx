import React from 'react';
import { NavLink } from 'react-router-dom';

const AdminSidebar = () => {
  return (
    <>
      {/* Tombol toggle offcanvas selalu tampil */}
      <button
        className="btn btn-danger m-3 position-fixed"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#mobileSidebar"
        aria-controls="mobileSidebar"
        style={{ zIndex: 1040 }}
      >
        ☰ Menu
      </button>

      {/* Sidebar Desktop (bisa tetap ada jika mau statis) */}
      {/* Hapus bagian ini jika hanya ingin offcanvas */}
      {/* <aside
        className="d-none d-md-flex flex-column p-4 text-white position-fixed"
        style={{
          width: '250px',
          height: '100vh',
          background: 'linear-gradient(to bottom, #f43f5e, #f97316)',
          boxShadow: '4px 0 12px rgba(0,0,0,0.1)',
          zIndex: 1030,
        }}
      >
        <h4 className="fw-bold mb-4">💸 Admin Panel</h4>
        <SidebarLinks />
      </aside> */}

      {/* Sidebar Offcanvas (untuk semua perangkat) */}
      <div
        className="offcanvas offcanvas-start text-white"
        tabIndex="-1"
        id="mobileSidebar"
        aria-labelledby="mobileSidebarLabel"
        style={{
          background: 'linear-gradient(to bottom, #f43f5e, #f97316)',
          width: '250px',
        }}
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="mobileSidebarLabel">💸 Admin Panel</h5>
          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body p-3">
          <SidebarLinks />
        </div>
      </div>
    </>
  );
};

const SidebarLinks = () => {
  return (
    <ul className="nav flex-column gap-3">
      <li><NavLink className="text-white text-decoration-none" to="/admin">🏠 Dashboard</NavLink></li>
      <li><NavLink className="text-white text-decoration-none" to="/income">📥 Pemasukan</NavLink></li>
      <li><NavLink className="text-white text-decoration-none" to="/expense">📤 Pengeluaran</NavLink></li>
      <li><NavLink className="text-white text-decoration-none" to="/report">📊 Laporan</NavLink></li>
      <li><a className="text-white text-decoration-none" href="/">🚪 Logout</a></li>
    </ul>
  );
};

export default AdminSidebar;

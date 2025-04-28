import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Tambahkan ini!

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate(); // Tambahkan ini!

    const toggleForm = () => setIsLogin(!isLogin);

    const handleLogin = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        if (email === 'adminchickensizzle@gmail.com' && password === 'admin1234567890') {
            navigate('/admin'); // Ganti window.location.href menjadi navigate
        } else {
            alert('Email atau password salah!');
        }
    };

    return (
        <div
            style={{
                minHeight: '100vh',
                background: 'linear-gradient(to right, #fca5a5, #fcd34d, #fca5a5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'Poppins, sans-serif'
            }}
        >
            <div
                className="shadow-lg rounded-4 p-5"
                style={{
                    width: '100%',
                    maxWidth: '420px',
                    background: 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(14px)',
                    border: '1px solid rgba(0,0,0,0.05)',
                    boxShadow: '0 12px 40px rgba(0,0,0,0.2)',
                    transition: 'all 0.3s ease-in-out'
                }}
            >
                <h2 className="text-center fw-bold mb-4">{isLogin ? 'Login' : 'Daftar'}</h2>

                <form onSubmit={isLogin ? handleLogin : (e) => e.preventDefault()}>
                    {!isLogin && (
                        <div className="mb-3">
                            <label className="form-label fw-semibold">Nama Lengkap</label>
                            <input type="text" className="form-control rounded-3" placeholder="Nama Anda" />
                        </div>
                    )}

                    <div className="mb-3">
                        <label className="form-label fw-semibold">Email</label>
                        <input type="email" name="email" className="form-control rounded-3" placeholder="email@keren.com" required />
                    </div>

                    <div className="mb-4">
                        <label className="form-label fw-semibold">Kata Sandi</label>
                        <input type="password" name="password" className="form-control rounded-3" placeholder="••••••••" required />
                    </div>

                    <div className="d-grid">
                        <button
                            type="submit"
                            className="btn text-white fw-semibold"
                            style={{
                                background: 'linear-gradient(135deg, #f43f5e, #f97316)',
                                border: 'none',
                                borderRadius: '30px',
                                boxShadow: '0 6px 20px rgba(249, 115, 22, 0.4)'
                            }}
                        >
                            {isLogin ? 'Masuk Sekarang' : 'Buat Akun'}
                        </button>
                    </div>
                </form>

                <div className="mt-4 text-center text-secondary">
                    {isLogin ? (
                        <>
                            Belum punya akun?{' '}
                            <button className="btn btn-link p-0 fw-semibold" onClick={toggleForm}>
                                Daftar yuk
                            </button>
                        </>
                    ) : (
                        <>
                            Sudah punya akun?{' '}
                            <button className="btn btn-link p-0 fw-semibold" onClick={toggleForm}>
                                Login aja
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AuthPage;

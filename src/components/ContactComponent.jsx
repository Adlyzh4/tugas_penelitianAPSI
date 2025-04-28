import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from "react-toastify"; // ← Tambahkan ini
import 'react-toastify/dist/ReactToastify.css'; // ← Dan ini untuk styling toast

const ContactComponent = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_4z2r6wb', 'template_g7ekxsn', form.current, 'f9a63dQr0Cg2-N2EF')
            .then((result) => {
                console.log(result.text);
                // Munculkan toast hanya kalau item pertama kali ditambahkan
                      toast.success(`berhasil mengirim email!`, {
                        position: "bottom-left",
                        autoClose: 1500,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: false,
                        progress: undefined,
                        theme: "colored",
                      });
                e.target.reset(); // Bersihkan form setelah kirim
            }, (error) => {
                console.log(error.text);
                // Munculkan toast hanya kalau item pertama kali ditambahkan
                      toast.success(`gagal mengirim email!`, {
                        position: "bottom-left",
                        autoClose: 1500,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: false,
                        progress: undefined,
                        theme: "colored",
                      });
            });
    };

    return (
        <div className="container py-5" id="contact-us">
            <ToastContainer /> {/* Tambahkan ini untuk menampilkan toast */}
            <div className="row g-4 align-items-stretch">
                {/* Kontak Form */}
                <div className="col-lg-6">
                    <div
                        className="p-5 rounded-4 shadow-lg h-100"
                        style={{
                            background: 'rgba(255, 255, 255, 0.8)',
                            backdropFilter: 'blur(12px)',
                            border: '1px solid rgba(0,0,0,0.05)',
                            boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                            fontFamily: 'Poppins, sans-serif'
                        }}
                    >
                        <h1 className="mb-3 text-danger-emphasis fw-bold text-center">Contact Us</h1>
                        <p className="mb-4 text-center text-secondary">
                            Ada pertanyaan, saran, atau ingin bekerjasama dengan kami? Isi formulir ini atau hubungi kami langsung.
                        </p>

                        <form ref={form} onSubmit={sendEmail}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label fw-semibold">Nama</label>
                                <input type="text" name="user_name" className="form-control rounded-3" id="name" placeholder="Masukkan nama Anda" required />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="email" className="form-label fw-semibold">Email</label>
                                <input type="email" name="user_email" className="form-control rounded-3" id="email" placeholder="nama@email.com" required />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="message" className="form-label fw-semibold">Pesan</label>
                                <textarea name="message" className="form-control rounded-3" id="message" rows="4" placeholder="Tulis pesan Anda di sini..." required></textarea>
                            </div>

                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="btn px-5 py-2 fw-semibold text-white"
                                    style={{
                                        background: 'linear-gradient(135deg, #ff416c, #ff4b2b)',
                                        border: 'none',
                                        borderRadius: '30px',
                                        boxShadow: '0 6px 20px rgba(255, 75, 43, 0.4)',
                                        transition: 'transform 0.2s ease-in-out'
                                    }}
                                    onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                                    onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                                >
                                    Kirim Pesan
                                </button>
                            </div>
                        </form>

                        <div className="mt-5 text-center">
                            <h5 className="fw-semibold">Atau hubungi kami langsung:</h5>
                            <p className="mb-1 text-secondary">📧 support@chickensizzle.com</p>
                            <p className="text-secondary">📞 +62 878-5577-0953</p>
                        </div>
                    </div>
                </div>

                {/* Map Lokasi */}
                <div className="col-lg-6">
                    <div
                        className="rounded-4 shadow-lg overflow-hidden h-100"
                        style={{
                            border: '1px solid rgba(0,0,0,0.05)',
                            boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
                        }}
                    >
                        <iframe
                            title="Lokasi Toko Mitra"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.2018859669984!2d106.8189677!3d-6.367913999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ed001d8d3da1%3A0x1d5885b12fbe575a!2sCHICKEN%20SIZZLE!5e0!3m2!1sid!2sid!4v1745166916868!5m2!1sid!2sid"
                            width="100%"
                            height="100%"
                            style={{ border: 0, minHeight: '480px' }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactComponent;

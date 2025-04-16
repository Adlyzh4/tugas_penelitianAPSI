import React from 'react';

const ContactComponent = () => {
    return (
        <div className="container py-5">
            <h1 className="mb-4">Contact Us</h1>
            <p className="mb-4">
                Ada pertanyaan, saran, atau ingin bekerjasama dengan kami? Silakan isi formulir di bawah ini atau hubungi kami melalui email dan telepon.
            </p>

            <form>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nama</label>
                    <input type="text" className="form-control" id="name" placeholder="Masukkan nama Anda" />
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="nama@email.com" />
                </div>

                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Pesan</label>
                    <textarea className="form-control" id="message" rows="4" placeholder="Tulis pesan Anda di sini..."></textarea>
                </div>

                <button type="submit" className="btn btn-danger">Kirim</button>
            </form>

            <div className="mt-5">
                <h5>Atau hubungi kami langsung:</h5>
                <p>Email: support@chickensizzle.com</p>
                <p>Telepon: 0812-3456-7890</p>
            </div>
        </div>
    );
};

export default ContactComponent;

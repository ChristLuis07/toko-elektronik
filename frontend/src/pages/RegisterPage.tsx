import axios from "axios"
import React, { useState } from "react"
import Button from "../components/Button"
import Input from "../components/Input"
import illustration from '../assets/image/auth.jpg'

const RegisterPage = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        photo: null as File | null,
    })

    const [loading,setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === 'photo') {
            setForm({ ...form, photo: e.target.files?.[0] || null})
        } else {
            setForm({ ...form, [e.target.name]: e.target.value })
        }
    }

    const handleSubmit = async (e:React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError(null)

        try {
            const formData = new FormData()
            formData.append('name', form.name)
            formData.append('email', form.email)
            formData.append('password', form.password)
            formData.append('password_confirmation', form.password_confirmation)
            if(form.photo) {
                formData.append('photo', form.photo)
            }

            const response = await axios.post('http://127.0.0.1:8000/api/register', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                withCredentials: true,
            })

            console.log(response.data)
            alert('Registrasi Berhasil')
        } catch (error: any) {
            console.error(error)
            setError(error.response.data.message || 'Gagal Melakukan Registrasi')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 to-white px-4">
            <div className="bg-white shadow-2xl rounded-2xl overflow-hidden grid md:grid-cols-2 w-full max-w-5xl">
                <div className="hidden md:flex items-center justify-center bg-emerald-100 p-8">
                    <img src={illustration} alt="Register Illustration" className="max-w-xs" />
                </div>
                <div className="p-8">
                    <h2 className="text-2xl font-bold text-emerald-700 mb-6 text-center">
                        Daftar Akun Baru
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <Input
                        type="text"
                        name="name"
                        label="Nama"
                        placeholder="Nama"
                        onChange={handleChange}
                        />
                        <Input
                        type="email"
                        name="email"
                        label="Email"
                        placeholder="Email"
                        onChange={handleChange}
                        />
                        <Input
                        type="password"
                        name="password"
                        label="Password"
                        placeholder="Password"
                        onChange={handleChange}
                        />
                        <Input
                        type="password"
                        name="password_confirmation"
                        label="Konfirmasi Password"
                        placeholder="Konfirmasi Password"
                        onChange={handleChange}
                        />
                        <Input
                        type="file"
                        name="photo"
                        label="Foto Profil"
                        accept="image/*"
                        onChange={handleChange}
                        />
                        <Button type="submit">Daftar Sekarang</Button>     
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage


"use client"
import React from 'react'
import Navbar from '../components/Navbar'
import { useFormik } from 'formik'
import axios from 'axios'

export default function Page() {

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      console.log("Hello!");
      try {
        const res = await axios.post("http://localhost:5050/user/login", {
          email: values.email,
          password: values.password
        });

        console.log(res.data);
      } catch (error) {
        console.error(error);
      }
    }
  });

  return (
    <Navbar>
      <div style={{ backgroundImage: 'url("./login.jpg")' }} className="h-screen w-full flex flex-col justify-center items-center">
        <form onSubmit={formik.handleSubmit} className="flex flex-col justify-center items-center px-5 py-10 gap-3 rounded backdrop-blur-md bg-orange-500/30 md:w-[500px]">
          <h1 className="text-white my-5 text-4xl font-serif uppercase">Login</h1>
          <input
            name="email"
            id="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            required
            type="text"
            placeholder="email"
            className="px-1 py-1 rounded-tl-md rounded-br-md focus:outline-none"
          />
          <input
            name="password"
            id="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            required
            type="password"
            placeholder="password"
            className="px-1 py-1 rounded-tl-md rounded-br-md focus:outline-none"
          />
          <button className="my-5 px-4 py-1 bg-white rounded uppercase hover:bg-transparent hover:border border-2 border-white duration-200">Submit</button>
        </form>
      </div>
    </Navbar>
  );
}

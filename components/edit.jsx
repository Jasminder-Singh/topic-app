"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

const Editform = ({ title, description, id }) => {
  const router = useRouter();

  const { values, errors, touched, handleChange, handleSubmit, handleBlur, handleReset } = useFormik({
    initialValues: {
      title: title,
      description: description
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Title is required"),
      description: Yup.string().required('Description is required')
    }),
    onSubmit: async (values) => {
    
      try {
        const response = await fetch(`http://localhost:3000/api/topics/${id}`, {
          method: "PUT",
          cache: "no-store",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify({ newTitle : values.title, newDescription : values.description })
        });
        const final = await response.json();
        if (final.message == "success") {
          toast.success('Updated Successfully', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          router.refresh();
          router.push("/");
        }
      } catch (err) {
        console.log(err);
      }
    }
  })
 
  return (
    <div className="font-bold text-xl mx-2">
      <form onSubmit={handleSubmit} onReset={handleReset}>
        <div className="py-5 flex justify-center items-center ">
          <div className="border shadow rounded-lg h-full w-full sm:w-[70%] md:w-[50%] p-5 bg-gray-100">
            <div className="mb-3">
              <h1 className="text-3xl text-center bg-violet-400 text-white p-4 font-semibold rounded-md">
                Update topic</h1>
            </div>
            <div className="mb-3">
              <label className="text-xl inline-block mb-2">Title :- </label><br />
              <input type="text" placeholder="Title.." value={values.title} name="title"
                onChange={handleChange} onBlur={handleBlur}
                className="border-2 border-blue-400 rounded-md w-full px-5 py-2" />
                {errors.title && touched.title ? <p>{errors.title}</p> : null}
            </div>

            <div className="mb-3">
              <label className="text-xl inline-block mb-2">Description :- </label><br />
              <textarea type="textarea" placeholder="Description.." value={values.description} name="description"
                onChange={handleChange} onBlur={handleBlur} rows={7}
                className="border-2 border-blue-400 rounded-md w-full px-2 py-1 " />
                {errors.description && touched.description ? <p>{errors.description}</p> : null}
            </div>
            <div className="flex justify-between px-3">
              <button type="reset"
                className="bg-red-500 px-6 py-2 rounded-md text-lg font-serif font-extrabold">Clear</button>
              <button type="submit"
                className="bg-green-500 px-6 py-2 rounded-md text-lg font-serif font-extrabold hover:shadow">Update</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Editform;
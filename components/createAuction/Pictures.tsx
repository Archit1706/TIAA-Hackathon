import React, { useState } from 'react'
import { useContext } from 'react'
import { AppContext } from "context/AppContext"
type Props = {}

const Pictures = (props: Props) => {
  const { links, setLinks } = useContext(AppContext)
  const uploadCloudinary = async (file: any) => {
    const formData = new FormData()
    formData.append("file", file)
    formData.append("upload_preset", "auction-product")
    const res = await fetch("https://api.cloudinary.com/v1_1/dxzz2mnxa/image/upload", {
      method: 'POST',
      body: formData
    })
    return await res.json()
  }

  const [images, setImages] = useState<any>([])
  // const [links, setLinks] = useState<any[]>([])
  const handleSubmit = async (e: any) => {
    e.preventDefault()
    try {
      let arr:any[] = []
      for (let i = 0; i < images.length; i++) {
        const data = await uploadCloudinary(images[i])
        arr.push(data)
        console.log(data)
      }
      setLinks((links:any)=>[...links, ...arr])
      console.log(arr)
    }
    catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="mt-8 p-4">
      <div className="grid gap-4 mb-4 sm:grid-cols-2">
        <div>
          <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
          <input type="text" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="username.example" required />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
          <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
        </div>
        <div>
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
          <input type="password" name="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
        </div>
        <div>
          <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
          <input type="password" name="confirm-password" id="confirm-password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
        </div>
      </div>
      <div>
        <form onSubmit={handleSubmit} className="flex space-x-2 items-center">
          <input
            type="file"
            multiple={true}
            onChange={(e) => setImages(e.target.files)}
          />
          <button type="submit" className='text-base  ml-2  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer hover:bg-teal-600 bg-teal-600 text-teal-100 border duration-200 ease-in-out border-teal-600 transition'>Upload</button>
        </form>
        <div className="flex flex-wrap gap-2 my-2">
          {
            links && links.length > 0 && links.map((link:any, id:number) => {
              return (

                <div key={id} className="object-contain w-56 h-56">
                  <img src={link?.url} alt="" className='object-contain' />
                </div>

              )
            })
          }
        </div>
      </div>
      <div className="flex p-2 mt-4">
        <button className="text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer hover:bg-gray-200 bg-gray-100 text-gray-700 border duration-200 ease-in-out border-gray-600 transition">Previous</button>
        <div className="flex-auto flex flex-row-reverse">
          <button className="text-base  ml-2  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer hover:bg-teal-600 bg-teal-600 text-teal-100 border duration-200 ease-in-out border-teal-600 transition">Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Pictures
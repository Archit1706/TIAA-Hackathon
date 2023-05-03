import React, { useState } from 'react'
import { useContext } from 'react'
import { AppContext } from "context/AppContext"
import { ToastContainer, toast } from 'react-toastify';
type Props = {}

const Pictures = (props: Props) => {
  const { setFormNumber, links, setLinks } = useContext(AppContext)
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
      let arr: any[] = []
      for (let i = 0; i < images.length; i++) {
        const data = await uploadCloudinary(images[i])
        arr.push(data)
        console.log(data)
      }
      setLinks((links: any) => [...links, ...arr])
      console.log(arr)
    }
    catch (error) {
      console.log(error)
    }
  }

  const submitHandler = () => {
    console.log(links)
    if (links.length > 3) {
      toast.success('🙌 Auction created successfully!');
      // toast.error('Please upload at least four image!');

    }
    else {
      toast.error('😓 Please upload at least four image!');
    }
  }

  return (
    <div className="mt-8 p-4">
      <div className='flex flex-col space-y-4 items-center'>
        <ToastContainer />
        <form onSubmit={handleSubmit} className="flex space-x-2 items-center mx-auto">
          <input
            type="file"
            multiple={true}
            onChange={(e) => setImages(e.target.files)}
          />
          <button type="submit" className='text-base  ml-2  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer hover:bg-mobile bg-mobile text-mobile-light border duration-200 ease-in-out border-mobile transition'>Upload</button>
        </form>
        <div className="flex flex-wrap gap-2 my-2">
          {
            links && links.length > 0 && links.map((link: any, id: number) => {
              return (

                <div key={id} className="object-contain w-56 h-56 flex items-center justify-center shadow-md">
                  <img src={link?.url} alt="" className='object-contain shadow-md border-mobile hover:border-2' />
                </div>

              )
            })
          }
        </div>
      </div>
      <div className="flex p-2 mt-4">
        <button
          onClick={() => { setFormNumber(2) }}
          className="text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer hover:bg-mobile-light bg-mobile-light text-mobile border duration-200 ease-in-out border-mobile transition">Previous</button>
        <div className="flex-auto flex flex-row-reverse">
          <button onClick={submitHandler} className="text-base  ml-2  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer hover:bg-mobile bg-mobile text-mobile-light border duration-200 ease-in-out border-mobile transition">Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Pictures
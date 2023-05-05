import React, { useState } from "react";
import { useContext } from "react";
import { AppContext } from "context/AppContext";
import { ToastContainer, toast } from "react-toastify";
type Props = {};

const Pictures = (props: Props) => {
    const {
        category,
        setCategory,
        productName,
        setProductName,
        condition,
        setCondition,
        brand,
        setBrand,
        location,
        setLocation,
        productDescription,
        setProductDescription,
        tags,
        setTags,
        productImages,
        setProductImages,
        formNumber,
        setFormNumber,
        links,
        setLinks,
        specs,
        setSpecs,
        price,
        setPrice,
        soldDate,
        setSoldDate,
    } = useContext(AppContext);
    const uploadCloudinary = async (file: any) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "auction-product");
        const res = await fetch(
            `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_API}/image/upload`,
            {
                method: "POST",
                body: formData,
            }
        );
        return await res.json();
    };

    const [images, setImages] = useState<any>([]);
    // const [links, setLinks] = useState<any[]>([])
    const imageSubmitHandler = async (e: any) => {
        e.preventDefault();
        try {
            let arr: any[] = [];
            for (let i = 0; i < images.length; i++) {
                const data = await uploadCloudinary(images[i]);
                arr.push(data);
                console.log(data);
            }
            setLinks((links: any) => [...links, ...arr]);
            console.log(arr);
        } catch (error) {
            console.log(error);
        }
    };

    const formSubmitHandler = () => {
        console.log(links);
        if (links.length < 4) {
            // toast.success('🙌 Auction created successfully!');
            // // toast.error('Please upload at least four image!');
            return toast.error("😓 Please upload at least four image!");
        }
        // get all form data from context and create a product json object
        // sample product json object
        // {
        //   "_id": "64526677e862bc95ff206759",
        //   "name": "Honda CB Shine",
        //   "brand": "Honda",
        //   "description": "Honda CB Shine is a 124.7 cc, 4 stroke engine motorcycle with advanced features.",
        //   "tags": [],
        //   "price": 60000,
        //   "rating": 4,
        //   "sellerReviews": [
        //     {
        //       "name": "Steven",
        //       "comment": "The bike is nice and the performance is great. The seller was very helpful and the bike arrived in good condition.",
        //       "rating": 4.5
        //     },
        //     {
        //       "name": "Melissa",
        //       "comment": "I am very pleased with my purchase. The bike has a nice design and the engine is strong. The seller was very responsive.",
        //       "rating": 4
        //     }
        //   ],
        //   "productQuestions": [
        //     {
        //       "name": "Tim",
        //       "comment": "Does this bike have a kick start?",
        //       "response": "Yes, the Honda CB Shine has a kick start."
        //     },
        //     {
        //       "name": "Dylan",
        //       "comment": "What is the engine type of this bike?",
        //       "response": "The Honda CB Shine has a 124.7 cc, 4 stroke engine."
        //     }
        //   ],
        //   "condition": "New",
        //   "images": [
        //     "https://picsum.photos/200/300",
        //     "https://example.com/honda-cb-shine-image2.jpg",
        //     "https://example.com/honda-cb-shine-image3.jpg"
        //   ],
        //   "createDate": "2023-05-03T12:00:00.000Z",
        //   "soldDate": null,
        //   "seller": "Jill Doe",
        //   "buyer": "",
        //   "status": "Available",
        //   "category": "Bikes",
        //   "specs": {
        //     "Age (years)": 2023,
        //     "transmission": "manual",
        //     "Owner": "first",
        //     "Fuel Capacity (12L)": 12,
        //     "Power (CC)": 124.7,
        //     "Fuel": "Petrol",
        //     "Kilometers Driven": 225,
        //     "Mileage (KMPL)": 45
        //   },
        //   "location": "Delhi, IN",
        //   "returns": false,
        //   "bids": 0,
        //   "__v": 0
        // }
        if (localStorage.getItem("uname") == null) {
            return toast.error("😓 Please login or refresh to create auction!");
        }
        const product = {
            name: productName,
            brand: brand,
            description: productDescription,
            tags: tags,
            price: price,
            rating: 0,
            sellerReviews: [],
            productQuestions: [],
            condition: condition,
            images: links.map((link: any) => link.secure_url),
            createDate: new Date(),
            soldDate: soldDate,
            seller: localStorage.getItem("uname"),
            buyer: "",
            category: category,
            specs: specs,
            location: location,
            bids: 0,
        };
        console.log(product);

        // send product json object to backend
        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/product/new`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("Product From server", data);
                // setCategory('');
                setProductName("");
                setBrand("");
                setProductDescription("");
                setTags([]);
                setPrice(0);
                setCondition("");
                setSoldDate(new Date());
                setSpecs({});
                setLocation("");
                setLinks([]);
                toast.success("🙌 Auction created successfully!");
                setFormNumber(4);
            })
            .catch((err) => {
                toast.error("😓 Something went wrong!");
                console.log(err);
            });
    };

    return (
        <div className="mt-8 p-4">
            <ToastContainer />
            <div className="flex flex-col space-y-4 items-center">
                <form
                    onSubmit={imageSubmitHandler}
                    className="flex space-x-2 items-center mx-auto"
                >
                    <input
                        type="file"
                        multiple={true}
                        onChange={(e) => setImages(e.target.files)}
                    />
                    <button
                        type="submit"
                        className="text-base  ml-2  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer hover:bg-mobile bg-mobile text-mobile-light border duration-200 ease-in-out border-mobile transition"
                    >
                        Upload
                    </button>
                </form>
                <div className="flex flex-wrap gap-2 my-2">
                    {links &&
                        links.length > 0 &&
                        links.map((link: any, id: number) => {
                            return (
                                <div
                                    key={id}
                                    className="object-contain w-56 h-56 flex items-center justify-center shadow-md"
                                >
                                    <img
                                        src={link?.url}
                                        alt=""
                                        className="object-contain shadow-md border-mobile hover:border-2"
                                    />
                                </div>
                            );
                        })}
                </div>
            </div>
            <div className="flex p-2 mt-4">
                <button
                    onClick={() => {
                        setFormNumber(2);
                    }}
                    className="text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer hover:bg-mobile-light bg-mobile-light text-mobile border duration-200 ease-in-out border-mobile transition"
                >
                    Previous
                </button>
                <div className="flex-auto flex flex-row-reverse">
                    <button
                        onClick={formSubmitHandler}
                        className="text-base  ml-2  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer hover:bg-mobile bg-mobile text-mobile-light border duration-200 ease-in-out border-mobile transition"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Pictures;

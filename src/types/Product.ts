export interface Product {
    _id: number
    name: string
    brand: string
    description: string
    tags: string[]
    price: number
    rating: number
    sellerReviews: SellerReview[]
    productQuestions: ProductQuestion[]
    condition: string
    images: string[]
    createDate: string
    status: string
    category: string
    specs: Specs
    location: string
    returns: boolean
    bids: number
  }
  
  export interface SellerReview {
    name: string
    comment: string
    rating: number
  }
  
  export interface ProductQuestion {
    name: string
    comment: string
    response: string
  }
  
  export interface Specs {
    [key: string]: string;
  }
  

// {
// "name":"Apple iPhone 14",
// "description":"The latest iPhone model from Apple with a sleek design and cutting-edge features.",
// "price": 160000,
// "rating":4.8,
// "reviews":[{"name":"Alice","comment":"The seller was very prompt in responding to my questions and the phone was delivered in perfect condition.","rating":5}, {"name":"Charlie","comment":"I'm very happy with my purchase. The phone works flawlessly and looks amazing.","rating":4.5}],
// "condition":"New",
// "images":["https://example.com/iphone14-image1.jpg", "https://example.com/iphone14-image2.jpg", "https://example.com/iphone14-image3.jpg"],
// "createDate": "2023-04-30T14:00:00Z",
// "soldDate": null,
// "seller":"Rajveer M.",
// "status":"Available",
// "category":"Mobiles",
// "specs":{"Battery":3200,"bluetooth":true,"Clock Speed":2.5, "Dual Sim":false,"Camera Mega Pixels(Front)":12, "Connectivity": "5G","Internal Memory (GB)":256, "Number of Processor Cores":6, "Camera Mega Pixels(Primary)":48,"Screen Height (Pixels)":2532,"Screen Width (Pixels)":1170,"Ram":8,"Screen Height (cm)":16.51, "Screen Width (cm)":7.53,"Wifi":true},
// "location":"New York, US",
// "returns":true,
// "bids":0
// }

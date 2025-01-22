import React, { useEffect, useState } from 'react'
import Shop from './Shop'
import './App.css'

const Shops = () => {
    const [shops, setShops] = useState([])
    const [newshops, setNewshops] = useState({
        image: "",
        title: "",
        description: "",
        price: ""
    })

    useEffect(() => {
        const fetchshop = async () => {
            try {
                const getshops = await fetch("https://fakestoreapi.com/products")
                const countshop = await getshops.json()
                setShops(countshop)
            } catch (error) {
                console.log("There was an error getting the API", error);
            }
        }
        fetchshop()
    }, [])

    const deleteproducts = (index) => {
        const newlists = shops.filter((item, delIndex) => delIndex !== index)
        setShops(newlists)
    }
    const addproducts = () => {
        setShops([...shops, newshops])
        setNewshops({
            image: "",
            title: "",
            description: "",
            price: ""
        })
    }
    return (
        <div>
            <div className="catalog">
                {shops.map((shop, index) => (
                    <Shop
                        key={index}
                        image={shop.image}
                        title={shop.title}
                        desc={shop.description}
                        price={shop.price}
                        btn={() => deleteproducts(index)}
                    />
                ))}
            </div>
            {/* To add image from saved files */}
            <input
                type="file"
                onChange={(e) => {const Shops = () => {
                    const [shops, setShops] = useState([])
                    const [newshops, setNewshops] = useState({
                        image: "",
                        title: "",
                        description: "",
                        price: ""
                    })
                
                    useEffect(() => {
                        const fetchshop = async () => {
                            try {
                                const getshops = await fetch("https://fakestoreapi.com/products")
                                const countshop = await getshops.json()
                                setShops(countshop)
                            } catch (error) {
                                console.log("There was an error getting the API", error);
                            }
                        }
                        fetchshop()
                    }, [])
                
                    const deleteproducts = (index) => {
                        const newlists = shops.filter((item, delIndex) => delIndex !== index)
                        setShops(newlists)
                    }
                    const addproducts = () => {
                        setShops([...shops, newshops])
                        setNewshops({
                            image: "",
                            title: "",
                            description: "",
                            price: ""
                        })
                    }
                    return (
                        <div>
                            <div className="catalog">
                                {shops.map((shop, index) => (
                                    <Shop
                                        key={index}
                                        image={shop.image}
                                        title={shop.title}
                                        desc={shop.description}
                                        price={shop.price}
                                        btn={() => deleteproducts(index)}
                                    />
                                ))}
                            </div>
                            {/* To add image from saved files */}
                            <input
                                type="file"
                                onChange={(e) => {
                                    const file = e.target.files[0];
                                    const reader = new FileReader();
                                    reader.onload = () =>{
                                        setNewshops((newshops) => ({ ...newshops, image: reader.result}))
                                    };
                                    reader.readAsDataURL(file);
                                }}
                            /> <br />
                            <label> Title</label> <br />
                            <input type="text" value={newshops.title} onChange={(ppp) => setNewshops({...newshops,  title: ppp.target.value})}/> <br /> <br />
                            <label> Description</label> <br />
                            <textarea value={newshops.description} onChange={(ppp) => setNewshops({...newshops,  description: ppp.target.value})}></textarea> <br /><br />
                            <label> Price</label> <br />
                            <input type="text" value={newshops.price} onChange={(ppp) => setNewshops({...newshops,  price: ppp.target.value})}/> <br /> <br />
                            <button onClick={() => addproducts()}>Add product</button>
                        </div>
                    )
                }
                    const file = e.target.files[0];
                    const reader = new FileReader();
                    reader.onload = () =>{
                        setNewshops((newshops) => ({ ...newshops, image: reader.result}))
                    };
                    reader.readAsDataURL(file);
                }}
            /> <br />
            <label> Title</label> <br />
            <input type="text" value={newshops.title} onChange={(ppp) => setNewshops({...newshops,  title: ppp.target.value})}/> <br /> <br />
            <label> Description</label> <br />
            <textarea value={newshops.description} onChange={(ppp) => setNewshops({...newshops,  description: ppp.target.value})}></textarea> <br /><br />
            <label> Price</label> <br />
            <input type="text" value={newshops.price} onChange={(ppp) => setNewshops({...newshops,  price: ppp.target.value})}/> <br /> <br />
            <button onClick={() => addproducts()}>Add product</button>
        </div>
    )
}

export default Shops

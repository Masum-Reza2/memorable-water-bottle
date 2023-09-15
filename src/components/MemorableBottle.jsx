import { useState } from "react"
import { useEffect } from "react"
import Card from "./Card"
import { addToLS, getStoredCart, removeFromLS } from "./localstorage"

const MemorableBottle = () => {

    const [bottles, setBottles] = useState([])
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/memorable-water-bottle/main/public/bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])

    const [selects, setSelects] = useState([])
    const handleAdd = (data) => {
        let newArray = [...selects, data]
        setSelects(newArray)

        addToLS(data.id)
    }

    const handleDelete = (data) => {
        let newArray = selects.filter(item => item !== data)
        setSelects(newArray)
        removeFromLS(data.id);
    }

    // dependenci useeEffect
    useEffect(() => {
        // console.log('before loading the bottles', bottles.length)
        if (bottles.length) {
            let storedData = getStoredCart()
            let savedCart = [];

            for (let id of storedData) {
                let bottle = bottles.find(bottle => bottle.id === id)
                if (bottle) {
                    savedCart.push(bottle)
                }
            }
            setSelects(savedCart)
        }
    }, [bottles])

    return (
        <>
            <div className="text-center font-bold text-xl py-4">
                <h1>Bottles : {bottles.length}</h1>
                <h1 className="underline">Selections : {selects.length}</h1>
                <div >
                    {
                        selects.map((item, index) => <div key={index} className="flex flex-wrap justify-center py-4 rounded-md gap-2">
                            <div className="space-y-2">
                                <img className="w-[100px]" src={item.img}></img>
                                <button className="font-semibold border shadow-md shadow-gray-500 px-3 py-1 rounded-md" onClick={() => handleDelete(item)}>Remove</button>
                            </div>
                        </div>)
                    }
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] mx-auto py-5 gap-5">
                {
                    bottles.map((bottle, index) => <Card key={index} bottle={bottle} handleAdd={handleAdd} />)
                }
            </div>
        </>
    )
}

export default MemorableBottle
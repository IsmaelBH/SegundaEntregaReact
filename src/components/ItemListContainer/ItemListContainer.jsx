import { useState, useEffect } from "react"
import "./ItemListContainer.css"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import Spinner from "../Spinner/Spinner"

const ItenListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams();

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await fetch('/productos.json')
                const data = await response.json()
                const filterProducts = categoryId ? data.filter((p) => p.category === categoryId) : data;
                setProducts(filterProducts)


            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }

        }

        fetchData()

    }, [categoryId])

    return (
        <div className="container">

            <h1>{greeting}</h1>

            {loading ? <Spinner /> : <ItemList products={products} />}

        </div>
    )
}

export default ItenListContainer

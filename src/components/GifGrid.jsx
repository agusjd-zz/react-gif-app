import { useFetchGifs } from "../hooks/useFetchGifs"
import { GifItem } from "./GifItem"

export const GifGrid = ({category}) => {

    const {images,isLoading} = useFetchGifs(category)
    

    return (
            <>
                <h3> {category} </h3>
                <div className="card-grid"> 

                {isLoading ? <h2>Cargando... </h2>:images.map( (img) =>(
                   
                   <GifItem key={img.id} {...img} />
               ))}
                
                </div>
            
            </>
    )
}

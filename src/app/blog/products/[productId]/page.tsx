import { Metadata } from "next"


type Props = {
    params: {
        productId: string
    }
}

export const generateMetadata = async ({params}: Props) : Promise <Metadata> => {
    
    const title = await new Promise(resolve => (
        setTimeout(() => {
            resolve(`Details about the product ${params.productId}`)
        }, 100)
    ))
    
    return {
        title: `Details about the product ${title}`,
    }
}

export default function ProductDetails({ params }: Props) {
    return <h1>Details about the product {params.productId}</h1>
}

import { ProductType } from "./interfaces"


export const shuffleArray = ( arr: ProductType[] ) => {
    return arr.sort(() => Math.random() - 0.5)
}
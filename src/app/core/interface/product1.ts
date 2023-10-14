export interface Product1 {

    title:string,
    category: category,
    imageCover:string,
    ratingsAverage:number,
    price:number
    _id?:string
}

export interface category{
    name:string;
}
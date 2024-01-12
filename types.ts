export interface Billboard {
    _id:string,
    label:string,
    imageUrl:string,
}

export interface Category {
    _id:string,
    name:string,
    billboardId:Billboard,
}

export interface Product {
    _id:string,
    categoryId:Category,
    name:string,
    price: string,
    images: Image[],
}

export interface Image {
    _id:string,
    url:string
}


export default interface Review {
    content:    string;
    helpful:    number;
    title:      string;
    author:     string;
    date:       string;
    rating1:     number;
    notHelpful: number;
}


export default interface Movie {
    id:          number;
    title:       string;
    date:        string;
    image:       string;
    rating:      string;
    genres:      string;
    trailer:     string;
    cast:        string;
    credits:     string;
    company:     string;
    description: string;
    price:       string;
    sales:       string;
    reviews:     Review[];
}

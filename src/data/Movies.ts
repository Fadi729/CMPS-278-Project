export default interface Movie {
    id:          number;
    title:       string;
    image:       string;
    rating:      number;
    genres:      string[];
    trailer:     string;
    cast:        string[];
    credits:     string[];
    description: string;
    price:       number;
    reviews:     Review[];
}

interface Review {
    content:    string;
    helpful:    number;
    title:      string;
    author:     string;
    date:       string;
    rating:     number;
    notHelpful: number;
}
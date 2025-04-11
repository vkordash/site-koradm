import { SafeUrl } from "@angular/platform-browser";

export interface Carousel {
    id         : number;
    image      : SafeUrl;
    thumbImage ?: SafeUrl;    
    title      ?: number;
    link       ?: string;
    text       ?: string

}

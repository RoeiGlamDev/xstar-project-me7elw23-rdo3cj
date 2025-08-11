export const BRAND_NAME: string = "CleanSSR";
export const PRIMARY_COLOR: string = "#800080"; // Purple
export const SECONDARY_COLOR: string = "#FFFFFF"; // White

// Configuration for CleanSSR application
export const CONFIG = {
    siteTitle: ${BRAND_NAME} - Technology Cleaning Solutions,
    siteDescription: "CleanSSR provides cutting-edge technology solutions for your cleaning needs. Experience the future of cleanliness with our innovative services.",
    contactEmail: "support@cleanSSR.com",
    phoneNumber: "+1-800-555-0199",
    address: "123 Clean St, Tech City, TX 75001",
    socialMedia: {
        facebook: "https://facebook.com/CleanSSR",
        twitter: "https://twitter.com/CleanSSR",
        linkedin: "https://linkedin.com/company/cleanSSR"
    },
    reviews: [
        {
            id: 1,
            reviewerName: "John Doe",
            reviewText: "CleanSSR transformed our office cleaning experience with their advanced tech solutions. Highly recommend!",
            rating: 5
        },
        {
            id: 2,
            reviewerName: "Jane Smith",
            reviewText: "Exceptional service and innovative cleaning technology! CleanSSR is the future.",
            rating: 4.5
        },
        {
            id: 3,
            reviewerName: "Mike Johnson",
            reviewText: "Professional and efficient. CleanSSR has set a new standard in the cleaning industry.",
            rating: 5
        }
    ]
};

// Define types for CleanSSR application
export interface Review {
    id: number;
    reviewerName: string;
    reviewText: string;
    rating: number;
}

export interface SocialMediaLinks {
    facebook: string;
    twitter: string;
    linkedin: string;
}

export interface Config {
    siteTitle: string;
    siteDescription: string;
    contactEmail: string;
    phoneNumber: string;
    address: string;
    socialMedia: SocialMediaLinks;
    reviews: Review[];
}

// Exporting the config type for usage in other parts of the application
export type { Config, Review };
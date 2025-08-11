import { CSSProperties } from 'react';

/
 * Utility functions for CleanSSR application
 * Provides reusable functions for styling and formatting
 * in the context of a technology cleaning service company.
 */

// Define color constants for CleanSSR branding
export const COLORS = {
    PRIMARY: '#800080', // Purple
    SECONDARY: '#FFFFFF', // White
};

// Function to construct class names conditionally
export const cn = (...classes: string[]): string => {
    return classes.filter(Boolean).join(' ');
};

/
 * Formats a given review object into a displayable string.
 * @param review - The review object containing user feedback.
 * @returns A formatted string for display.
 */
export const formatReview = (review: Review): string => {
    return "${review.comment}" - ${review.author};
};

// Define Review interface specific to CleanSSR
export interface Review {
    author: string;
    comment: string;
    rating: number; // Rating out of 5
}

/
 * Formats a service description in a clean and minimal style.
 * @param description - The raw service description text.
 * @returns A formatted string for display.
 */
export const formatServiceDescription = (description: string): string => {
    return description.trim().replace(/\s+/g, ' ');
};

// Define Service interface for CleanSSR services
export interface Service {
    id: number;
    title: string;
    description: string;
    price: number; // Price in dollars
}

/
 * Returns a minimal styled object for button components.
 * @returns A style object for buttons in CleanSSR.
 */
export const buttonStyles = (): CSSProperties => {
    return {
        backgroundColor: COLORS.PRIMARY,
        color: COLORS.SECONDARY,
        border: 'none',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
        transition: 'background-color 0.3s ease',
    };
};
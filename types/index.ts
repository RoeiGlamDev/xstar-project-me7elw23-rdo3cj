import { Review } from './reviews';

/
 * Interface representing a service offered by CleanSSR.
 */
export interface Service {
    id: number;
    name: string;
    description: string;
    price: number;
}

/
 * Interface representing a customer for CleanSSR.
 */
export interface Customer {
    id: number;
    name: string;
    email: string;
    phone: string;
}

/
 * Interface representing an order placed by a customer.
 */
export interface Order {
    id: number;
    customer: Customer;
    services: Service[];
    totalAmount: number;
    orderDate: Date;
}

/
 * Interface representing a review for CleanSSR's services.
 */
export interface CleanSSRReview extends Review {
    serviceId: number;
}

/
 * Type representing the response structure for fetching services.
 */
export type ServiceResponse = {
    services: Service[];
};

/
 * Type representing the response structure for fetching reviews.
 */
export type ReviewResponse = {
    reviews: CleanSSRReview[];
};

/
 * Function to calculate the total price of services in an order.
 * 
 * @param services - Array of services selected by the customer.
 * @returns Total price of the selected services.
 */
export const calculateTotal = (services: Service[]): number => {
    return services.reduce((total, service) => total + service.price, 0);
};

/
 * Function to create a new order for CleanSSR.
 * 
 * @param customer - Customer placing the order.
 * @param services - Services selected for the order.
 * @returns A new order object.
 */
export const createOrder = (customer: Customer, services: Service[]): Order => {
    const totalAmount = calculateTotal(services);
    return {
        id: Date.now(), // Simple ID generation
        customer,
        services,
        totalAmount,
        orderDate: new Date(),
    };
};
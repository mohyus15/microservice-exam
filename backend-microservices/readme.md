1: Pull all these images from Docker Hub
docker pull mohyus15/backend-microservices-auth-users
docker pull mohyus15/backend-microservices-fruad
docker pull mohyus15/backend-microservices-notification
docker pull mohyus15/backend-microservices-orders
docker pull mohyus15/backend-microservices-shipping
docker pull mohyus15/backend-microservices-products
docker pull mohyus15/backend-microservices-api-gateway
docker pull mohyus15/postgres:latest
docker pull mohyus15/rabbitmq:3.13.0-rc.4-management-alpine
docker pull mohyus15/pgadmin4:latest
docker pull mohyus15/frontend
docker pull mohyus15/zipkin:latest
docker pull mohyus15/backend-microservices-discovery-server
2: Run the following command to start Docker compose with rebuilding
docker-compose up -d --build
3:Here's how the website works:
When users land on the homepage, they select a product.
The selected product takes them to the project details page where they can choose the quantity.
At the top right of the page, there's a shopping cart icon. Clicking on it reveals the shopping cart.
Users need to register as a user if they haven't already. Once registered, their credentials are saved in the browser's local storage.
After these steps, users are redirected to the shipping page, which operates on its own server.
Finally, they reach the place order page where they can review shipping details and order information before submitting the order.
4:The main purpose of this project is to create a web application using microservices. Please note that the frontend is not well-built and some pages lack proper protection.


sometimes the frontend page need to show the products, the reason is that each server have commanline with data use this api: 
http://localhost:8080/api/products                                                                     {
"name": "java",
"image":"https://images.unsplash.com/photo-1622997151859-455e5797aca1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8amF2YSUyMGJvb2t8ZW58MHx8MHx8fDA%3D",
"brand": "Example Brand",
"category": "books",
"countInStock": 110,
"description": "This is an example product.",
"price": 200
}

http://localhost:8080/api/orders                                                                                                                                           {
"email": "mo@example.com",
"orderListItemsDto": [
{
"name": "Product 4",
"image":"https://plus.unsplash.com/premium_photo-1680985551009-05107cd2752c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGhvbmV8ZW58MHx8MHx8fDA%3D",
"brand": 2002,
"category": "Category 1",
"countInStock": 11110,
"description": "Description of Product 1",
"price": 5.99
}
],
"orderNumber": "fdfshagfuyegfuyweg"
}

          




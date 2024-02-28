Guidelines to my application

this is the servers and their port I have in application 
products: 8081
orders: 8085
notification: 8086
shipping: 8087
fraud: 8084
auth-users : 8089
discovery-server: 8761
api-gateway: 8080 
postgres: 5432 using in docker 
frontend: 3000
Zipkin: 9411
pgadmin: 5050
beside all those servers i am using openfeign 





1: Run the following command to start Docker compose using docker see the m
docker compose up -d build
docker-compose up -d



3:Here is how my application works (Let me remind you of my assignment requirements):
When users land on the homepage, they select a product.
The selected product takes them to the project details page where they can choose the quantity.
At the top right of the page, there's a shopping cart icon. Clicking on it reveals the shopping cart.
Users need to register as a user if they haven't already. Once registered, their credentials are saved in the browser's local storage.
After these steps, users are redirected to the shipping page, which operates on its own server.
Finally, they reach the place order page where they can review shipping details and order information before submitting the order.
4:The main purpose of this project is to create a web application using microservices.
Please note that the frontend is not well-built and some pages lack proper protection.
i have add shipping server which haven mention arbeidskrav, i need so application have enough server and to learn more microservices,
the shipping server does not use message queues. Please provide your address (including postal code and city), 
as well as the email associated with your current logged-in account.



The purpose of presenting this data is that sometimes the frontend page fails to display the products. 
While I have a command line for each server to execute the data within, 
if the frontend works properly, there is no need to  Postman.

products server POST: http://localhost:8080/api/products  
{
"name": "java",
"image":"https://images.unsplash.com/photo-1622997151859-455e5797aca1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8amF2YSUyMGJvb2t8ZW58MHx8MHx8fDA%3D",
"brand": "Example Brand",
"category": "books",
"countInStock": 110,
"description": "This is an example product.",
"price": 200
}



2: orders server POST http://localhost:8080/api/orders    
{
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


3: notifications server POST http://localhost:8080/api/notifications
{
"orderNumber":"121asfrasda",
"email":"1@hwotmail.com"
}



4: shipping server POST http://localhost:8080/api/shipping

{
"email": "q1@hotmail.com",
"address": "Nordre ve",
"city": "Oslo",
"postcode": 98633,
"country": "Norway"
}




these servers I have in my application with using docker, and  I am using docker to run all of them ,
have push in dockerhub cloud as you can see the images.

✔ Container backend-microservices-frontend-1  Running                                                                                                                                                                        0.0s
✔ Container postgres_db                       Running                                                                                                                                                                        0.0s
✔ Container pgadmin                           Running                                                                                                                                                                        0.0s
✔ Container rabbitmq                          Running                                                                                                                                                                        0.0s
✔ Container zipkin                            Running                                                                                                                                                                        0.0s
✔ Container discovery-server                  Running                                                                                                                                                                        0.0s
✔ Container api-gateway                       Running                                                                                                                                                                        0.0s
✔ Container orders                            Running                                                                                                                                                                        0.0s
✔ Container auth-users                        Running                                                                                                                                                                        0.0s
✔ Container products                          Running                                                                                                                                                                        0.0s
✔ Container notification                      Running                                                                                                                                                                        0.0s
✔ Container fraud                             Running




this is the all the images have pushed to dockerhub
 docker tag b7ee0076f98d mohyus15/frontend:latest
 docker tag 673b4909644c mohyus15/backend-microservices-orders:latest
 docker tag edd1d7207574 mohyus15/backend-microservices-auth-users:latest
 docker tag dd0bf987e0c3 mohyus15/backend-microservices-fraud:latest
 docker tag 116a4e648e56 mohyus15/backend-microservices-shipping:latest
 docker tag 07284a35dbc7 mohyus15/backend-microservices-notification:latest
 docker tag ba4aee8ca710 mohyus15/backend-microservices-products:latest
 docker tag 713d5abc9584 mohyus15/backend-microservices-api-gateway:latest
 docker tag 23f56c4f2cda mohyus15/backend-microservices-discovery-server:latest
 docker tag 6de6379c1216 mohyus15/openzipkin/zipkin:latest
 docker tag 75793281f730 mohyus15/postgres:latest
 docker tag 3fdba4331fcb mohyus15/dpage/pgadmin4:latest
 docker tag e72e6db7c02e mohyus15/rabbitmq:3.13.0-rc.4-management-alpine


docker push mohyus15/frontend:latest
docker push mohyus15/backend-microservices-orders:latest
docker push mohyus15/backend-microservices-auth-users:latest
docker push mohyus15/backend-microservices-fraud:latest
docker push mohyus15/backend-microservices-shipping:latest
docker push mohyus15/backend-microservices-notification:latest
docker push mohyus15/backend-microservices-products:latest
docker push mohyus15/backend-microservices-api-gateway:latest
docker push mohyus15/backend-microservices-discovery-server:latest
docker push mohyus15/openzipkin/zipkin:latest
docker push mohyus15/postgres:latest
docker push mohyus15/dpage/pgadmin4:latest
docker push mohyus15/rabbitmq:3.13.0-rc.4-management-alpine


docker pull mohyus15/frontend:latest
docker pull mohyus15/backend-microservices-orders:latest
docker pull mohyus15/backend-microservices-auth-users:latest
docker pull mohyus15/backend-microservices-fraud:latest
docker pull mohyus15/backend-microservices-shipping:latest
docker pull mohyus15/backend-microservices-notification:latest
docker pull mohyus15/backend-microservices-products:latest
docker pull mohyus15/backend-microservices-api-gateway:latest
docker pull mohyus15/backend-microservices-discovery-server:latest
docker pull mohyus15/openzipkin/zipkin:latest
docker pull mohyus15/postgres:latest
docker pull mohyus15/dpage/pgadmin4:latest
docker pull mohyus15/rabbitmq:3.13.0-rc.4-management-alpine



 # Guidelines for my Application


 ## These are the servers and their respective ports used in my application:
* Products: 8081
* Orders: 8085
* Notification: 8086
* Shipping: 8087
* Fraud: 8084
* Auth-Users: 8089
* Discovery Server: 8761
* API Gateway: 8080
* Postgres: 5432 (used in Docker)
* Frontend: 3000
* Zipkin: 9411
* Pgadmin: 5050
* In addition to these servers, I am also utilizing OpenFeign.

# 1. Starting Docker Compose:
To start Docker Compose, run the following command:

docker-compose up -d
docker-compose up -d --build

# 2. Application Workflow:
Here's how my application functions, as per the assignment requirements:

Users land on the homepage and select a product.
They are then directed to the product details page to select the quantity.
A shopping cart icon at the top right corner reveals the shopping cart upon clicking.
Users must register if they haven't already. Once registered, their credentials are stored in the browser's local storage.
After registration, users are redirected to the shipping page, operating on a separate server.
Finally, users reach the place order page where they can review shipping details and order information before submitting the order.


### synchronous communication

In the auth-users service, we directly communicate synchronously with the fraud service to perform fraud checks during user registration.
Using a RestTemplate, we send a request to the fraud service's endpoint. Upon receiving the response, we check if the user is flagged as a fraudster. 
If detected, an exception is thrown, indicating fraudulent activity. Additionally, the service saves the fraud check result in the database.
see see img on below, or ```select * from fraud_check_history``` in the fraud database 

### asynchronous communication 
Whenever an order is placed within the order server, a notification containing crucial information like the user's email,
order ID, and product details is promptly relayed to the notification service. 
This asynchronous communication is made possible through a message queue, aligning with the event-driven architecture principles covered in class.
The notification server then persists the received data in PostgreSQL, allowing users to view relevant information through the frontend 





# 3. Application Purpose:
The main purpose of this project is to develop a web application using microservices. Note that while the frontend is functional, some pages lack proper protection. The addition of the shipping server was necessary for both the assignment requirements and to further explore microservices architecture. It's important to mention that the shipping server does not utilize message queues.


1: products server POST: http://localhost:8080/api/products  
```
{
"name": "java",
"image":"https://images.unsplash.com/photo-1622997151859-455e5797aca1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8amF2YSUyMGJvb2t8ZW58MHx8MHx8fDA%3D",
"brand": "Example Brand",
"category": "books",
"countInStock": 110,
"description": "This is an example product.",
"price": 200
}
```


´´´
2: orders server POST http://localhost:8080/api/orders    
```
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
```

3: notifications server POST http://localhost:8080/api/notifications
```
{
"orderNumber":"121asfrasda",
"email":"1@hwotmail.com"
}
```


4: shipping server POST http://localhost:8080/api/shipping
```

{
"email": "q1@hotmail.com",
"address": "Nordre ve",
"city": "Oslo",
"postcode": 98633,
"country": "Norway"
}

```

5: auth users POST http://localhost:8080/api/v1/signup
```
{
    "firstName":"q11s",
    "lastName":"qwssw11",
    "email": "q1wwss13@hotmail.com",
    "password":"12345"
}
```

<<<<<<< HEAD
#4. Admin Dashboard:
Admin credentials: all of them are admin
=======
6: fraud server http://localhost:8084/api/fraud/7

use this url to chech where user is fraud or not, by giving /id number

#4. Admin Dashboard:
Admin credentials: all of them are admin
1:
```
>>>>>>> 1947fb9420ec92ba019c5e02b262bfb53277bd91
 Email: john.doe@example.com, 
 Password: password123";
```
2:
```
 Email: jane.doe@example.com,
 Password: password456";
```
3:
```
 Email: alice.smith@example.com, 
 Password: password789
```
4:
```
 Email: bob.johnson@example.com, 
 Password: passwordabc";
```

The admin dashboard allows administrators to manage products, review orders, shipping, notifications, and users.
Images:
Here are screenshots illustrating various aspects of the application:
![Screenshot 2024-02-28 at 14 58 10](https://github.com/mohyus15/microservice-exam/assets/94177387/e8035ab5-9c6f-4bf2-acb4-792dd767ef6d)

front page where the user will  start when application is started, and user will select products.

![Screenshot 2024-02-28 at 15 56 20](https://github.com/mohyus15/microservice-exam/assets/94177387/57825ade-42e3-48c7-b2b2-da03095251c4)
this is the next page where user will redirect to that products detal to selct qty for this 

![Screenshot 2024-02-28 at 15 58 34](https://github.com/mohyus15/microservice-exam/assets/94177387/65e2c670-fef8-4c96-8297-b54d644bb5b0)
![Screenshot 2024-02-28 at 16 06 34](https://github.com/mohyus15/microservice-exam/assets/94177387/b3e17629-27bc-4782-8026-3a18b63efd73)

After this, you will be redirected to the user registration page. If you have already registered,
you can see your email displayed at the top right corner.
Your user data will be securely stored in the database with encryption, 
and the password will be hashed. Additionally, your user information will be stored locally using localStorage.

![Screenshot 2024-02-28 at 16 17 46](https://githu![Screenshot 2024-02-28 at 16 18 29](https://github.com/mohyus15/microservice-exam/assets/94177387/9ae4ca00-860a-413d-a709-d75b006e6bd1)
b.com/mohyus15/microservice-exam/assets/94177387/e7a8c9dc-40f9-4131-a2d1-868032b29e16)

finaly will arrive this page where the user see the order summary, before redirect to home page

![Screenshot 2024-02-28 at 16 18 45](https://github.com/mohyus15/microservice-exam/assets/94177387/3a82386d-cb7a-480b-b99d-64289897ae6f)


i have postgres database and pgadmin
http://localhost:5050/browser/
pgadmin password: oslo2020
create server to see the data this pgadmin as the image shows
<img width="841" alt="Screenshot 2024-02-28 at 16 58 09" src="https://github.com/mohyus15/microservice-exam/assets/94177387/db01aca0-5946-4304-b2f8-f589a9cdbe74">
![Screenshot 2024-02-28 at 15 33 57](https://github.com/mohyus15/microservice-exam/assets/94177387/e272fc8b-46c5-47f5-97e9-33a79806d912)
![Screenshot 2024-02-28 at 15 33 57](https://github.com/mohyus15/microservice-exam/assets/94177387/97a966d8-b1f2-43d8-9a01-f033fadbf033)
![Screenshot 2024-02-28 at 15 34 16](https://github.com/mohyus15/microservice-exam/assets/94177387/35b2d28d-7e56-452e-a47b-15f832bad3ad)
![Screenshot 2024-02-28 at 15 34 46](https://github.com/mohyus15/microservice-exam/assets/94177387/4360d3e7-9ccf-4ee2-9c3c-4f9bb9bd32b9)
and final part for this is to create connection pgadmin in order to see data that belongs to this application. see image.
use this postgres_user: postgres
postgres_password: oslo2020
finally will land on this side of the pg admin 
![Screenshot 2024-02-28 at 15 35 00](https://github.com/mohyus15/microservice-exam/assets/94177387/6637a1b9-5cf7-4cab-8e08-b769bec99d50)
![Screenshot 2024-02-28 at 15 36 19](https://github.com/mohyus15/microservice-exam/assets/94177387/c505aff2-e1c5-4ae4-82f7-4c53edcccad8)


# Rabbitmq interface:
http://localhost:15672/#/

![Screenshot 2024-02-28 at 15 37 09](https://github.com/mohyus15/microservice-exam/assets/94177387/f33f7b7c-a367-40fb-ba6f-23e115abaa95)
![Screenshot 2024-02-28 at 15 39 27](https://github.com/mohyus15/microservice-exam/assets/94177387/5ee87428-7658-4556-ad60-90b9535d1622)


this alle images shows that servers runing spring eurka port: http://localhost:8761/
![Screenshot 2024-02-28 at 15 33 10](https://github.com/mohyus15/microservice-exam/assets/94177387/4aa8fc93-8464-4042-99aa-fd55cab71e6e)


# images related to docker
![Screenshot 2024-02-28 at 14 41 06](https://github.com/mohyus15/microservice-exam/assets/94177387/70ba53c4-8b67-47e9-9ada-547967788ba7)

![Screenshot 2024-02-28 at 14 41 15](https://github.com/mohyus15/microservice-exam/assets/94177387/d86d44ea-9783-41e6-8593-4e3ed51977cf)

message logs in dcoker desktop 
![Screenshot 2024-02-28 at 14 40 42](https://github.com/mohyus15/microservice-exam/assets/94177387/c1dabbfd-e3bf-4802-906c-143f67a28c8f)
![Screenshot 2024-02-28 at 14 40 16](https://github.com/mohyus15/microservice-exam/assets/94177387/5cb88acc-71e1-482d-a7a8-800970a61d5c)
![Screenshot 2024-02-28 at 14 39 41](https://github.com/mohyus15/microservice-exam/assets/94177387/cdd9c611-e16a-468f-a3f1-e6f06f8260af)


these servers I have in my application are using docker, and  I am using docker to run all of them ,
have push in dockerhub cloud as you can see the images.                                                                                                                                           

![Screenshot 2024-02-29 at 17 07 10](https://github.com/mohyus15/microservice-exam/assets/94177387/566929a5-853f-410a-9d1c-b5e102b0e653)

![Screenshot 2024-02-28 at 17 24 25 (2)](https://github.com/mohyus15/microservice-exam/assets/94177387/e689cda4-f957-4c79-bce4-30104c052642)


fruad images 

![Screenshot 2024-02-29 at 03 06 56](https://github.com/mohyus15/microservice-exam/assets/94177387/45ad054b-567b-479c-8f80-9cff7e0cfd39)

![Screenshot 2024-02-29 at 02 38 13](https://github.com/mohyus15/microservice-exam/assets/94177387/83be2609-e6d3-400e-b85a-302b765575c9)



# Docker Operations:
I have pushed all Docker images to DockerHub cloud. Here are the commands used for tagging and pushing the images:
 docker tag b7ee0076f98d mohyus15/frontend:latest
 docker tag 673b4909644c mohyus15/backend-microservices-orders:latest

pull this images : docker compose up -d
```
docker pull mohyus15/backend-microservices-auth-users:latest
docker pull mohyus15/backend-microservices-fraud:latest
docker pull mohyus15/backend-microservices-notification:latest
docker pull mohyus15/backend-microservices-products:latest
docker pull mohyus15/backend-microservices-api-gateway:latest
docker pull mohyus15/backend-microservices-discovery-server:latest
docker pull mohyus15/frontend:latest
docker pull mohyus15/backend-microservices-orders:latest
docker pull mohyus15/backend-microservices-shipping:latest
docker pull mohyus15/postgres:latest
docker pull mohyus15/dpage/pgadmin4:latest
docker pull mohyus15/rabbitmq:3.13.0-rc.4-management-alpine
docker pull mohyus15/openzipkin/zipkin:latest
docker compose up -d
```


![Screenshot 2024-![Screenshot 2024-02-28 at 14 36 52](https://github.com/mohyus15/microservice-exam/assets/94177387/eb483ab9-0298-49b6-b1f8-9ae32a6349bb)
02-28 at 14 36 42](https://github.com/mohyus15/microservice-exam/assets/94177387/73ff222a-ec39-4612-82c7-4bebfd18eb73)
![Screenshot 2024-02-28 at 17 23 10](https://github.com/mohyus15/microservice-exam/assets/94177387/1bd5d5af-32ef-414d-b5e9-a6d304c1b959)





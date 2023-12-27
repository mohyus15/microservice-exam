part:1
This project encompasses both backend and frontend components. 
In the backend, a microservices architecture is employed, consisting of five services along with two additional servers: an API gateway and an Eureka server. 
RabbitMQ is utilized as a message broker for communication between services, supplemented by direct communication between select servers.
The interaction between the customers and fraud servers involves direct communication. 
Whenever products are created, customers receive a message through RabbitMQ, with the message being displayed exclusively in the terminal.
The OpenFeign framework is employed for this communication.
Order servers communicate with the notification server via RabbitMQ. Consequently,
whenever orders are sent, the notification server receives a message containing customer ID and email information.
This message is then saved in the database.
To address the necessity for customers to have valid addresses when ordering products,
an additional server called the shipping server has been incorporated.
For seamless functionality, it is imperative that all servers register on the RabbitMQ website (http://localhost:15672/). This step is crucial as some servers may not register automatically and require manual intervention.

As depicted in the image, all servers are currently operational. If you have any specific questions or if further clarification is needed, please feel free to ask. you have any specific questions or if further clarification is needed, please feel free to ask.
![Skjermbilde 2023-12-19 kl. 02.30.10.png](..%2F..%2F..%2F..%2Fvar%2Ffolders%2F3y%2Fc29gyvr9123_3k776jds7s4h0000gn%2FT%2FTemporaryItems%2FNSIRD_screencaptureui_adTu3S%2FSkjermbilde%202023-12-19%20kl.%2002.30.10.png)

![Skjermbilde 2023-12-19 kl. 02.30.57.png](..%2F..%2F..%2F..%2Fvar%2Ffolders%2F3y%2Fc29gyvr9123_3k776jds7s4h0000gn%2FT%2FTemporaryItems%2FNSIRD_screencaptureui_BrZiff%2FSkjermbilde%202023-12-19%20kl.%2002.30.57.png)

2) i am using authentication and giving permission users , like admin can see orders, all users, all those things goes through api-gateway.
as i have understood the main goal for this subject to understand how microservices works and connected together, så haven´t forced much frontend,
you can use postman if frontend does´t work.
as new customers you register frontend sign up and then login with username and password, which gives token to access the endpoints.
if frontend does´t work use this endpoints in postman
   "/api/customers/register", 
   http://localhost:8080/api/shipping/all      registering with username, password , email     
   http://localhost:8080/api/customers/login  get the token
   http://localhost:8080/api/customers/all     access the token here if your admin for example.
3) In the frontend i am using nextjs where i have products list and orderliness shipping, 
and notification, sign up and login.
you need to run this commands
npm install
npm run dev


4) i have  docker-compose i my microservices
this is the command you need
   docker-compose up
   docker-compose up -d
   docker-compose down
   docker-compose ps




part:2
Throughout this project, I've had numerous ideas that sparked my enthusiasm,
leading me to add a server, as mentioned in my work requirements.
This journey in coding has been more than just deciphering lines of code and algorithms; 
it has been an active exploration of ideas and solutions.

As I dived into the details of the project, 
I discovered untapped potential and found myself thinking about expanding its scope.
Completing the coding phase fills me with pride and a sense of accomplishment. 
The initial vision has transformed into a functional reality, showcasing the fusion of creativity and technical skills.

One significant realization during this coding journey was the identification of opportunities to improve the project by adding more services. 
This realization naturally led to the project growing beyond its original limits. The coding process not only produced a functional solution but also planted the seeds for a more comprehensive and feature-rich application.

Styling considerations played a crucial role in this coding venture. Beyond just making things work,
I spent time crafting an immersive and visually appealing experience for users. The careful balance of colors,
layouts, and design elements became essential in achieving a harmonious blend of form and function.

As I reflect on the completed coding phase, my thoughts have crystallized into a vision for a more extensive and ambitious project. The foundation has been laid, and the project now acts as a stepping stone for a more significant endeavor that aims to surpass conventional expectations.

Looking ahead, the future is brimming with possibilities.
The lessons learned and ideas generated during the coding process set the stage for ongoing growth and innovation.
My coding experience goes beyond writing lines of code; it involves sculpting a vision that goes beyond boundaries.

In the following pages, I'll articulate this vision and outline the roadmap for the next steps. 
The once blank canvas has been adorned with the strokes of creativity and precision of code. The project stands as a testament to the journey undertaken, and there's an exciting prospect of what lies ahead.


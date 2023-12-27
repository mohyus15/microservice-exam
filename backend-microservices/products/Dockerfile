FROM openjdk:17-jdk
WORKDIR /app
COPY pom.xml .
COPY src ./src
# Run the application
COPY ./target/products-0.0.1-SNAPSHOT.jar .
CMD ["java", "-jar", "target/products-0.0.1-SNAPSHOT.jar"]
EXPOSE 8081
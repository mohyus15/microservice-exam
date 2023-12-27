FROM openjdk:17-jdk
WORKDIR /app
COPY pom.xml .
COPY ./target/shipping-0.0.1-SNAPSHOT.jar shipping.jar
CMD ["java", "-jar", "shipping.jar"]
EXPOSE 8087

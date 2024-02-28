# Use a base image with JDK 17 installed
FROM eclipse-temurin:17
LABEL maintainer="mohyus15@gmail.com"
WORKDIR /app
COPY ./target/auth-users-0.0.1-SNAPSHOT.jar /app/auth-users-0.0.1-SNAPSHOT.jar
EXPOSE 8089
CMD ["java", "-jar", "auth-users-0.0.1-SNAPSHOT.jar"]

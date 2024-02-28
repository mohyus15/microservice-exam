# Use a base image with JDK 17 installed
FROM eclipse-temurin:17

# Metadata
LABEL maintainer="mohyus15@gmail.com"

# Set the working directory inside the container
WORKDIR /app

# Copy the compiled JAR file from the target directory of your Maven build to the current directory inside the container
COPY ./target/auth-users-0.0.1-SNAPSHOT.jar /app/auth-users-0.0.1-SNAPSHOT.jar

# Expose the port that your Spring Boot application listens on
EXPOSE 8089

# Define the command to run your Spring Boot application when the container starts
CMD ["java", "-jar", "auth-users-0.0.1-SNAPSHOT.jar"]

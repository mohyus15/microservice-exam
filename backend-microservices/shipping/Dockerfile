FROM eclipse-temurin:17 AS builder
LABEL maintainer="mohyus15@gmail.com"

# Install Maven
RUN apt-get update && \
    apt-get install -y maven

WORKDIR /app
COPY . .
RUN mvn clean install

FROM eclipse-temurin:17
LABEL maintainer="mohyus15@gmail.com"
WORKDIR /app
EXPOSE 8087
COPY --from=builder /app/target/shipping-0.0.1-SNAPSHOT.jar shipping.jar
CMD ["java", "-jar", "shipping.jar"]

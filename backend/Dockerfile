# Use official OpenJDK 17 base image
FROM openjdk:17-jdk-alpine

# Set working directory
WORKDIR /app

# Copy jar file (make sure you build your project with mvn clean package first)
COPY target/*.jar app.jar

# Run the jar
ENTRYPOINT ["java", "-jar", "app.jar"]
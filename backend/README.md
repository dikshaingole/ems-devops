# Employee Management System - Spring Boot Backend

## What is this?
A minimal, production-ready Spring Boot backend for an Employee Management System.

## Tech
- Spring Boot 3 (Web, Data JPA, Validation)
- PostgreSQL
- Java 17

## How to run
1. Create DB:
   ```sql
   CREATE DATABASE employeedb;
   ```
2. Update credentials in `src/main/resources/application.properties`
3. Run:
   ```bash
   ./mvnw spring-boot:run   # Linux/Mac
   mvnw.cmd spring-boot:run # Windows
   ```
4. Test endpoints:
   - `GET    /api/employees`
   - `GET    /api/employees/{id}`
   - `POST   /api/employees`
   - `PUT    /api/employees/{id}`
   - `DELETE /api/employees/{id}`

## CORS
By default allows `http://localhost:4200` for Angular dev.
Change `app.cors.allowed-origins` if needed.

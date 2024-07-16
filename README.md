# Welcome to the Search Job System!

## System Description

The job search system is a sophisticated platform carefully designed to connect job seekers with ideal vacancies that match their skill sets. Using advanced search algorithms and precise filters, this system offers users a tailored and efficient approach to researching a variety of job offers and submitting resumes. In addition, it allows users to post jobs, giving them the opportunity to attract potential candidates and fill vacancies.
## Table of Contents
- [System Features](#system-features)
- [System Architecture](#system-architecture)
- [Data Protection](#data-protection)
- [Requirements](#requirements)
- [Installation Instructions](#installation-instructions)
- [Screenshots](#screenshots)
- [Contact Us](#contact-us)

## System Features

- **User Profiles:** Job seekers can create and manage their profiles.
- **Job Search:** Users can easily search for jobs by location, and job type.
- **Sending a CV:** Users can send resumes for jobs they are interested in.
- **Application Tracking:** The system allows users to track their job applications, and display the jobs to which they have sent resumes and to which they have applied.
- **Job posting:**  Users have the ability to post jobs, giving them the opportunity to attract potential candidates and fill job vacancies..
- **Mobile Compatibility:** The Search Jobs System is optimized for mobile devices, ensuring a seamless user experience on smartphones and tablets.

## System Architecture

The application follows a client-server architecture, with a client-side application interacting with server-side APIs, which in turn interacts with a database to store and retrieve information. Here's how the various components of the system interact:

### Client-Side Application:

- Developed in Angular, HTML, SCSS, TypeScript, the client-side application is responsible for presenting the user interface (UI) to the end-users.
- It communicates with the server-side APIs, to perform CRUD (Create, Read, Update, Delete) operations and retrieve data via HTTP requests (GET, POST, PUT, DELETE) over the network.

### Server-Side APIs:

- The server-side APIs, developed in .NET using Entity Framework, act as an intermediary between the client-side application and the SQL Server database.
- They handle incoming HTTP requests from the client-side application and execute corresponding logic.
- Server-side APIs interact with the SQL Server database to perform database operations such as inserting, querying, updating, and deleting data.

### Database:

- The database stores the application's data in a structured format.
- It consists of tables to organize data.
- Entity Framework is used for communication between the server-side APIs and the SQL Server database.

### Schematic View of Information in the Database:

- Users Table: Stores information about registered users, their field of work and to whom they sent their CVs.
- Jobs Table: Stores information about the position, the requirements, etc.
- JobFields Table: Stores information about different types of jobs.

Access to job fields list information (addition, deletion, etc.) is done through the Swagger user interface.

### Illustrative illustrations:

<img src="https://github.com/noa1020/Search_jobs_system/assets/146897162/ef6cf820-dfa1-4dbf-9ac2-2d6d19a04ceb" alt="Architectural specification" width="450" style="border:1px solid black">

<img src="https://github.com/noa1020/Search_jobs_system/assets/146897162/000cd4a1-8223-4d43-b173-075af8bc1c12" alt="database" width="600" style="border:1px solid black">

## Data Protection

The system uses a SQL Server database to store data, ensuring data integrity and preventing foot faults.

## Requirements

### Client-Side:

- Angular CLI.
- Node.js.
- npm (Node Package Manager).

### Server-Side:

- .NET Framework.
- SQL Server Management Studio (SSMS) or equivalent for database management.
  
Visual Studio Code for installation and runing.

## Installation Instructions

### Download the Source Code:

Clone the repository:
```
git clone https://github.com/noa1020/Search_jobs_system.git
```
Open the solution file in Visual Studio Code

### Client-Side Setup:

1. Start the client:
```
ng serve
```


### Server-Side Setup:

1. Configure database connection string.
2. Run Entity Framework migrations:
```
dotnet ef database update
```
3. Start the server:
```
dotnet run
```

### Accessing the Application:

Open the application in a web browser.


## Screenshots

### Homepage:
<img src="" alt="Homepage" width="600" style="border:1px solid black">


## Contact Us

For any questions or further assistance, please contact us via email: Ayelet203320@gmail.com or through our social media profiles.

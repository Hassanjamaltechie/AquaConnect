AquaConnect
Detailed GitHub README Document
AquaConnect is a web application project developed for a Software Engineering course. The project is based on a marketing idea where companies can promote their products through advertisements printed on water bottle labels. These water bottles are then distributed to the public for free.
The main purpose of the application is to present the AquaConnect business idea and provide a platform where companies can contact us for marketing and sponsorship campaigns.
Project Overview
The idea behind AquaConnect is simple:
•	Companies pay for advertising space on water bottle labels.
•	AquaConnect distributes the water bottles to the public for free.
•	The public receives free water.
•	Companies get physical brand promotion and possible QR-code campaign engagement.
•	AquaConnect earns revenue through sponsored campaigns.
This creates a win-win model for the public, companies, and AquaConnect.
Project Purpose
The purpose of this project is to build a web-based system that explains the AquaConnect concept and allows sponsor companies to submit marketing requests.
The website includes information about:
•	What AquaConnect is
•	How the business model works
•	Benefits for companies
•	Benefits for the public
•	Sponsor marketing opportunities
•	Contact form for companies
In the extended version, the system can also manage sponsor campaigns, QR-code interactions, and campaign analytics.
Features
Current Features
•	Modern responsive homepage
•	About section explaining AquaConnect
•	How It Works section
•	Benefits section
•	Sponsor campaign information
•	Sponsor contact form
•	Backend API for sponsor form submission
•	MySQL database support for storing sponsor requests
Planned Features
•	Admin dashboard for viewing sponsor requests
•	Campaign management
•	QR code tracking
•	Coupon redemption tracking
•	Sponsor analytics reports
•	Login system for admin users
•	Hosting and deployment
Technologies Used
Frontend
•	React
•	JavaScript
•	Vite
•	Tailwind CSS
•	Framer Motion
•	Lucide React Icons
Backend
•	Node.js
•	Express.js
•	CORS
•	Dotenv
Database
•	MySQL
•	XAMPP / phpMyAdmin
•	SQL script for database setup
Project Management and Collaboration
•	GitHub
•	Jira
•	Discord
•	Scrum methodology
Project Structure
aqua-connect/
|
|-- frontend/
|   |-- src/
|   |   |-- App.jsx
|   |   |-- main.jsx
|   |   |-- App.css
|   |-- package.json
|   |-- vite.config.js
|   |-- index.html
|
|-- backend/
|   |-- server.js
|   |-- db.js
|   |-- package.json
|   |-- .env.example
|   |-- .gitignore
|
|-- database/
|   |-- aquaconnect.sql
|
|-- docs/
|   |-- uml-diagrams.md
|   |-- er-diagram.md
|   |-- time-log.md
|
|-- README.md
|-- .gitignore
Installation and Setup
Follow the steps below to run the project locally.
1. Clone the Repository
git clone https://github.com/your-username/aqua-connect.git
cd aqua-connect
Replace your-username with your GitHub username.
2. Frontend Setup
Go to the frontend folder:
cd frontend
Install dependencies:
npm install
Run the frontend:
npm run dev
The frontend will usually run on:
http://localhost:5173
3. Backend Setup
Open a new terminal and go to the backend folder:
cd backend
Install backend dependencies:
npm install
Create a .env file by copying .env.example:
cp .env.example .env
If you are using Windows and the command above does not work, create a new file manually named .env.
Add your local database details:
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=aquaconnect
If your MySQL has a password, write it in DB_PASSWORD.
Run the backend server:
npm run dev
The backend will run on:
http://localhost:5000
4. Database Setup Using XAMPP
To use the database locally, install and open XAMPP.
1.	Open XAMPP Control Panel.
2.	Start Apache.
3.	Start MySQL.
4.	Open phpMyAdmin in the browser: http://localhost/phpmyadmin
5.	Create a new database named aquaconnect.
6.	Import the SQL file from database/aquaconnect.sql.
Database Table
The main table used in this project is sponsor_requests.
CREATE DATABASE IF NOT EXISTS aquaconnect;

USE aquaconnect;

CREATE TABLE IF NOT EXISTS sponsor_requests (
  id INT AUTO_INCREMENT PRIMARY KEY,
  company_name VARCHAR(150) NOT NULL,
  contact_person VARCHAR(150) NOT NULL,
  email VARCHAR(150) NOT NULL,
  campaign_type VARCHAR(100) NOT NULL,
  message TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
This table stores company sponsor form submissions.
API Endpoints
Test Backend
GET /
This checks if the backend is running.
Submit Sponsor Request
POST /api/sponsors
Example request body:
{
  "companyName": "FreshFoods Oy",
  "contactPerson": "John Smith",
  "email": "john@example.com",
  "campaignType": "QR Code Campaign",
  "message": "We want to promote our new product."
}
Get Sponsor Requests
GET /api/sponsors
This returns all sponsor requests from the database.
How the Sponsor Form Works
The sponsor form is shown on the AquaConnect website. When a company fills out the form and clicks submit, the following process happens:
7.	The user enters company details.
8.	React collects the form data.
9.	React sends the data to the backend using a POST request.
10.	The Express backend validates the received data.
11.	The backend saves the request into the MySQL database.
12.	The user sees a success message on the website.
UML Diagrams
The project includes UML diagrams for understanding the system.
Use Case Diagram
Actors:
•	Company / Sponsor
•	Public Visitor
•	Admin / AquaConnect Team
•	Database
Main use cases:
•	View project information
•	View marketing options
•	Submit sponsor request
•	View sponsor requests
•	Manage sponsor requests
Sequence Diagram
The main sequence diagram shows the sponsor request process:
13.	Sponsor fills the form.
14.	React website validates the form.
15.	React sends data to Express backend.
16.	Backend stores data in MySQL.
17.	Success message is returned to the user.
ER Diagram
The ER diagram includes the main sponsor_requests table and possible future tables such as campaigns, qr_analytics, and admin_users.
Scrum Methodology
We selected Scrum as our development methodology because it supports flexible and incremental development.
Our Scrum plan includes:
•	Product backlog
•	Sprint planning
•	Daily updates
•	Sprint review
•	Retrospective
Since this is a student project, Scrum is adapted in a simple way. We use Discord for communication and Jira for task tracking.
Team Members
•	Hassan Jamal Mughal
•	Hanif Ullah
•	Fahad Sarfraz
Team Roles
Name	Role
Hassan Jamal Mughal	Scrum Master and Developer
Hanif Ullah	Developer
Fahad Sarfraz	Developer
Main Requirements
Functional Requirements
•	The user can view information about AquaConnect.
•	The user can view how the marketing model works.
•	Sponsor companies can submit a contact form.
•	The backend can receive sponsor form data.
•	The system can save sponsor requests into the database.
•	Admin users can later view sponsor requests.
Non-Functional Requirements
•	The website should be responsive.
•	The website should be easy to use.
•	The form should validate required fields.
•	The system should store data securely.
•	The project should be easy to run locally.
•	The code should be organized and understandable.
Time Logging Summary
Task	Estimated Time	Description
Project idea discussion	2 hours	Discussed and finalized AquaConnect concept
Requirement planning	3 hours	Identified main features and user needs
UI design	4 hours	Designed homepage, sections, and sponsor form
Frontend development	6 hours	Built React website
Backend setup	4 hours	Created Express server and API routes
Database setup	3 hours	Created MySQL database and sponsor table
Integration	3 hours	Connected frontend form with backend
Testing	2 hours	Tested form submission and database saving
Documentation	4 hours	Created README, UML diagrams, ER diagram, and logs
GitHub Upload Notes
The following files should be uploaded to GitHub:
frontend/
backend/
database/
docs/
README.md
.gitignore
The following files should not be uploaded:
node_modules/
.env
dist/
XAMPP database files
Use .env.example instead of uploading the real .env file.
Example .gitignore
node_modules/
.env
dist/
.DS_Store
Future Improvements
•	Admin login
•	Admin dashboard
•	Sponsor request status updates
•	QR code generation
•	QR scan tracking
•	Campaign analytics
•	Email notifications
•	Deployment on a live server
•	Better validation and security
Conclusion
AquaConnect is a web application project that combines marketing, public benefit, and software engineering. The system allows companies to promote their products through water bottle labels while the public receives free water.
The current version focuses on building a professional website and saving sponsor requests in a SQL database. The project also helps us practice important software engineering concepts such as Scrum, requirements planning, frontend development, backend development, database design, UML diagrams, and documentation.

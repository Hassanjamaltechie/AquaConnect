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

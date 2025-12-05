# API & Endpoints Assignment

**Author:** Ichcha Mehrishi 
**Course:** Web Development (5th Semester)  
**Program:** B.Tech (3rd Year)  
**Institute:** GLA University  
**Branch/Folder:** js-oops

---

This repository contains complete and clean solutions for all six questions of the API & Endpoints assignment.  
Each task uses **HTML + JavaScript**, with **json-server** acting as a mock backend for REST API operations.

---

## 📂 Project Structure

```
db_q1.json
db_q2.json
db_q3.json
db_q4.json
db_q5.json
db_q6.json

q1_live_search.html
q2_employee_dashboard.html
q3_task_manager.html
q4_dashboard.html
q5_timetable.html
q6_registration.html
```

---

## 🚀 How to Run

### 1. Install Node.js (if not already installed)
```
node -v
npm -v
```

### 2. Install json-server globally
```
npm install -g json-server
```

### 3. Start json-server for each question  
Run each command in a **separate terminal**:

```
json-server --watch db_q1.json --port 3001
json-server --watch db_q2.json --port 3002
json-server --watch db_q3.json --port 3003
json-server --watch db_q4.json --port 3004
json-server --watch db_q5.json --port 3005
json-server --watch db_q6.json --port 3006
```

### 4. Open the HTML files  
You can either:

- **Double-click** the HTML files  
or  
- Use **VS Code Live Server** (recommended for API requests)

---

## ✔ Question Summary

### Q1 – Live Product Search
Realtime search using jQuery AJAX.

### Q2 – Employee Dashboard
Toggle employee status using XMLHttpRequest + PATCH.

### Q3 – Task Manager
Filter tasks and update status using jQuery AJAX.

### Q4 – Multi-API Dashboard
Fetch multiple endpoints using Fetch + Promise.all.

### Q5 – Timetable Viewer
Display timetable dynamically based on selected weekday.

### Q6 – User Registration
Email duplication check + Axios POST request.

---

## 📦 Technologies Used

- HTML5  
- JavaScript (ES6)  
- jQuery  
- Axios  
- Fetch API  
- XMLHttpRequest  
- json-server

---

### 📘 Prepared by  
**Gaurav Chaudhary (B.Tech – CSE, 3rd Year)**  
GLA University


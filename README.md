# ✈️ Flight Booking Microservice

A Node.js-based backend microservice to manage flight bookings. This service communicates with a separate **Flight Service** to retrieve flight details and manage seat availability.

---

## 📌 Features

- Create a new flight booking
- View and manage booking details
- Communicates with external Flight Service to:
  - Fetch flight info
  - Update remaining seats
- Ensures data consistency using Sequelize transactions
- MySQL database support

---

## 🧱 Tech Stack

- **Node.js**
- **Express.js**
- **Sequelize** (ORM)
- **MySQL**
- **Axios** (for calling Flight Service)
- **http-status-codes**

---

## 📁 Project Structure


Flight-Booking-Services/
├── src/
│ ├── controllers/
│ │ └── booking-controllers.js
│ ├── routes/
│ │ └── v1/bookingroutes.js
│ ├── services/
│ │ └── booking-services.js
│ ├── repositories/
│ │ └── Booking-Repositories.js
│ ├── models/
│ ├── utils/
│ │ ├── Common.js
│ │ └── Error/
│ │ └── app-error.js
│ └── index.js
├── config/
│ └── config.json
├── .env
├── package.json
└── README.md

yaml
Copy
Edit

---

## 🚀 Getting Started

### Prerequisites

- Node.js and npm
- MySQL server
- Sequelize CLI (optional, for migrations)

### Steps

```bash
# 1. Clone the repo
git clone https://github.com/your-username/flight-booking-service
cd flight-booking-service

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env
# Fill in DB credentials and FLIGHT_SERVICE_BASE_URL

# 4. Run database migrations (if any)
npx sequelize db:migrate

# 5. Start the server
npm run dev


# 🚀 Queue Simulation System

A simple and interactive **Queue Simulation System** built using **HTML, CSS, and JavaScript (OOP)**.

This project simulates a **single-server queue** using logic similar to Excel simulation tables, but implemented using Object-Oriented Programming.

---

## 📌 Features

* Simulate multiple customers in a queue system  
* **2-Server Load Balancing System**
  * Server 1 & Server 2 working in parallel  
  * Automatic assignment based on best available server  
* Random inter-arrival and service times  
* Calculate:
  * Arrival Time  
  * Service Start Time  
  * Service End Time  
  * Waiting Time  
  * Assigned Server  
* Display results in a dynamic table  
* Calculate **Average Waiting Time**

---

## 🧠 Concepts Used

* Object-Oriented Programming (OOP)  
* Simulation of Queueing Systems  
* JavaScript Classes  
* DOM Manipulation  
* Random Number Generation  

---

## 🏗️ Project Structure

```
queue-simulation-system/
│
├── index.html     # Main structure
├── style.css      # Styling
├── script.js      # Logic (OOP Simulation)
└── README.md
```

---

## ⚙️ How It Works

Each customer is represented as an object:

```js
class Customer {
  constructor(...) { }
}
```

The system logic is handled by:

```js
class QueueSystem {
  simulate(n) { }
}
```

The simulation follows this logic:

* Arrival Time = Previous Arrival + InterArrival  
* Service Start = max(Previous End, Arrival)  
* Service End = Start + Service Time  

---

## ▶️ How to Run

1. Download or clone the repository:

```bash
git clone https://github.com/your-username/queue-simulation-system.git
```

2. Open:

```
index.html
```

3. Enter number of customers and click:

```
Run Simulation
```

---

## 📊 Example Output

| ID | InterArrival | Arrival | Service Time | Start | End | Waiting |
|----|-------------|--------|--------------|-------|-----|--------|
| 1  | 0           | 0      | 3            | 0     | 3   | 0      |
| 2  | 7           | 7      | 4            | 7     | 11  | 0      |
| 3  | 3           | 10     | 3            | 11    | 14  | 1      |
| 4  | 4           | 14     | 4            | 14    | 18  | 0      |
| 5  | 7           | 21     | 3            | 21    | 24  | 0      |
| 6  | 0           | 21     | 3            | 24    | 27  | 3      |

---

## 🎯 Future Improvements

* Add Graph Visualization 📈  
* Add Queue Animation 🎬  
* Add Multi-Server Support  
* Add User-controlled parameters

---

## 🔴 Live Preview

👉 [View Live Demo](https://queue-simulation-system.vercel.app/)

---

## 👨‍💻 Author

Ahmed Talaat  
Front-End Developer (React / Next.js)

---

## ⭐ Don't forget to star the repo if you like it!

# 🚀 Queue Simulation System

A simple and interactive **Queue Simulation System** built using **HTML, CSS, and JavaScript (OOP)**.

This project simulates a **single-server queue** using logic similar to Excel simulation tables, but implemented using Object-Oriented Programming.

---

## 📌 Features

* Simulate multiple customers in a queue system  
* Random inter-arrival and service times  
* Calculate:
  * Arrival Time  
  * Service Start Time  
  * Service End Time  
  * Waiting Time  
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

| ID | Arrival | Start | End | Waiting |
|----|--------|------|-----|--------|
| 1  | 0      | 0    | 2   | 0      |
| 2  | 2      | 2    | 3   | 0      |
| 3  | 6      | 6    | 9   | 0      |

---

## 🎯 Future Improvements

* Add Graph Visualization 📈  
* Add Queue Animation 🎬  
* Add Multi-Server Support  
* Add User-controlled parameters  

---

## 👨‍💻 Author

Ahmed Talaat  
Front-End Developer (React / Next.js)

---

## ⭐ Don't forget to star the repo if you like it!

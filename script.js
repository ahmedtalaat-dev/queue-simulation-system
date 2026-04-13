/* =========================
Customer Class
Represents one row in the simulation table
========================= */
class Customer {
    constructor(id, interArrival, arrival, serviceTime, start, end) {
        this.id = id;
        this.interArrival = interArrival;
        this.arrival = arrival;
        this.serviceTime = serviceTime;
        this.start = start;
        this.end = end;
    }


    // Calculate waiting time for the customer
    getWaitingTime() {
        return this.start - this.arrival;
    }


}

/* =========================
QueueSystem Class
Handles the simulation logic
========================= */
class QueueSystem {
    constructor() {
        this.customers = [];
    }


    // Generate random number
    random(max) {
        return Math.floor(Math.random() * max);
    }

    // Run simulation for n customers
    simulate(n) {
        this.customers = [];

        for (let i = 0; i < n; i++) {

            // Assign customer ID
            let id = i + 1;

            // Inter-arrival time (first customer = 0)
            let interArrival = i === 0 ? 0 : this.random(10);

            // Arrival time calculation
            let arrival =
                i === 0
                    ? 0
                    : this.customers[i - 1].arrival + interArrival;

            // Service time (random between 1 and 4)
            let serviceTime = this.random(4) + 1;

            // Service start time (max of previous end or arrival)
            let start =
                i === 0
                    ? 0
                    : Math.max(
                        this.customers[i - 1].end,
                        arrival
                    );

            // Service end time
            let end = start + serviceTime;

            // Create customer object
            let customer = new Customer(
                id,
                interArrival,
                arrival,
                serviceTime,
                start,
                end
            );

            // Add to system
            this.customers.push(customer);
        }
    }

    // Calculate average waiting time
    getAverageWaiting() {
        let total = 0;

        this.customers.forEach(c => {
            total += c.getWaitingTime();
        });

        return (total / this.customers.length).toFixed(2);
    }


}

/* =========================
Global System Instance
========================= */
const system = new QueueSystem();

/* =========================
Run Simulation Function
========================= */
function runSimulation() {
    const n = parseInt(document.getElementById("customersCount").value);


    // Validate input
    if (!n || n <= 0) {
        alert("Enter a valid number!");
        return;
    }

    // Run simulation
    system.simulate(n);

    // Display results
    display(system.customers);

    // Show average waiting time
    document.getElementById("avgWaiting").innerText =
        "Average Waiting Time: " + system.getAverageWaiting();


}

/* =========================
Display Results in Table
========================= */
function display(customers) {
    const tbody = document.querySelector("#resultTable tbody");
    tbody.innerHTML = "";


    customers.forEach(c => {
        let row = `
    <tr>
        <td>${c.id}</td>
        <td>${c.interArrival}</td>
        <td>${c.arrival}</td>
        <td>${c.serviceTime}</td>
        <td>${c.start}</td>
        <td>${c.end}</td>
        <td>${c.getWaitingTime()}</td>
    </tr>
    `;
        tbody.innerHTML += row;
    });


}

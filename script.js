
/* ===================== CUSTOMER CLASS ===================== */
class Customer {

    id = 0;
    interArrival = 0;
    arrival = 0;
    serviceTime = 0;
    start = 0;
    end = 0;
    server = "";

    // Customer constructor
    constructor(id, interArrival, arrival, serviceTime, start, end, server) {
        this.id = id;
        this.interArrival = interArrival;
        this.arrival = arrival;
        this.serviceTime = serviceTime;
        this.start = start;
        this.end = end;
        this.server = server;
    }

    // Calc waiting time
    getWaitingTime() {
        return this.start - this.arrival;
    }
}


/* ===================== QUEUE SYSTEM CLASS ===================== */
class QueueSystem {

    customers = [];
    server1Time = 0;
    server2Time = 0;

    constructor() {
        this.reset();
    }

    reset() {
        this.customers = [];
        this.server1Time = 0;
        this.server2Time = 0;
    }

    random(max) {
        return Math.floor(Math.random() * max);
    }

    simulate(n) {
        this.reset();

        for (let i = 0; i < n; i++) {

            let id = i + 1;

            let interArrival = (i === 0) ? 0 : this.random(10);

            let arrival = (i === 0)
                ? 0
                : this.customers[i - 1].arrival + interArrival;

            let serviceTime = this.random(4) + 1;

            let start1 = Math.max(this.server1Time, arrival);
            let start2 = Math.max(this.server2Time, arrival);

            let start = 0;
            let end = 0;
            let server = "";

            if (start1 <= start2) {
                start = start1;
                end = start + serviceTime;
                this.server1Time = end;
                server = "Server 1";
            } else {
                start = start2;
                end = start + serviceTime;
                this.server2Time = end;
                server = "Server 2";
            }

            let customer = new Customer(
                id,
                interArrival,
                arrival,
                serviceTime,
                start,
                end,
                server
            );

            this.customers.push(customer);
        }
    }

    getAverageWaiting() {
        let total = 0;

        for (let i = 0; i < this.customers.length; i++) {
            total += this.customers[i].getWaitingTime();
        }

        return (total / this.customers.length).toFixed(2);
    }
}


/* ===================== UI FUNCTIONS ===================== */
// display()
// runSimulation()

function display(customers) {
    let tbody = document.querySelector("#resultTable tbody");
    tbody.innerHTML = "";

    for (let i = 0; i < customers.length; i++) {
        let c = customers[i];

        tbody.innerHTML += `
            <tr>
                <td>${c.id}</td>
                <td>${c.interArrival}</td>
                <td>${c.arrival}</td>
                <td>${c.serviceTime}</td>
                <td>${c.start}</td>
                <td>${c.end}</td>
                <td>${c.server}</td>
                <td>${c.getWaitingTime()}</td>
            </tr>
        `;
    }
}

function runSimulation() {
    let n = parseInt(document.getElementById("customersCount").value);

    if (isNaN(n) || n <= 0) {
        alert("Enter a valid number!");
        return;
    }

    system.simulate(n);
    display(system.customers);

    document.getElementById("avgWaiting").innerText =
        "Average Waiting Time: " + system.getAverageWaiting();
}


/* ===================== SYSTEM INITIALIZATION ===================== */
// const system = new QueueSystem();

const system = new QueueSystem();

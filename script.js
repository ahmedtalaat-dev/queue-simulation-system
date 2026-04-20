class QueueSystem {
    constructor() {
        this.customers = [];
        this.server1Time = 0;
        this.server2Time = 0;
    }

    random(max) {
        return Math.floor(Math.random() * max);
    }

    simulate(n) {
        this.customers = [];
        this.server1Time = 0;
        this.server2Time = 0;

        for (let i = 0; i < n; i++) {

            let id = i + 1;

            let interArrival = i === 0 ? 0 : this.random(10);

            let arrival =
                i === 0
                    ? 0
                    : this.customers[i - 1].arrival + interArrival;

            let serviceTime = this.random(4) + 1;

            let start1 = Math.max(this.server1Time, arrival);
            let start2 = Math.max(this.server2Time, arrival);

            let customer = {};

            if (start1 <= start2) {

                let end = start1 + serviceTime;
                this.server1Time = end;

                customer = {
                    id,
                    interArrival,
                    arrival,
                    serviceTime,
                    start: start1,
                    end,
                    server: "Server 1"
                };

            } else {

                let end = start2 + serviceTime;
                this.server2Time = end;

                customer = {
                    id,
                    interArrival,
                    arrival,
                    serviceTime,
                    start: start2,
                    end,
                    server: "Server 2"
                };
            }

            this.customers.push(customer);
        }
    }

    getAverageWaiting() {
        let total = 0;

        this.customers.forEach(c => {
            total += (c.start - c.arrival);
        });

        return (total / this.customers.length).toFixed(2);
    }
}

const system = new QueueSystem();

function runSimulation() {
    const n = document.getElementById("customersCount").value;

    if (!n || n <= 0) {
        alert("Enter a valid number!");
        return;
    }

    system.simulate(n);
    display(system.customers);

    document.getElementById("avgWaiting").innerText =
        "Average Waiting Time: " + system.getAverageWaiting();
}

function display(customers) {
    const tbody = document.querySelector("#resultTable tbody");
    tbody.innerHTML = "";

    customers.forEach(c => {
        tbody.innerHTML += `
            <tr>
                <td>${c.id}</td>
                <td>${c.interArrival}</td>
                <td>${c.arrival}</td>
                <td>${c.serviceTime}</td>
                <td>${c.start}</td>
                <td>${c.end}</td>
                <td>${c.server}</td>
                <td>${c.start - c.arrival}</td>
            </tr>
        `;
    });
}

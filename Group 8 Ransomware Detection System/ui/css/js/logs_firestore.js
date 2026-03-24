import { db } from "./firebase.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const table = document.getElementById("logsTable");

async function loadLogs() {

    table.innerHTML = "";

    try {

        const querySnapshot = await getDocs(collection(db, "research"));

        if (querySnapshot.empty) {
            table.innerHTML = `
            <tr>
                <td colspan="4" class="text-center text-warning">
                    No logs found in Firestore
                </td>
            </tr>`;
            return;
        }

        querySnapshot.forEach(doc => {

            const data = doc.data();

            table.innerHTML += `
            <tr>
                <td>${doc.id}</td>
                <td class="text-warning">${data.lightgbm ?? "-"}</td>
                <td class="text-info">${data.lstm ?? "-"}</td>
                <td class="${data.action === "kill" ? "text-danger" : "text-success"}">
                    ${data.action ?? "-"}
                </td>
            </tr>
            `;
        });

    } catch (error) {

        console.error("Firestore Error:", error);

        table.innerHTML = `
        <tr>
            <td colspan="4" class="text-danger text-center">
                Error loading Firestore data
            </td>
        </tr>`;
    }
}

loadLogs();

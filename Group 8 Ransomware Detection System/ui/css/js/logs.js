const logs = [
{time:"2026-02-08 10:45:22", pid:"PID-001", light:0.94, lstm:null, action:"resume"},
{time:"2026-02-08 10:45:18", pid:"PID-002", light:0.82, lstm:0.85, action:"resume"},
{time:"2026-02-08 10:45:10", pid:"PID-004", light:0.79, lstm:0.88, action:"kill"}
];

function loadLogs(){
let table=document.getElementById("logsTable");
table.innerHTML="";

logs.forEach(log=>{
table.innerHTML+=`
<tr>
<td>${log.time}</td>
<td>${log.pid}</td>
<td class="text-success">${log.light}</td>
<td class="text-info">${log.lstm ?? "-"}</td>
<td class="${log.action=="kill"?"text-danger":"text-success"}">
${log.action}
</td>
</tr>
`;
});
}

loadLogs();

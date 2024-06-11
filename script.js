// Array para armazenar eventos
let events = [];

// Função para adicionar evento
function addEvent() {
    const date = document.getElementById("event-date").value;
    const time = document.getElementById("event-time").value;
    const name = document.getElementById("event-name").value;

    // Verifica se todos os campos foram preenchidos
    if (date && time && name) {
        events.push({ date, time, name, completed: false });
        renderCalendar();
        // Limpa os campos do formulário após adicionar o evento
        document.getElementById("event-date").value = "";
        document.getElementById("event-time").value = "";
        document.getElementById("event-name").value = "";
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}

// Função para renderizar o calendário
function renderCalendar() {
    const calendarDiv = document.getElementById("calendar");
    calendarDiv.innerHTML = "";
    
    events.forEach(event => {
        const eventDiv = document.createElement("div");
        eventDiv.classList.add("event");
        if (event.completed) {
            eventDiv.classList.add("completed");
        }
        eventDiv.innerHTML = `
            <p><strong>Data:</strong> ${event.date}</p>
            <p><strong>Horário:</strong> ${event.time}</p>
            <p><strong>Evento:</strong> ${event.name}</p>
            <button onclick="markAsCompleted('${event.date}', '${event.time}')">Concluído</button>
        `;
        calendarDiv.appendChild(eventDiv);
    });
}

// Função para marcar evento como concluído
function markAsCompleted(date, time) {
    const index = events.findIndex(event => event.date === date && event.time === time);
    if (index !== -1) {
        events[index].completed = true;
        renderCalendar();
    }
}

// Renderiza a agenda ao carregar a página
window.onload = renderCalendar;

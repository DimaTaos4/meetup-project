const eventsStore = [
    {
        title: "INFJ Personality Type - Coffee Shop Meet & Greet",
        description: "Being an INFJ",
        date: new Date(2024, 2, 23, 15), // 23 марта 2024 года, 15:00
        image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1037&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D%201037w",
        type: "offline",
        attendees: 99,
        category: "Hobbies and Passions",
        distance: 50
    },
    {
        title: "NYC AI Users - AI Tech Talks, Demo & Social: RAG Search and Customer Experience",
        description: "New York AI Users",
        date: new Date(2024, 2, 23, 11, 30), // 23 марта 2024 года, 11:30
        image: "https://images.unsplash.com/photo-1696258686454-60082b2c33e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: "offline",
        attendees: 43,
        category: "Technology",
        distance: 25
    },
    {
        title: "Book 40+ Appointments Per Month Using AI and Automation",
        description: "New Jersey Business Network",
        date: new Date(2024, 2, 16, 14), // 16 марта 2024 года, 14:00
        image: "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: "online",
        attendees: 0, // Пример для онлайн-события (нет участников)
        category: "Technology",
        distance: 10
    },
    {
        title: "Dump writing group weekly meetup",
        description: "Dump writing group",
        date: new Date(2024, 2, 13, 11), // 13 марта 2024 года, 11:00
        image: "https://plus.unsplash.com/premium_photo-1678453146992-b80d66df9152?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: "online",
        attendees: 77,
        category: "Business",
        distance: 100
    },
    {
        title: "Over 40s, 50s, & 60s Senior Singles Chat, Meet & Dating Community",
        description: "Over 40s, 50s, 60s Singles Chat, Meet & Dating Community",
        date: new Date(2024, 2, 14, 11), // 14 марта 2024 года, 11:00
        image: "https://plus.unsplash.com/premium_photo-1706005542509-a460d6efecb0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: "online",
        attendees: 140,
        category: "Social Activities",
        distance: 74
    },
    {
        title: "All Nations - Manhattan Missions Church Bible Study",
        description: "Manhattan Bible Study Meetup Group",
        date: new Date(2024, 2, 14, 11), // 14 марта 2024 года, 11:00
        image: "https://plus.unsplash.com/premium_photo-1679488248784-65a638a3d3fc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: "offline",
        attendees: 32, // Пример для офлайн-события (с участниками)
        category: "Health and Wellbeing",
        distance: 15
    }
];


function filterEvents() {
    const typeValue = document.querySelector('#typeSelect').value.toLowerCase();
    const distanceValue = parseInt(document.querySelector('#distanceSelect').value);
    const categoryValue = document.querySelector('#categorySelect').value.toLowerCase();
    const dateValue = document.querySelector('#dateSelect').value; 

    const filteredEvents = eventsStore.filter(event => {
        const isTypeMatch = !typeValue || event.type.toLowerCase() === typeValue;
        const isDistanceMatch = !distanceValue || event.distance <= distanceValue;
        const isCategoryMatch = !categoryValue || event.category.toLowerCase() === categoryValue;
        
        // Проверка на соответствие даты и времени
        let isDateMatch = true; // Если не выбрана дата, все события совпадают
        if (dateValue) {
            const selectedDate = new Date(dateValue);  // Преобразуем строку в дату
            const eventDate = event.date;
            // Проверка на совпадение как по дате, так и по времени
            // Для этого мы можем сравнить время (часы и минуты)
            isDateMatch = selectedDate.toISOString().slice(0, 16) === eventDate.toISOString().slice(0, 16);
        }

        return isTypeMatch && isDistanceMatch && isCategoryMatch && isDateMatch;
    });

    const eventMainConteiner = document.querySelector('.event-main-conteiner');
    eventMainConteiner.innerHTML = '';

    if (filteredEvents.length === 0) {
        eventMainConteiner.innerHTML = "<p>There are no suitable events based on the selected filters.</p>";
    } else {
        filteredEvents.forEach(event => {
            const formattedDate = new Date(event.date).toLocaleString('en-US', {
                weekday: 'short',
                month: 'short',
                day: 'numeric',
                hour: 'numeric',
                minute: '2-digit',
                hour12: true
            });

            eventMainConteiner.insertAdjacentHTML('beforeend', `
                <div class="event event1">
                    <hr>
                    <div class="card-text1">
                        <img src="${event.image}" alt="${event.title}">
                        <div class="text text-event1">
                            <p>${formattedDate}</p>
                            <h5>${event.title}</h5>
                            <p>${event.category} (${event.distance} km)</p>
                            <p>${event.attendees} attendees</p>
                            <p>${event.type} Event</p>
                        </div>
                    </div>
                </div>
            `);
        });
    }
}

// Слушатели событий для фильтров
document.querySelector('#typeSelect').addEventListener('change', filterEvents);
document.querySelector('#distanceSelect').addEventListener('change', filterEvents);
document.querySelector('#categorySelect').addEventListener('change', filterEvents);
document.querySelector('#dateSelect').addEventListener('change', filterEvents);

// Вызываем фильтрацию при загрузке страницы
document.addEventListener('DOMContentLoaded', filterEvents);
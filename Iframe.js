window.addEventListener("DOMContentLoaded", () => {
    const pages = {
        main: document.getElementById("main-page"),
        whiteNoise: document.getElementById("white-noise-page"),
        meditation: document.getElementById("meditation-page"),
        pomodoro: document.getElementById("pomodoro-page")
    };

    function showPage(name) {
        Object.values(pages).forEach(page => page.style.display = "none");
        pages[name].style.display = "block";
    }

    // Navigation buttons
    document.getElementById("btn-white-noise")?.addEventListener("click", () => showPage("whiteNoise"));
    document.getElementById("btn-meditation")?.addEventListener("click", () => showPage("meditation"));
    document.getElementById("btn-pomodoro")?.addEventListener("click", () => showPage("pomodoro"));

    document.querySelectorAll(".btn-back").forEach(btn => btn.addEventListener("click", () => showPage("main")));

    // Pomodoro logic
    const startBtn = document.getElementById("start-timer");
    const breakBtn = document.getElementById("start-break");
    const timerDisplay = document.getElementById("pomodoro-display");
    let timer, seconds = 0;

    function startCountdown(mins) {
        clearInterval(timer);
        seconds = mins * 60;
        timer = setInterval(() => {
        const min = Math.floor(seconds / 60);
        const sec = seconds % 60;
        timerDisplay.textContent = `${min}:${sec.toString().padStart(2, '0')}`;
        if (seconds-- <= 0) clearInterval(timer);
        }, 1000);
    }

    startBtn?.addEventListener("click", () => {
        const mins = parseInt(document.getElementById("work-duration").value);
        if (!isNaN(mins)) startCountdown(mins);
    });

    breakBtn?.addEventListener("click", () => {
        const mins = parseInt(document.getElementById("break-duration").value);
        if (!isNaN(mins)) startCountdown(mins);
    });

    // Meditation tasks
    document.getElementById("btn-breathing")?.addEventListener("click", () => {
        alert("Breathe in... Hold... Breathe out... Repeat.");
    });

    document.getElementById("btn-walk")?.addEventListener("click", () => {
        alert("5-minute mindful walk");
    });

    // White noise upload and playback
    const upload = document.getElementById("upload-audio");
    const audioPlayer = document.getElementById("custom-audio");

    upload?.addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (file) {
        const url = URL.createObjectURL(file);
        audioPlayer.src = url;
        audioPlayer.load();
        }
    });
    // dummy ai chatbot
    document.getElementById("chatSend").addEventListener("click", () => {
    const input = document.getElementById("chatInput");
    const message = input.value.trim();
    if (message) {
        const messagesDiv = document.getElementById("chatMessages");
        const userMsg = document.createElement("div");
        userMsg.textContent = "You: " + message;
        messagesDiv.appendChild(userMsg);

        const botMsg = document.createElement("div");
        botMsg.textContent = "AI: This is a sample response to \"" + message + "\"";
        messagesDiv.appendChild(botMsg);

        messagesDiv.scrollTop = messagesDiv.scrollHeight;
        input.value = "";
    }
    });
    let points = 0;
    const achievements = new Set();

    function updateGamificationUI() {
    document.getElementById("points").textContent = points;
    const achievementsList = document.getElementById("achievements");
    achievementsList.innerHTML = "";
    achievements.forEach(a => {
        const li = document.createElement("li");
        li.textContent = a;
        achievementsList.appendChild(li);
    });
    }

    function awardPoints(amount, message) {
    points += amount;
    if (message && !achievements.has(message)) {
        achievements.add(message);
    }
    updateGamificationUI();
    }
    // After Pomodoro ends
    globalThis.notifyPomodoroComplete = () => {
    insertTextIntoCanvas("✅ Break time! Great work – reflect and recharge.");
    awardPoints(10, "First Pomodoro Complete");
    };

    // After starting a meditation
    function startMeditation() {
    // your meditation logic...
    awardPoints(5, "Took a Mindful Break");
    }

    // After playing white noise for 5 minutes (setTimeout)
    function whiteNoiseSessionComplete() {
    awardPoints(5, "Used White Noise for 5+ mins");
    }


  // Default page
  showPage("main");
});

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Digital Clock</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="clock">
        <div id="time"></div>
    </div>
    <script src="script.js"></script>
</body>
</html>
body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-color: #282c34;
    color: white;
    font-family: Arial, sans-serif;
}

.clock {
    font-size: 3em;
    border: 2px solid white;
    padding: 20px;
    border-radius: 10px;
}
function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    
    document.getElementById('time').textContent = timeString;
}

setInterval(updateTime, 1000);
updateTime(); // Initial call to display the time immediately when the page loads

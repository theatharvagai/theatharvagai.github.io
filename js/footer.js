function updateClocks() {
    const now = new Date();
    
    // India Time (IST)
    const indOptions = { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    const indTime = now.toLocaleTimeString('en-IN', indOptions);
    document.getElementById('clock-ind').textContent = `IND: ${indTime}`;
    
    // UTC Time
    const utcOptions = { timeZone: 'UTC', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    const utcTime = now.toLocaleTimeString('en-US', utcOptions);
    document.getElementById('clock-utc').textContent = `UTC: ${utcTime}`;
}

setInterval(updateClocks, 1000);
updateClocks();

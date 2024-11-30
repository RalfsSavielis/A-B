// Example dynamic updates for statistics (optional)
const updateStats = () => {
    // Simulated new data
    const ad1Views = 12000;
    const ad1Clicks = 600;
    const ad1Engagement = `${((ad1Clicks / ad1Views) * 100).toFixed(2)}%`;

    const ad2Views = 9500;
    const ad2Clicks = 475;
    const ad2Engagement = `${((ad2Clicks / ad2Views) * 100).toFixed(2)}%`;

    // Update Ad 1
    document.getElementById('ad1-views').innerText = ad1Views;
    document.getElementById('ad1-clicks').innerText = ad1Clicks;
    document.getElementById('ad1-engagement').innerText = ad1Engagement;

    // Update Ad 2
    document.getElementById('ad2-views').innerText = ad2Views;
    document.getElementById('ad2-clicks').innerText = ad2Clicks;
    document.getElementById('ad2-engagement').innerText = ad2Engagement;
};

// Simulate a data update after 5 seconds
setTimeout(updateStats, 5000);

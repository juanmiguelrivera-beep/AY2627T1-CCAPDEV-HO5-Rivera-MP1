

document.addEventListener("DOMContentLoaded", function() {

    
    const ctxHistogram = document.getElementById('histogramChart').getContext('2d');
    new Chart(ctxHistogram, {
        type: 'bar',
        data: {
            labels: ['2.0-2.5', '2.6-3.0', '3.1-3.5', '3.6-4.0', '4.1-4.5', '4.6-5.0'],
            datasets: [{
                label: 'Number of Tutors',
                data: [1, 1, 3, 3, 5, 7],
                backgroundColor: '#0d6efd',
                borderColor: '#0a58ca',
                borderWidth: 1,
                barPercentage: 1.0,
                categoryPercentage: 1.0 
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    title: { display: true, text: 'Frequency' }
                },
                x: {
                    title: { display: true, text: 'Rating Range' }
                }
            }
        }
    });


    const ctxBoxplot = document.getElementById('boxplotChart').getContext('2d');
    new Chart(ctxBoxplot, {
        type: 'boxplot',
        data: {
            labels: ['CSALGCM', 'CCAPDEV', 'CSINTSY'],
            datasets: [{
                label: 'Subject Ratings',
                backgroundColor: 'rgba(25, 135, 84, 0.5)',
                borderColor: '#198754',
                borderWidth: 1,
                outlierColor: '#dc3545',
                data: [
                    [2.5, 3.2, 3.8, 4.1, 4.5, 4.8, 5.0], 
                    [3.0, 3.5, 3.9, 4.0, 4.2, 4.6],      
                    [3.8, 4.2, 4.5, 4.7, 4.9, 5.0]       
                ]
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: false,
                    min: 2.0,
                    max: 5.2,
                    title: { display: true, text: 'Rating (out of 5)' }
                }
            }
        }
    });


  
    const ctxScatter = document.getElementById('scatterplotChart').getContext('2d');
    new Chart(ctxScatter, {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'Tutor Performance',
                backgroundColor: '#ffc107',
                borderColor: '#ffc107',
                pointRadius: 6,
                pointHoverRadius: 8,
                data: [
                    { x: 2, y: 2.5 },
                    { x: 5, y: 3.2 },
                    { x: 8, y: 3.5 },
                    { x: 12, y: 4.1 },
                    { x: 15, y: 3.8 },
                    { x: 22, y: 4.4 },
                    { x: 30, y: 4.8 },
                    { x: 45, y: 4.6 },
                    { x: 60, y: 5.0 },
                    { x: 72, y: 4.9 }
                ]
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    title: { display: true, text: 'Total Sessions Conducted' }
                },
                y: {
                    beginAtZero: false,
                    min: 2.0,
                    max: 5.5,
                    title: { display: true, text: 'Average Rating' }
                }
            }
        }
    });

});
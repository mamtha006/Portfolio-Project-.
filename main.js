
document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('skillsChart');
    
    if (ctx) {
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['HTML,CSS', 'C', 'C++', 'Java', 'MYSQL', 'Python'],
                datasets: [{
                    label: 'Skill Level',
                    data: [95, 90, 88, 85, 82, 80],
                    backgroundColor: [
                        'rgba(100, 255, 218, 0.8)',
                        'rgba(100, 255, 218, 0.7)',
                        'rgba(100, 255, 218, 0.6)',
                        'rgba(100, 255, 218, 0.5)',
                        'rgba(100, 255, 218, 0.4)',
                        'rgba(100, 255, 218, 0.3)'
                    ],
                    borderColor: 'rgba(100, 255, 218, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: '#8892b0'
                        }
                    },
                    x: {
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: '#8892b0'
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    }
});
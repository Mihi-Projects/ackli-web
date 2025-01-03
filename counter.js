// Counter animation function
function animateCounter(elementId, target, duration = 2000) {
    const element = document.getElementById(elementId);
    const steps = 50;
    const stepDuration = duration / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
        if (currentStep < steps) {
            const currentValue = Math.ceil((target * currentStep) / steps);
            element.textContent = elementId === 'customerCount' ? 
                `${currentValue}+` : currentValue;
            currentStep++;
        } else {
            element.textContent = elementId === 'customerCount' ? 
                `${target}+` : target;
            clearInterval(timer);
        }
    }, stepDuration);
}

// Initialize Intersection Observer
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Start animations when section becomes visible
            animateCounter('customerCount', 500);
            animateCounter('yearsCount', 10);
            animateCounter('projectsCount', 50);
            // Stop observing after animation starts
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

// Start observing when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const counterSection = document.querySelector('#customerCount').parentElement.parentElement;
    if (counterSection) {
        counterObserver.observe(counterSection);
    }
});s
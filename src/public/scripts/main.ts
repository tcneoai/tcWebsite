// You can add any client-side TypeScript code here if needed
console.log('tcWebsite loaded');

// Add event listener for the "About Us" button
document.addEventListener('DOMContentLoaded', () => {
    const aboutUsButton = document.querySelector('.about-us') as HTMLButtonElement;
    
    if (aboutUsButton) {
        aboutUsButton.addEventListener('click', () => {
            alert('Welcome to tcWebsite! We are a team of passionate developers.');
        });
    }
});

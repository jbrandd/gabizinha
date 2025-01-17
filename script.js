
document.getElementById('envelope').addEventListener('click', function() {
    document.getElementById('envelope').classList.add('hidden');
    document.getElementById('card').classList.remove('hidden');
    startCounter();
});

function startCounter() {
    const specificDate = new Date('2024-06-17T00:03:07'); // Altere para a data desejada
    const now = new Date();
    const diffTime = Math.abs(now • specificDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    document.getElementById('counter').innerText = `Dias desde ${specificDate.toLocaleDateString()}: ${diffDays}`;
}

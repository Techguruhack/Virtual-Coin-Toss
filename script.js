document.getElementById('tossButton').addEventListener('click', function() {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = 'Flipping...';
    
    setTimeout(() => {
        const outcome = Math.random() < 0.5 ? 'Heads' : 'Tails';
        resultDiv.innerHTML = outcome;
        
        if (outcome === 'Heads') {
            resultDiv.innerHTML = `
                <div class="coin">
                    <div class="heads">HEADS</div>
                </div>
            `;
        } else {
            resultDiv.innerHTML = `
                <div class="coin">
                    <div class="tails">TAILS</div>
                </div>
            `;
        }
    }, 1000);  
});

function countLetters() {
    const text = document.getElementById('textInput').value;
    const vowels = 'aeiouAEIOU';
    const vowelSet = new Set();
    const consonantSet = new Set();
    let vowelCount = 0;
    let consonantCount = 0;

    for (let char of text) {
        if (vowels.includes(char)) {
            vowelCount++;
            vowelSet.add(char.toLowerCase());
        } else if (char.match(/[a-zA-Z]/)) {
            consonantCount++;
            consonantSet.add(char.toLowerCase());
        }
    }

    document.getElementById('vowelCount').innerText = `Number of vowels: ${vowelCount}`;
    document.getElementById('consonantCount').innerText = `Number of consonants: ${consonantCount}`;

    const vowelTableBody = document.querySelector('#vowelTable tbody');
    const consonantTableBody = document.querySelector('#consonantTable tbody');
    
    vowelTableBody.innerHTML = '';
    consonantTableBody.innerHTML = '';

    vowelSet.forEach(vowel => {
        let row = document.createElement('tr');
        let cell = document.createElement('td');
        cell.innerText = vowel;
        row.appendChild(cell);
        vowelTableBody.appendChild(row);
    });

    consonantSet.forEach(consonant => {
        let row = document.createElement('tr');
        let cell = document.createElement('td');
        cell.innerText = consonant;
        row.appendChild(cell);
        consonantTableBody.appendChild(row);
    });
}

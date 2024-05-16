const form = document.getElementById('my-form');

form.addEventListener('submit', function(event){
    event.preventDefault();

    const campoA = parseInt(document.getElementById('numberOne').value);
    const campoB = parseInt(document.getElementById('numberTwo').value);

    if(campoA < campoB){
        document.querySelector('.menssage-success').style.display = 'block';
        document.querySelector('.menssage-error').style.display = 'none';
        document.getElementById('numberOne').classList.remove('error');
        document.getElementById('numberTwo').classList.remove('error');
        document.getElementById('numberOne').value = '';
        document.getElementById('numberTwo').value = '';
    } else{   
        document.querySelector('.menssage-error').style.display = 'block';
        document.querySelector('.menssage-success').style.display = 'none';
        document.getElementById('numberOne').classList.add('error');
        document.getElementById('numberTwo').classList.add('error');
        document.getElementById('numberOne').value = '';
        document.getElementById('numberTwo').value = '';
    }
})
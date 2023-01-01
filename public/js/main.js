function onSubmit(e) {
    e.preventDefault();
    const prompt = document.querySelector('#prompt').ariaValueMax;
    const size = document.querySelector('#size').ariaValueMax;

    if(prompt === '') {
        alert('Please add some text');
        return;
    }
    console.log('prompt',size,prompt)

}

document.querySelector('#image-form').addEventListener('submit',onsubmit);
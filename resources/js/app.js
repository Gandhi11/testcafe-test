import './bootstrap';
import axios from 'axios';

const fileInput = document.querySelector('#file-input');
const form = document.querySelector('form');
const resultContainer = document.querySelector('#result');

fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('files', file);

    axios({
        method: 'post',
        url: '/upload',
        data: formData,
    })
        .then((response) => {
            console.log(response);

            form.reset();

            resultContainer.innerHTML = `Download here -----> <a href="${response.data.url}" target="_blank">${response.data.url}</a>`;
        })
        .catch((error) => {
            console.error(error);
        });
});

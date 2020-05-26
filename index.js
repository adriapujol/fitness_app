document.getElementById('search').addEventListener('submit', (e)=> {

    if (!checkSearch()) {
        e.preventDefault();
    };
});

const checkSearch = () => {
    let isValid = false;
    const search = document.getElementById('search-input');

    if (search.value !== '' && search.value.length > 3) {
        setSuccessFor(search);
        isValid = true;
    } else {
        setErrorFor(search);
    }

    return isValid;
};


const setErrorFor = (input) => {
    const searchBlock = input.parentElement.parentElement;
    searchBlock.classList.add('error-style');
    // input.classList.add('search-bar-error');
}

const setSuccessFor = (input) => {
    const searchBlock = input.parentElement.parentElement;
    searchBlock.classList.remove('error-style');
    // input.classList.remove('search-bar-error');
}

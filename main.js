const packagesModal = document.querySelector('#packages-modal');
const buttonOpenPackages = document.querySelector('#button__open-packages');
const buttonClosePackages = document.querySelector('#button__close-packages')

buttonOpenPackages.addEventListener('click', () => {
    packagesModal.showModal(); 
});

packagesModal.addEventListener('click', (event) => {
    if (event.target === packagesModal || event.target === buttonClosePackages) { 
        packagesModal.close();
    }
});


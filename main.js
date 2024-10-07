const buttonOpenPackages = document.querySelector('#button__open-packages')
const packagesModal = document.querySelector('#packages-modal')

buttonOpenPackages.addEventListener("click", () => {
    packagesModal.show();
})

packagesModal.addEventListener('click', (event) => {
    if (event.target === packagesModal) {
        packagesModal.close();
    }
});


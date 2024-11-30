const abrirBotoes = document.querySelectorAll('.abrirModal')

abrirBotoes.forEach(button => {
    button.addEventListener('click', () => {
            const idModal = button.getAttribute('data-modal')
            const modal = document.getElementById(idModal)

            modal.showModal()
        }) 
});

const fecharBotoes = document.querySelectorAll('.fecharModal')
fecharBotoes.forEach(button => {
    button.addEventListener('click', () => {
            const idModal = button.getAttribute('data-modal')
            const modal = document.getElementById(idModal)
            console.log(modal)
            modal.close()
        }) 
});
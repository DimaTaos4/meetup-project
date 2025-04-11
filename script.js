document.addEventListener('DOMContentLoaded', () => {
    const buttonKreuz = document.querySelector('#buttonKreuz')
    const textRightMainConteiner = document.querySelector('.text-right-main-conteiner')

    const rightMapBlock = document.querySelector('.right-map-block')
    buttonKreuz.addEventListener('click', () => {
        rightMapBlock.style.display = 'none'
        textRightMainConteiner.style.display = 'none'
    })
})
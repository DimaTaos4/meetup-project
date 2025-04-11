
document.addEventListener('DOMContentLoaded', () => {
    const searchLogo = document.querySelector('#searchLogo')
    searchLogo.addEventListener('click', function () {
        const searchEvents = document.querySelector('#searchEvents').value
        let searchEvents2 = document.querySelector('#searchEvents2')
        searchEvents2.value = searchEvents
        document.querySelector('#searchEvents').value = ''
        console.log(searchEvents)
    })
})






























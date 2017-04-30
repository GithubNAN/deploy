require('express')()
    .get('/', (req, res) => {
        res.send('Hello, Human!')
    })
    .listen(3000, () => {
        console.log('Port listening at 3000')
    })
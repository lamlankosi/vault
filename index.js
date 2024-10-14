import path from 'path'
// import cors from 'cors'
import 'dotenv/config'
// app.use(
//     express.static('./static'),
//     express.json(),
//     express.urlencoded({
//         extended: true
//     }),
//     cors()
// )


//endpoint for home page
app.get('^/$|/vault', (req, res) => {
    res.status(200).sendFile(path.resolve('./static/html/index.html'))
})

app.get('*', (req, res) => {
    res.json({
        status: 404,
        msg: 'Resource not found'
    })
})

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})
const express = require('express')
const app = express()


app.get('/',(req,res)=>{
    res.render('homepage.ejs')
})
app.get('/paintings/:Name/:Painter',(req,res)=>{
    const painting = req.params.Name
    const painter = req.params.Painter
    res.render('paint.ejs',{
        painting_name:painting,
        painter_name:painter 
    })
})

app.get('/paintingslist',(req,res)=>{
    //Paintings List

    const paintings = [
        {painting_name:"Mona Lisa",painter_name:"Leonardo Da Vinci"},
        {painting_name:"The Birth of Venus",painter_name:"Sandro Botticelli"},
        {painting_name:"The Starry Night",painter_name:"Vincent Van Gogh"},
        {painting_name:"The Last Supper",painter_name:"Leonardo Da Vinci"}
    ]
    res.render('paintingslist.ejs',{
        paintings_list:paintings
    })
})
app.get('*',(req,res)=>{
    res.status(404).send('The fuuck you going dumbass')
})
app.listen(5050)
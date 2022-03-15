const express = require('express')
const ejs = require('ejs-mate')
const app = express()
const port = process.env.PORT || 3000

const pages = [
'AnimatedNav' ,
'AutoTextEffect' ,
'BackgroundSlider',
'BluryImageLoad' , 
'Clock' ,
'Dadjokes' , 
'DoubleHeartClick' , 
'DragAndDrop' , 
'DrawingApp' , 
'expandingCards' , 
'FAQCollapse' , 
'FillCups' , 
'FormWaveAnime' , 
'GithubProfiles' , 
'HiddenSearch' , 
'KeyCode' , 
'KineticLoader' , 
'MoviApp'  ,
'NotesApp' , 
'Numbers' , 
'PasswordGenerator' , 
'PlaceHolder'  , 
'progressSteps' , 
'RandomChoice' , 
'RotatingNavigation' , 
'ScrollAnimation' , 
'SoundBoard' , 
'SplitLandingPage' , 
'StickyNav' , 
'ToastNotification' , 
'VerticalSlider'

]

app.engine('ejs' , ejs)
app.set('view engine' , 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(express.static(__dirname + '/views'))


app.get('/', (req, res) => {
  res.render('index' , {pages})
})

pages.map(page => {
  app.use(express.static(__dirname + `/views/${page}`))
  app.get(`/${page}`, (req, res) => {
    res.sendFile(__dirname + `/views/${page}/index.html`);
  });
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
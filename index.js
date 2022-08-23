const express = require('express')
const app = express()
const port = 3000
const bodyParser=require('body-parser');
const {User}=require('./models/User');

app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json());
//분석해서 가지고올수 있도록

const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://johnahn:abcd1234@boilerplate.j4lecpn.mongodb.net/?retryWrites=true&w=majority')
        .then(()=>console.log('MongoDB Connected...'))
        .catch(err=>console.log(err))

app.get('/', (req, res) => {
    res.send('Hello World!ㅎㅎㅎ')
})


app.post('/register',(req,res)=>{
    //회원가입할때 필요한 정보들을 clinet 에서 가져온다
    //그것들을 데이터 베이스에 넣어준다.

    const user=new User(req.body)
    //몽고디비 메써드 .. 회원가입이 안되있으묜 실패..
    user.save((err,userInfo)=>{
        if(err) res.json({success:false,err})
        return res.status(200).json({
            success:true
        })
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
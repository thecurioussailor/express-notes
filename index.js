const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

let data = [{
    id: 1,
    name: "Rishi Raj",
    Work: "Infosys"
},
{
    id:2,
    name: "Rahul Raj",
    Work: "Business"
}];

app.get('/admin', (req, res) => {
    res.json(data);
})
app.post('/admin', (req, res) =>{
    const item = req.body;
    data.push(item);
    res.json(data);
})
app.put('/admin', (req, res) =>{
    let found = data.find(function (item) {
        return item.id === parseInt(req.body.id);
    })
    const id = req.query.id;
    console.log(id);
    bodyData = req.body;
    const keysArray = Object.keys(bodyData);
    console.log(keysArray);
    const count = keysArray.length;
    console.log(count)
    if(found){
        for(let i = 0; i < count; i++){
            let updateData = {
                // keysArray[i]: req.body.keysArray[i]
            }
        }
        
    }else{
        res.json({
            msg: "OKay"
        })
    }
    

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
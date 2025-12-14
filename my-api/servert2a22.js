const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.listen(
PORT, 
() => console.log(`Server running on port http://localhost:${PORT}`)

)

app.get('/tshirt', (req, res) => {
    console.log("T-Shirt endpoint hit")
    res.status(200).send({
        product: 'T-Shirt',
        price: 19.99,
        sizes: ['S', 'M', 'L', 'XL'] 
        
    })
});

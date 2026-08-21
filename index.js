const express = require('express');
const app = express();

app.get("/", (req,res) => {
    res.json(
        [
            {
                id :1,
                employeeName : "Ash",
                employeeSalary : 90000
            },
            {
                id :2,
                employeeName : "Sid",
                employeeSalary : 40000
            },
            {
                id :3,
                employeeName : "Jayu",
                employeeSalary : 50000
            },
            {
                id :4,
                employeeName : "Raj",
                employeeSalary : 80000
            },
        
        ]
    )
})

app.listen(4000, () => {
    console.log("Server is running on port no: 4000")
})
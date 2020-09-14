const axios = require('axios')
const { weatherModel } = require("../model/weatherModel")
async function getData(req, res) {
    var datetime = new Date();
    const date = datetime.toDateString().slice(8, 10)
    var flag = isPrime(date)
    //  console.log(flag)
    // console.log(isPrime(3))
    if (flag) {
        const response = await axios.get("https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=439d4b804bc8187953eb36d2a8c26a02");
        // console.log(response.data)
        const data = response.data
        const sdata = JSON.stringify(data)

        saveData(date, sdata);
        res.status(200).json({
            status: "successful!!",
            data
        })
    } else {
        res.status(200).json({

            status: "Date is not prime hence no data"
        })
    }
}
function isPrime(num) {
    for (var i = 2; i < num; i++)
        if (num % i === 0) return false;
    return num > 1;
}
async function saveData(date, data) {
    try {
        var sdata = new weatherModel({ date: date, data: data })
        await sdata.save()
        console.log("saved!")
    } catch (err) {
        console.log(err)
    }
}
module.exports.getData = getData;
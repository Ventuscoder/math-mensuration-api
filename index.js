import express from 'express'
import formulas from './formulas.js'
const app = express()

app.set('query parser', 'simple')

app.get('/', (req, res) => {
    res.status(200).json({
        instructions: 'In the url, append /function/shape/params and send a GET request. Below is an object having the functions and the shapes nested inside. A few examples: /area/triangle?b=2&h=5   |||||   /volume/sphere?r=7',
        formulas
    })
})

app.get('/:func/:shape', (req, res) => {
    const { func, shape } = req.params
    if (!formulas[func]) {
        res.status(400).json({
            error: "Invalid function, go to root route '/' for more details"
        })
        return
    }
    if(!formulas[func][shape]) {
        res.status(400).json({
            error: "Invalid shape, go to root route '/' for more details"
        })
        return
    }
    const requiredParams = formulas[func][shape].params
    const paramsToPass = []
    for (let i = 0; i < requiredParams.length; i++) {
        const param = Number(req.query[requiredParams[i]])
        if (isNaN(param)) {
            res.status(400).json({
                error: `'${requiredParams[i]}' parameter not passed or given invalid value`
            })
            return
        }
        paramsToPass.push(param)
    }
    res.status(200).json({
        answer: formulas[func][shape].f(...paramsToPass)
    })
})

app.use((req, res, next) => {
    res.status(404).json({
        error: "Wrong route, go to '/' for more details"
    })
})

app.listen(8000, () => {
    const date = new Date()
    console.log(`Server started: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
})
import { useState, useEffect } from 'react'
import axios from 'axios'

const KanyeQuote = ({displayQuote}) => {

const [quote, setQuote] = useState('')

const getQuote = async () => {
    try {
        const res = await axios.get('https://api.kanye.rest')
        console.log(res.data.quote)
        setQuote(res.data.quote)
    } catch(err) {
        console.log(err)
    }
}
useEffect(() => {
    getQuote()
}, [displayQuote])


    return (
        <h2 style={{fontStyle: 'italic'}}>{quote !== '' && quote}</h2>
    )
}

export default KanyeQuote;
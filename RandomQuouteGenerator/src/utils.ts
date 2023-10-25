import axios from "axios";

export const fetchQuotes = async ():Promise<Array<{quote: string, author: string}>> => {

    const res = await axios.get("http://localhost:4001/quotes")
    let randomIndex:number;
    let randomQuotesArray:Array<{quote: string, author: string}>=[]
    const quotesArray = res.data

    while(quotesArray.length > 0) {

      randomIndex = Math.floor(Math.random() * quotesArray.length)
      randomQuotesArray.push(quotesArray[randomIndex])
      quotesArray.splice(randomIndex, 1)

    }
    
    return randomQuotesArray

  }


const getHello= (req, res)=> {
    res.send("MERHABA, GET isteği attınız.")
  }

const postHello=(req, res)=> {
    res.send("MERHABA, POST isteği attınız.");
  }

const putHello=(req, res)=> {
    res.send("MERHABA, PUT isteği attınız.")
  }

const deleteHello=(req, res)=> {
    res.send("MERHABA, DELETE isteği attınız.")
  }

  module.exports={getHello,postHello, putHello,deleteHello}
module.exports = {
  get: (req, res) => {
    res.cookie('refreshToken', null, { maxAge: 0 });
    res.send();
  }  
}

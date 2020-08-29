exports.myMiddleware = (req, res, next) => {
  req.name = 'Maite';
  if(req.name === 'Maite') {
    throw Error('I don\'t like that name');
  }
  next();
};

exports.homePage = (req, res) => {
  console.log(req.name);
  res.render('index');
};

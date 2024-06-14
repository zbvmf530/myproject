var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//var cors = require('cors');

require('dotenv').config();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const boardRouter = require('./routes/board.js');
const customerRouter = require('./routes/customer.js');
const todosRouter = require('./routes/todo.js');

const LoginRouter = require('./routes/login.js');
const LogoutRouter = require('./routes/logout.js');
const AccountRouter = require('./routes/account.js');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/api/board',boardRouter);
app.use('/api/customer',customerRouter);
app.use('/api/todo',todosRouter);




const session = require('express-session');
const fileStore = require('session-file-store')(session);

app.use(
  session({
          secret: 'secret key', //암호화하는 데 쓰일 키
          resave: false, // 세션에 변경사항이 없어도 항상 다시 저장할지 여부
          saveUninitialized: true, // 초기화되지 않은 세션을 스토어(저장소)에 강제로 저장할지 여부
          cookie: { // 세션 쿠키 설정 (세션 관리 시 클라이언트에 보내는 쿠키)
          httpOnly: true, // true 이면 클라이언트 자바스크립트에서 document.cookie로 쿠키 정보를 볼 수 없음
          secure: true, // true 이면 https 환경에서만 쿠키 정보를 주고 받도록 처리,
          maxAge: 60000 // 쿠키가 유지되는 시간 (밀리세컨드 단위)
          },
          store: new fileStore() // 세션 저장소로 fileStore 사용  
  })
);



app.use('/api/login',LoginRouter);
app.use('/api/logout',LogoutRouter);
app.use('/api/account',AccountRouter);





// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

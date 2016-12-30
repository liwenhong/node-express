var express=require('express');
var app=express();
var fortune=require('./lib/fortunes');


//设置视图模板，并指明默认布局 main
var handlebars=require('express3-handlebars').create({defaultLayout:'main'});
app.engine('handlebars',handlebars.engine);
//设置视图渲染引擎
app.set('view engine','handlebars');
//设置服务器端口
app.set('port',process.env.PORT||3000);
//设置静态文件
app.use(express.static(__dirname+'/public'));

app.get('/',function(req,res){
    res.render('home');
});
app.get('/about',function(req,res){
    res.render('about',{fortune:fortune.getFortune()});
});
app.use(function(req,res){
    res.status(404);
    res.render('404');
});
app.use(function(err,req,res,next){
    res.status(500);
    res.render('500')
});
app.listen(app.get('port'),function(){
    console.log('Express started on http://localhost:'+app.get('port'))
})
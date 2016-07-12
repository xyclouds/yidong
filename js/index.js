//输入框搜索部分动效

var  kuang1=$(".kuang1")[0];
kuang1.onfocus=function(){
  if(this.value=="包月流量包"){
       this.value="";
  }
}
kuang1.onblur=function(){
  if(this.value==""){
    kuang1.value="包月流量包";
  }   
}
//充值交费处的选项卡
var  number=$(".number")[0];
number.onfocus=function(){
  if(this.value=="请输入手机号码"){
       this.value="";
  }
}
number.onblur=function(){
  if(this.value==""){
    number.value="请输入手机号码";
  }   
}
//banner动效
var bannerbox=$(".bannerbox")[0];
var banner=$(".banner")[0]
var btnbox=$(".btnbox")[0];
var byu=$(".byu",btnbox);
var banleft=$(".bannerleft")[0];
var banright=$(".bannerright")[0];
var imgs=$(".banimg");
 //alert(imgs.length)

for (var i = 1; i < imgs.length; i++) {
    imgs[i].style.left="740px";
};
  var now=0;
  var next=0;
function move(){
      next++;
      if(next>=imgs.length){
        next=0;
       }
  imgs[next].style.left="740px"
  animate(imgs[now],{left:-740});
  animate(imgs[next],{left:0})
    for (var i = 0; i < byu.length; i++) {
      byu[i].style.background="#666";
      imgs[i].style.zIndex=2;
    };
  byu[next].style.background="#e40077"; 
  now=next; 
 }
 var t=setInterval(move,2000);


hover(bannerbox,function(){
  clearInterval(t);
  banleft.style.display="block";
  banright.style.display="block";
},function(){
  t=setInterval(move,2000);
  banleft.style.display="none";
  banright.style.display="none";
})


banleft.onclick=function(){
   next--;
   if(next<=-1){
     next=imgs.length-1;
   }
   imgs[next].style.left="-740px";
   animate(imgs[now],{left:740});
   animate(imgs[next],{left:0});
   for (var i = 0; i < byu.length; i++) {
      byu[i].style.background="#666";
      imgs[i].style.zIndex=2;
    };
  byu[next].style.background="#e40077"; 
  now=next; 

}
banright.onclick=function(){
  move("r");
}

for(var i = 0;i < byu.length; i++){
  byu[i].index=i;
  byu[i].onclick=function(){
    /*for( var j=0;j < byu.length;j++){
      byu[j].style.background="#666";
      if(j>=this.index){
         imgs[j].style.left="740px";
      }
    }
    this.style.background="#e40077";
    if(this.index==0){
       imgs[5].style.left=0;
       animate(imgs[5],{left:-740});
    }else{
      imgs[this.index-1].style.left="0";
      animate(imgs[this.index-1],{left:-740});
    }
    animate(imgs[this.index],{left:0});*/

    if(now==this.index){
       return;
    }
    imgs[this.index].style.left="740px";
    byu[now].style.background="#666";
    byu[this.index].style.background="#e40077";
    animate(imgs[now],{left:-740});
    animate(imgs[this.index],{left:0});

    now=this.index;
    next=this.index;
  }
}
//底部导航栏
var bottombar=$(".bottombar")[0];
var xinzeng=$(".xinzeng")[0];
var colleft=$(".colleft")[0];
var colright=$(".colright")[0];
//alert(column.length);
function moveLeft(){
 var first=getFirst(xinzeng);
   animate(xinzeng,{left:-298},function(){
      xinzeng.appendChild(first);
      animate(xinzeng,{left:0},0)
   }); 
}
var t1=setInterval(moveLeft,2000);
bottombar.onmouseover=function(){
   clearInterval(t1);
}
bottombar.onmouseout=function(){
   t1=setInterval(moveLeft,2000);
}
colright.onclick=function(){  
   moveLeft();
}
colleft.onclick=function(){

  var first=getFirst(xinzeng);
  var last=getLast(xinzeng);
      xinzeng.style.left="-298px";
      xinzeng.insertBefore(last,first);
      animate(xinzeng,{left:0});
   }

//图片滑上后作移动效果

var paione=$(".paione");
//alert(paione.length);
for(var i=0;i<paione.length; i++){
   paione[i].index=i;
   hover(paione[i],function(){
    animate(paione[this.index],{marginLeft:35},200)
   },function(){
    animate(paione[this.index],{marginLeft:56},200)
   }) 
}
var mob=$(".mobconbuyfour");
for (var i = 0; i < mob.length; i++) {
  mob[i].index=i;
  hover(mob[i],function(){
    animate(mob[this.index],{marginLeft:40},200)
  },
  function(){
    animate(mob[this.index],{marginLeft:57},200)
  })
};



//导航部分的下拉菜单
var yiji=$(".yiji");
var erji=$(".erji");
  for (var i = 0; i < yiji.length; i++) {
    yiji[i].index=i;
    hover(yiji[i],function(){
     erji[this.index].style.display="block";
    },function(){
      erji[this.index].style.display="none";
    }) 
  };


//侧边滚动动效
var kefu=$(".kefu")[0];
var tu=$(".tu",kefu);
for (var i = 0; i < tu.length; i++) {
  tu[i].index=i;
  hover(tu[i],function(){
    animate(tu[this.index],{width:124})
  },function(){
    animate(tu[this.index],{width:58})
  })
};

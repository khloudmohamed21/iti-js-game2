var imgs = ['img/1.gif',
'img/2.gif',
'img/3.gif',
'img/4.gif',
'img/5.gif',
'img/6.gif',

]

function drawImg(){
    for(var i=0; i<imgs.length ;i++){
var main = document.getElementById('main');

var x=Math.floor(Math.random()*imgs.length)

main.innerHTML +='<div><img src =" '+ imgs[x] +' " ></div>';
}
}

// function drawImg(){

//      for(var i=0; i<imgs.length ;i++){

//         main.innerHTML +='<div><img src =" '+ imgs[i] +' " ></div>';
    
//      }
// }
 
drawImg();
drawImg();


//chck win or lose
var correct_choose = new Audio('img/right.wav');
var wrong_choose = new Audio('img/wrong.wav');

var flag =true;
var arr =[];

var all_divs = document.getElementsByTagName('div');

for(var i=0;i<all_divs.length ;i++)
{
all_divs[i].addEventListener('click',function()
{
// console.log(this);
    // alert('click')
    if(flag){
        this.firstChild.style.opacity ='1';
        if( arr.length==0){
            arr[0]=this;
        }else if(arr.length==1){
            arr[1]=this;
        }
        if(arr.length==2){
            flag=false;
            setTimeout(checkimg,800);

        }
    }else{
        return;
      
    }
})


}


function checkimg(){
    if(arr[0].firstChild.getAttribute('src') == arr[1].firstChild.getAttribute('src'))
    {
        correct_choose.play();
        // alert('okay')
    } else{
        arr [0].firstChild.style.opacity=0;
        arr [1].firstChild.style.opacity=0;
        wrong_choose .play();
    }

    arr =[];
    flag =true;
   

}

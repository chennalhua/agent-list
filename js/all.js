//建立 dom
let sendBtn = document.querySelector('.send');//送出
let list = document.querySelector('.list'); //刪除
let data = JSON.parse(localStorage.getItem('contentData')) || []; //data 儲存著contentData 或 空陣列

//監聽
sendBtn.addEventListener('click',addData,false);
list.addEventListener('click',deleteData,false); //點擊 list 刪除內容
updata(data);

//加入列表儲存至 localstorge
function addData(e){
    let txt = document.querySelector('.txt').value;
    let todo = {
        content:txt //將輸入的資料推入物件中
    };
    data.push(todo); //將物件資料存至 data
    localStorage.setItem('contentData',JSON.stringify(data));//將 data 資料加入 localstroage。JSON.stringify轉字串
    updata(data); //更新資料
    reset();
}



//將資料印出
function updata(items){
    let str = '';
    let dataLen = items.length; //取 data 長度
    for(let i=0; i<dataLen; i++){
        str += '<li class="list-item" data-num="'+i+'"><span>'+items[i].content+'</span><a href="#" class="delete-btn"><i class="fas fa-trash-alt"></i></a></li>'
    } 
    list.innerHTML = str;
    
}

//刪除
function deleteData(e){
    e.preventDefault(); //a 預設執行動作刪除
    if(e.target.nodeName !== 'I'){return};
    let num = e.target.dataset.num; //指定到 data-num 取出 num
    data.splice(num,1);
    localStorage.setItem('contentData', JSON.stringify(data));
    updata(data);
}

//清空 input 內容
function reset() {
    document.querySelector(".txt").value = "";
  }
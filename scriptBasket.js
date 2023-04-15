var headphonesBasket = [];
var headphonesBasketWithCount = []
window.onload = function(){
    if (sessionStorage.length > 0){
         document.getElementsByClassName('counterBasket')[0].style.display = 'block';
    }
    else{
         let item_basketzero = document.getElementsByClassName('container_basket_content')[0];
         let content_basketzero = `
            <div class="countBasketzero">
                <span id="countBasketzero">В корзине нет товаров</span>
                <a href="index.html" id="countBasketzerolink"><div>Перейти на главную</div></a>
            </div>
         `;
         item_basketzero.innerHTML += content_basketzero;
    }
    $('#counterBasket').html(sessionStorage.length);
    addCardInBasket();
    Cost();
}
let count = 0;
//Метод добавления товара 
function addContent(headphonesBasket, countHeadphone, id){

    let item = document.getElementsByClassName('container_basket_content')[0];
    let content = `
        <div class="purchases">
            <div class="basket-card-img-counter">
                <img class="basket-card-img" src="${headphonesBasket.img}">
                <div class="counter-item">
                    <div><button class="minus" type="button" onclick="minus(${id})">–</button></div>
                    <div class="count"><span id="count_${id}">${countHeadphone}</span></div>
                    <div><button class="plus" type="button" onclick="plus(${id})">+</button></div>
                </div>
            </div>
            <div class="basket-card-title-price">
                <span class="basket-card-title">${headphonesBasket.title}</span><br>
                <span class="basket-card-price">${headphonesBasket.price} ₽</span>
            </div>  
            <div class="basket-card-del-price">
                <button class="del_item" type="button" onclick="delCard(${id})"><img class="basket-card-del" src="images/Delete.png"></button>
                <span class="basket-card-price_end">${headphonesBasket.price} ₽</span>
            </div>      
        </div>
    `;
        
    item.innerHTML += content;
}
function addCardInBasket(){
    let i=0;
    let keys = Object.keys(sessionStorage);
    for (let key of keys){
        let headphonesBasketJsPars = sessionStorage.getItem(key);
        headphonesBasket[i] = JSON.parse(headphonesBasketJsPars);
        ++i;
    }
    let count = 0;
    for(let i = 0; i < headphonesBasket.length;i++){
        let countHeadphone = headphonesBasket.filter(elem => elem.img == headphonesBasket[i].img).length;  
        if(headphonesBasketWithCount.filter( elem  => elem.img == headphonesBasket[i].img).length == 0){
            headphonesBasketWithCount[count] = headphonesBasket[i];
            headphonesBasketWithCount[count].count = countHeadphone;
            count++;
            }   
    }
    for(let i = 0; i < headphonesBasketWithCount.length; i++){
        addContent(headphonesBasketWithCount[i], headphonesBasketWithCount[i].count, i);
    }  

}
function Cost(){ // уведомление о покупке
    var CostID = document.getElementById("price");
    let sum = 0;
    for(let i = 0; i < headphonesBasketWithCount.length; i++){
        sum += headphonesBasketWithCount[i].price * headphonesBasketWithCount[i].count;
    }
    CostID.innerHTML ="₽ " + sum  ;
}
function searchByImg(img){
    let headphone;
    let keys = Object.keys(sessionStorage);
    for (let key of keys) {
            let headphonesBasketJsPars = sessionStorage.getItem(key);
            headphone = JSON.parse(headphonesBasketJsPars);
            if(headphone.img == img){
                return key;
            }
        }
    }
function delCard(id){
    for(let j = 0; j< headphonesBasketWithCount[id].count ; j++){
        let ok = true;
        let i = 0;
        while (ok && (i < headphonesBasket.length)){
            if(headphonesBasketWithCount[id].img == headphonesBasket[i].img) {
                sessionStorage.removeItem(searchByImg(headphonesBasket[i].img));
                headphonesBasket.splice(i, 1);
                ok = false;
            }
            i++;
        }
    }
    location.reload();
}
function plus(id){
    let item = document.getElementById('count_' + id);
    headphonesBasketWithCount[id].count += 1;
    let ok = true;
    let i = 0;
    while (ok && (i < headphonesBasket.length)){
        if(headphonesBasketWithCount[id].img == headphonesBasket[i].img) {
            sessionStorage.setItem(sessionStorage.length, JSON.stringify(headphonesBasket[i]));
            headphonesBasket.push(headphonesBasket[i]);
            ok = false;
        }
        i++;
    }
    item.innerHTML =  headphonesBasketWithCount[id].count
    Cost();
}
function minus(id){
    let item = document.getElementById('count_' + id);
    headphonesBasketWithCount[id].count -= 1;
    let ok = true;
    let i = 0;
    while (ok && (i < headphonesBasket.length)){
        if(headphonesBasketWithCount[id].img == headphonesBasket[i].img) {
            sessionStorage.removeItem(searchByImg(headphonesBasket[i].img));
            headphonesBasket.splice(i, 1);
            ok = false;
        }
        i++;
    }
    if(headphonesBasketWithCount[id].count == 0){
        location.reload();
    }
    item.innerHTML =  headphonesBasketWithCount[id].count;
    Cost();
}
//Методы смены языка на странице
function ChangeLang(Element) {
    let el = document.getElementsByClassName("lang");
    for (var i = 0; i < el.length; ++i) {  
       var item = el[i];    
       item.style.color = '#101010';
    };
    if (Element.id == "rus"){
        Element.style.color = '#FFA542';
        RusLang()
    }
    if (Element.id == "eng"){
        Element.style.color = '#FFA542';
        EngLang()
    } 
    if (Element.id == "kuz"){
        Element.style.color = '#FFA542';
        kuzLang()
    } 
}

function EngLang() {
    
}
function RusLang() {
    
}
function KuzLang() {
    
}
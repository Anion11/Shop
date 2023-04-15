//массив наушников
const headphones = [
    {
        'img' : "images/Apple BYZ S8521.png",
        'title' : 'Apple BYZ S8521',
        'price' : 2927,
        'rate' : 4.7,
        'discount': 3527,
    },
    {
        'img' : "images/Apple EarPods.png",
        'title' : 'Apple EarPods',
        'price' : 2327,
        'rate' : 4.5,
        'discount': 0,
    },
    {
        'img' : "images/Apple EarPodsBox.png",
        'title' : 'Apple EarPods',
        'price' : 2327,
        'rate' : 4.5,
        'discount': 0,
    },
    {
        'img' : "images/Apple BYZ S8521.png",
        'title' : 'Apple BYZ S8521',
        'price' : 2927,
        'rate' : 4.7,
        'discount': 0,
    },
    {
        'img' : "images/Apple EarPods.png",
        'title' : 'Apple EarPods',
        'price' : 2327,
        'rate' : 4.5,
        'discount': 0,
    },
    {
        'img' : "images/Apple EarPodsBox.png",
        'title' : 'Apple EarPods',
        'price' : 2327,
        'rate' : 4.5,
        'discount': 0,
    }
]
//массив беспроводных наушников
const wirelessHeadphones = [
    	{
            'img' : "images/AirPods.png",
            'title' : 'Apple EarPods',
            'price' : 9527,
            'rate' : 4.7,
            'discount': 0,
        },
        {
            'img' : "images/GERLAX GH-04.png",
            'title' : 'GERLAX GH-04',
            'price' : 6527,
            'rate' : 4.7,
            'discount': 0,
        },
        {
            'img' : "images/BOROFONE BO4.png",
            'title' : 'BOROFONE BO4',
            'price' : 7527,
            'rate' : 4.7,
            'discount': 0,
        }
]
window.onload = function(){
//добавление карточек наушников на сайт
let container = document.getElementsByClassName('headphones');

headphones.forEach((card_item, id) => { //перебор всего массива
    let item = container[0]; 
    let content = ''
    let discount = ''
    //проверка есть ли скидка
    if (card_item.discount != 0){
        discount = 
            `
                <p class="card-discount" style="">${card_item.discount} ₽</p>
                <style>
                    #span${id}{
                        margin-bottom: 18px !important;
                    }
                </style>
            `;

    }
    // html код
    content += `
            <div class="box_headphones">
                <div class="card">
                    <div class="card-image">
                        <img id="headphones_card_image${id}" src="${card_item.img}">
                    </div>
                    <div class="card-text">
                        <div class="card-left">
                            <div class="card-title">
                                <span class="card-title">${card_item.title}</span>
                            </div>
                            <div class="card-rate">
                                <img src="images/Star.png">
                                <span>${card_item.rate}</span>
                            </div>
                        </div>
                        <div class="card-right">
                            <div class="card-price">
                                <span id="span${id}">${card_item.price} ₽ ${discount}</span>
                            </div>
                            <button class="card-btn" type="button" onclick="addPurchases(${id})">Купить</button>
                        </div>
                    </div>
                </div>
            </div>

                `;
    item.innerHTML += content;
    }

)
//добавление карточек беспроводных наушников на сайт
container = document.getElementsByClassName('wirelessHeadphones');

wirelessHeadphones.forEach((card_item, id) => {  //перебор всего массива
    item = container[0]; 
    content = ''
    discount = ''
    //проверка есть ли скидка
    if (card_item.discount != 0){
        discount = 
            `
                <p class="card-discount">${card_item.discount} ₽</p>
            `;
    }
    // html код
    content = `
               <div class="box_headphones">
                <div class="card">
                    <div class="card-image">
                        <img id="wirelessHeadphones_card_image${id}" src="${card_item.img}">
                    </div>
                    <div class="card-text">
                        <div class="card-left">
                            <div class="card-title">
                                <span class="card-title">${card_item.title}</span>
                            </div>
                            <div class="card-rate">
                                <img src="images/Star.png">
                                <span>${card_item.rate}</span>
                            </div>
                        </div>
                        <div class="card-right">
                            <div class="card-price">
                                <span>${card_item.price} ₽ ${discount}</span>
                            </div>
                            <button class="card-btn" type="button" onclick="addPurchases(${id + headphones.length})">Купить</button>
                        </div>
                    </div>
                </div>
            </div>
                `;
    item.innerHTML += content;
    }
)
if (sessionStorage.length > 0){
         document.getElementsByClassName('counterBasket')[0].style.display = 'block';
}
$('#counterBasket').html(sessionStorage.length);
}
function addPurchases(id){
    let count = sessionStorage.length;
    if (id <= headphones.length - 1){
        sessionStorage.setItem(count, JSON.stringify(headphones[id]));
    }
    else{
        sessionStorage.setItem(count, JSON.stringify(wirelessHeadphones[id - headphones.length]));
    }
    if (sessionStorage.length > 0){
         document.getElementsByClassName('counterBasket')[0].style.display = 'block';
    }
    $('#counterBasket').html(count + 1);
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
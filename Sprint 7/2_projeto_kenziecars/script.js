let favCount = 0;

function renderProductCards(list){
    // <li id="p_1">
    //     <img src="./img/supra.jpg">
    //     <p>Toyota Supra 1998</p>
    //     <button id="car_1" class="productButton">Favoritar</button>
    // </li>

    // {
    //     id: 1,
    //     modelo: 'Supra',
    //     ano: 1998,
    //     marca: 'Toyota',
    //     imagem: './img/supra.jpg',
    // }

    let listaProdutos = document.querySelector('#listaProdutos');

    for(let i = 0 ; i<list.length ; i++){
        let car = list[i];

        //Criação dos elementos
        let li = document.createElement('li');
        let img = document.createElement('img');
        let p = document.createElement('p');
        let btn = document.createElement('button');

        //Condiguração dos elementos
        li.id = 'p_'+car.id;
        img.src = car.imagem;
        img.alt = `Imagem do veiculo modelo ${car.modelo} da marca ${car.marca} do ano ${car.ano}`;
        p.innerText = `${car.marca} ${car.modelo} ${car.ano}`;
        btn.innerText = 'FAVORITAR';
        btn.classList.add("productButton");
        btn.classList.add("class1");
        btn.classList.add("class2");
        btn.classList.add("class3");
        btn.id = 'car_'+car.id; //car_1

        btn.addEventListener('click',function(e){
           
            // console.log(car.id);
            let idElemento = e.target.id;
            let id = parseInt(idElemento.substring(4)); 
            
            if(!foiAdicionadonNaTela(id)){
                //criar uma função para encontrar o objeto a partir do id do elemento
                let car = searchCar(id);

                //criar o card com base no objeto encontrado
                let card = createCarFavorite(car);

                //add o card na lista de favoritos
                let listaFavoritos = document.querySelector('#listaFavoritos');
                listaFavoritos.appendChild(card);

                favCount++;
                document.querySelector('#favQuantidade').innerText = `(${favCount})`;
            }
          
        })

        //Hierarquia dos elementos
        li.append(img, p, btn);
            // li.appendChild(img);
            // li.appendChild(p);
            // li.appendChild(btn);


        //Inserçao do elemento na tela
        listaProdutos.appendChild(li);

    }
}

renderProductCards(carros);


function searchCar(id){
    for(let i = 0; i <carros.length; i++){
        let car = carros[i];
        if(car.id == id){
            return car;
        }
    }
    return {};
}

function createCarFavorite(car){

    //Criação dos elementos
    let li = document.createElement('li');
    let img = document.createElement('img');
    let p = document.createElement('p');
    let btn = document.createElement('button');

    //Condiguração dos elementos
    li.id = 'fav_'+car.id;
    img.src = car.imagem;
    img.alt = car.modelo;
    p.innerText = `${car.marca} ${car.modelo} ${car.ano}`;
    btn.innerHTML = 'REMOVER';
    btn.classList.add("productButton");
    btn.id = 'btnfav_'+car.id;

    btn.addEventListener('click', function(e){
        // let path = e.composedPath(); 
        // path[1].remove();
        
        let id = parseInt(e.target.id.substring(7));
        document.querySelector('#fav_'+id).remove();

        favCount--;
        document.querySelector('#favQuantidade').innerText = `(${favCount})`;
    })

    //Hierarquia dos elementos
    li.append(img, p, btn);

    return li; 
}


function foiAdicionadonNaTela(id){
    let elem = document.querySelector('#fav_'+id); //fav_1
    if(elem == null){
        return false;
    }
    return true;
}
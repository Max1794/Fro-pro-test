window.onload = function () {
    var data = {
        name: 'menu',
        type: 'row',
        items: ['Home', 'Gallery', 'Contact']
    }
       
    var ulElem = document.createElement('ul');
    // ulElem.classList.add('menu', data.type);
    var li;

    for (var i = 0; i < data.items.length; i++) {
        li = document.createElement('li');
        li.innerHTML = data.items[i];
        ulElem.appendChild(li);
    }

    document.body.appendChild(ulElem); 
    ulElem.classList.add('menu',data.type);  
}
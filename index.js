let removeItem = document.getElementsByClassName('closing');
        
            
        // }
        for(let i = 0; i < removeItem.length; i++ ) {
            removeItem[i].onclick = function(){
            let li = this.parentElement;
            li.style.display = 'none';
            numberOfItems--;
            }
        }

        let numberOfItems = 0;
        let addBtn = document.getElementById('add-btn');
        addBtn.addEventListener('click', addItemToList);


        function addItemToList() {

            if (numberOfItems >= 5) {
                alert('Number of Tasks are full');
                document.getElementById('add-input').value = '';
            }else{

                let addInput = document.getElementById('add-input').value;

                let listItem = document.createElement('li');
                let createNewItem = document.createTextNode(addInput);
                listItem.appendChild(createNewItem);

            if (addInput === '') {
                alert('must enter something');
            } else {
                let list = document.getElementById('list');
                list.appendChild(listItem);
                numberOfItems++;
            }
                document.getElementById('add-input').value = '';

                let Closingspan = document.createElement('span');
                Closingspan.className = 'closing';
                let cross = document.createTextNode('\u00D7');
                Closingspan.appendChild(cross);
                Closingspan.style.float = 'right';
                Closingspan.style.cursor = 'pointer';

                listItem.appendChild(Closingspan);

                for(let i = 0; i <removeItem.length; i++ ) {
                removeItem[i].onclick = function(){
                let li = this.parentElement;
                li.style.display = 'none';
                numberOfItems--;
                }
                
            }
    }

    }
    
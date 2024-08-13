
const body = document.querySelector('body');
const imgDiv = document.getElementById('imgDiv');
const orderId = document.getElementById('orderid')

document.querySelector('button').addEventListener('click', () => {
    // Select all checkboxes
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    
    // Array to store the checked items
    const checkedItems = [];

    imgDiv.innerHTML = "";
    orderId.innerText = "";


    async function getImage(item){
        const response = await fetch(`https://api.unsplash.com/search/photos?query=${item}&client_id=8QmwfNUKK6Zg1bjvSgy2NdU4XJD_QehVf_NkSV2wRxs`);
        const data = await response.json();
        const itemImage = data.results[0].urls.small;

        console.log(itemImage);
        function createImg(){
            const img = document.createElement('img');
            img.setAttribute('src',itemImage);
            img.style.height = '300px';
            img.style.width = '300px';
            imgDiv.appendChild(img);
        }
        createImg();
        
        
        
    }

    

    // Iterate over all checkboxes
    
    checkboxes.forEach(checkbox => {
        // Check if the checkbox is checked
        if (checkbox.checked) {
            // Add the id or value of the checked checkbox to the array
            const item = checkbox.id;
            // console.log(item);

            // getImage(item);
            setTimeout(() => {
                getImage(item).then(() => {
                    const order_id = Math.floor(Math.random() * 10000);
                    orderId.innerText = `order Id: ${order_id}`
                })
            }, 2000);
            
            
        }
    });

    // Display the checked items
});


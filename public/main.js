const moreProducts = [
    {
        id: 1,
        name: 'Red Love Cup',
        img: 'more-product-1.jpg',
        sale: 'true',
        currentPrice: '25.00',
        oldPrice: '37.00',
    },
    {
        id: 2,
        name: 'Black Tea Cup',
        img: 'more-product-2.jpg',
        sale: 'true',
        currentPrice: '15.00',
        oldPrice: '29.00',
    },
    {
        id: 3,
        name: 'B&W Essentials Mug',
        img: 'more-product-3.jpg',
        sale: '',
        price: '19.00',
    },
    {
        id: 4,
        name: 'Winter Style Mug',
        img: 'more-product-4.jpg',
        sale: '',
        price: '25.00',
    },
    {
        id: 5,
        name: 'Ceramic Tea',
        img: 'more-product-5.jpg',
        sale: '',
        price: '46.00',
    },
    {
        id: 6,
        name: 'No Handle Bar Cup',
        img: 'more-product-6.jpg',
        sale: '',
        price: '34.00',
    },
    {
        id: 7,
        name: 'Espresso Cup by Mugs.co',
        img: 'more-product-7.jpg',
        sale: '',
        price: '25.00',
    },
    {
        id: 8,
        name: 'Pink Premium Ceramic',
        img: 'more-product-8.jpg',
        sale: '',
        price: '99.00',
    },
    {
        id: 9,
        name: 'Summer Designer Cup',
        img: 'more-product-9.jpg',
        sale: '',
        price: '29.00',
    },
];


const topMenu = document.querySelector('#ct-top-menu');
const topMenuIcon = document.querySelector('#ct-toggle-top-menu-icon');


const toggleMenu = (e) => {
    if (topMenuIcon.contains(e.target)) {
        // Click to toggle menu icon

        topMenu.classList.toggle('hidden');
        topMenu.classList.toggle('ct-menu-expanded');
    }
    else {
        // click outside toggle menu icon
        topMenu.classList.add('hidden');
        topMenu.classList.remove('ct-menu-expanded');
    }
};
//toggle menu
document.addEventListener('click', toggleMenu);


// onChange size window
window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
        topMenu.classList.remove('ct-menu-expanded');
    }
    else {
        topMenu.classList.add('ct-menu-expanded');
    }
});
// render list more product item
const moreProductCollection = document.querySelector('#more-product-collection');
const renderItem = (item) => {
    return `
    <div class="featured-collection-wrapper mb-12 w-full md:w-[30%]">
    <div style="background-image: url('./img/${item.img}');"
        class="group h-[370px] w-[94%] lg:h-[380px] mx-auto md:mx-0 md:w-[100%] bg-center bg-cover bg-no-repeat relative">
        <div class="overlay">
            ${item.sale ? `<div class="ct-sale-tag">
                                On Sale.
                            </div>` : ''}
        </div>
        <div class="ct-explore-mugs group-hover:block">
            EXPLORE MUGS
        </div>
    </div>
    <div class="text-center">
        <div class="mt-[25px] mb-[5px] cursor-pointer">
            ${item.name}
        </div>
        ${item.price ? `<div class="ct-price">
                            $ ${item.price} USD
                        </div>` 
                        : 
                        `
                        <span class="ct-current-price">$ ${item.currentPrice} </span>
                        <span class="ct-old-price">
                            $ ${item.oldPrice} USD
                         </span>`
          }
    </div>
</div>
    `
}
const moreProductCollectionHtmls = moreProducts.map(renderItem);
moreProductCollection.innerHTML = moreProductCollectionHtmls.join('');


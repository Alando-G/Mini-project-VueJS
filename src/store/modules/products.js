const state = {
    stockDetails : [
		{
			itemNumber: 1,
			itemName : "Stylish Men Shoes",
			itemPrice : 3000,
			itemQuantity : 30,
			itemImage: '../images/classic-stylish-men-s-shoes-closeup-gray.jpg'
		},
		{
			itemNumber: 27466,
			itemName : "Leather Shoes",
			itemPrice : 4500,
			itemQuantity : 4,
			itemImage: '../images/male-background-beauty-modern-leather.jpg'
		},
		{
			itemNumber: 27466,
			itemName : "Wedding Shoes",
			itemPrice : 2900,
			itemQuantity : 4,
			itemImage: '../images/male-wedding-shoes.jpg'
		},
		{
			itemNumber: 27466,
			itemName : "Sneakers",
			itemPrice : 1500,
			itemQuantity : 4,
			itemImage: '../images/one-black-sneaker-shoe-isolated-white.jpg'
		},
		{
			itemNumber: 27466,
			itemName : "Boots",
			itemPrice : 4000,
			itemQuantity : 4,
			itemImage: '../images/travel-still-life-pack-flat-lay.jpg'
		},
		{
			itemNumber: 27466,
			itemName : "Trekking Boots",
			itemPrice : 4800,
			itemQuantity : 4,
			itemImage: '../images/vertical-shot-blue-winter-trekking-boots-black-background.jpg'
		}
		],
}
const getters = {
	stock: (state) => state.stockDetails,
}
const actions = {

}
const mutations = {

}
export default {
	state,
	getters,
	actions,
	mutations
}
import Vue from "vue";
import Vuex from "vuex";


Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		orderList: [],
		menuList: [
			{
				title: "아메리카노",
				price: 3000,
				selected: false,
				image: "https://source.unsplash.com/featured/?americano",
			},
			{
				title: "라떼",
				price: 4000,
				selected: false,
				image: "https://source.unsplash.com/featured/?latte",
			},
			{
				title: "카푸치노",
				price: 4500,
				selected: false,
				image: "https://source.unsplash.com/featured/?capucchino",
			},
		],
		sizeList: [
			{
				name: "small",
				price: 0,
				selected: false,
			},
			{
				name: "medium",
				price: 500,
				selected: false,
			},
			{
				name: "large",
				price: 1000,
				selected: false,
			},
		],
		// 옵션 리스트
		optionList: [
			{
				type:'샷',
				price: 500,
				count:0,
			},
			{
				type:'바닐라 시럽',
				price: 700,
				count:0,
			},
			{
				type:'카라멜 시럽',
				price: 1000,
				count:0,
			},

		],
		selectedMenu: {},
		selectedSize: {},
		selectedOption: {},
	},
	getters: {
		totalOrderCount(state) {
			return state.orderList.length;
		},
		totalOrderPrice(state) {
			return state.orderList.reduce((sum, order) => {
				let res = 0
				for (let i = 0; i<order.option.length; i++) {
					res += order.option[i].price * order.option[i].count
				}
				sum += order.menu.price + order.size.price +res;
				return sum;
			}, 0);
		},
	},
	mutations: {
		addOrder(state) {
			const clone = JSON.parse(JSON.stringify(state.optionList))
			state.orderList.push({
				menu: state.selectedMenu,
				size: state.selectedSize,
				option : clone,
			});
			const datas = JSON.stringify(state.orderList)
			localStorage.setItem('orderdata', datas)
		},
		clearOrder(state) {
			for (let i=0; i<state.optionList.length; i++) {
				state.optionList[i].count = 0
			}
		},
		updateMenuList(state, selectedMenu) {
			state.menuList = state.menuList.map((menu) => {
				if (menu.title === selectedMenu.title) {
					menu.selected = true;
					state.selectedMenu = selectedMenu;
				} else {
					menu.selected = false;
				}
				return menu;
			});
		},
		updateSizeList(state, selectedSize) {
			state.sizeList = state.sizeList.map((size) => {
				if (size.name === selectedSize.name) {
					size.selected = true;
					state.selectedSize = selectedSize;
				} else {
					size.selected = false;
				}
				return size;
			});
		},
		updateOptionIncrease(state, selectedOption) {
			state.optionList = state.optionList.map((option) =>{
				if (option.type === selectedOption.type) {
					option.count += 1
					state.selectedOption = selectedOption;
					// state.optionList = option
				}
				return option
			})
		},
		updateOptionDecrease(state, selectedOption) {
			state.optionList = state.optionList.map((option) =>{
				if (option.type === selectedOption.type) {
					if (option.count != 0){
						option.count -= 1
						state.selectedOption = selectedOption;
						// state.optionList = option
					}
				}
				return option
			})
		},
		loadData(state, data) {
			state.orderList = data
		}
	},
	actions: {
		selectMenu(context, selectedMenu) {
			context.commit("updateMenuList", selectedMenu);
		},
		selectSize(context, selectedSize) {
			context.commit("updateSizeList", selectedSize);
		},
		addOrder(context) {
			context.commit("addOrder");
		},
		clearOrder(context) {
			context.commit("clearOrder");
		},
		selectIncreaseOption(context,selectedOption) {
			context.commit("updateOptionIncrease", selectedOption)
		},
		selectDecreaseOption(context, selectedOption) {
			context.commit("updateOptionDecrease", selectedOption)
		},
		data(context, data) {
			context.commit('loadData', data)
		}

	},
	modules: {},
});

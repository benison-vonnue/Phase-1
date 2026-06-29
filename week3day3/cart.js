// ​Task 6 (50 min) - Shopping Cart - Immutable + Observer​
// ​382.​ ​Build Cart with addItem, removeItem, updateQuantity, applyCoupon, getTotal - every method​
// ​returns a NEW Cart, never mutates current one​
// ​383.​ ​Implement observer: addObserver(fn) registers a listener, notifyObservers() calls all after each​
// ​change​
// ​384.​ ​Render cart to the DOM. Subscribe a render function - it re-renders on every state change.​
// ​385.​ Persist to localStorage. Restore on page load. Add undo() with a history stack.​

const cartSection = document.querySelector("#cart-section");

// Not completed
const observer = {
    addObserver: function (fn) {
        fn();
    },
    notifyObserver: function () {
        this.addObserver();
    },
};

// Local Storage implementation difficult will have to refactor entire code

class Stack {
    array = [];

    cart = () => this.array[this.array.length - 1];

    render = () => {
        // console.log("render is working", this.array);
        cartSection.replaceChildren();
        if (this.array.length === 0) {
            return;
        }
        this.array[this.array.length - 1].items.forEach((element) => {
            this.addCart(
                `Name : ${element.name}, Quantity: ${element.quantity}`
            );
        });
    };
    addCart = (content) => {
        const div = document.createElement("div");
        const p = document.createElement("p");
        p.textContent = content;
        div.appendChild(p);
        cartSection.appendChild(div);
    };
    push = (el) => {
        this.array.push(el);
        this.render();
    };
    pop = () => {
        this.array.pop();
        this.render();
    };
}

const stack = new Stack();

class Cart {
    items = [];
    constructor(...items) {
        this.items = items;
        return this;
    }
    addItem = (item) => {
        const cart = new Cart(...this.items, item);
        return cart;
    };
    removeItem = (id) => {
        const cart = new Cart(...this.items.filter((each) => each.id !== id));
        return cart;
    };
    updateQuantity = (itemId, quantity) => {
        const cartItems = JSON.parse(JSON.stringify(this.items));
        const item = cartItems.find((ele) => ele.id === itemId);
        item.quantity = quantity;
        const cart = new Cart(...cartItems);
        return cart;
    };
    applyCoupon = () => {
        const cart = new Cart(
            ...this.items.map((each) => this.applyCouponOnItem(each))
        );
        return cart;
    };
    applyCouponOnItem = (each) => {
        console.log(`Applied Coupons on ${each.name}`);
        return each;
    };
    getTotal = () => {
        const total = this.items.reduce((acc, next) => {
            return { cost: acc.cost + next.cost };
        });

        return total.cost;
    };
}

let cart = new Cart(
    { id: 1, quantity: 2, name: "item1", coupons: [], cost: 200 },
    { id: 2, quantity: 3, name: "item2", coupons: [], cost: 900 },
    { id: 3, quantity: 1, name: "item3", coupons: [], cost: 40 }
);

stack.push(cart);

function addItem(item) {
    stack.push(stack.cart().addItem(item));
}

function removeItem(id) {
    stack.push(stack.cart().removeItem(id));
}

function updateQuantity(id, quantity) {
    stack.push(stack.cart().updateQuantity(id, quantity));
}
// cart.addItem({id:4, quantity:4, name"item4", coupons: [], cost: 500})
function undo() {
    stack.pop();
}

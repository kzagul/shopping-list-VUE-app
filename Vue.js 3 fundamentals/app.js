const shoppingList = Vue.createApp({
    data() {
        return {
            header: 'Shopping list App',
            editing: false,
            items: [
                { id: 1, label: '10 party hats', purchased: true, highPriority: true},
                { id: 2, label: 'Big clown shoes', purchased: true, highPriority: false},
                { id: 3, label: '10 cups for tea', purchased: false, highPriority: true},
                { id: 4, label: 'big cube', purchased: false, highPriority: false}
            ],
            newItem: "",
            newItemPriority: 'low',
            newItemHighPriority: false,
            iceCreamFlavors: [
                
            ]
        }
    },
    methods: {
        saveItem(){
            this.items.push({ 
                id: this.items.length + 1, 
                label: this.newItem,
                highPriority: this.newItemHighPriority
            })
            this.newItem = ""
            this.newItemHighPriority = false
        },
        doEdit(editing){
            this.editing = editing
            this.newItem = ""
            this.newItemHighPriority = false
        },
        togglePurchased(item){
            item.purchased = !item.purchased
        }
    },
    computed: {
        characterCount(){
            return this.newItem.length
        },
        reversedItems(){
            return [...this.items].reverse()
        }
    }
})

shoppingList.mount('#shopping-list')
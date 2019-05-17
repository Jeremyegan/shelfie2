let inventory = []

module.exports = {

    readAllProducts: (req, res) => {
        console.log('hit method readAll', res.data)
        const db = req.app.get('db')
        db.getAllProducts([]).then(inventory => {
            res.status(200).send(inventory)
        })
        console.log(res.data, "get req")
    },

    createProduct: (req, res) => {
        const db = req.app.post('db')
        const { img, name, price } = req.body

        let product = {
            id: id,
            name,
            price,
            img
        }
        inventory.push(product)
        db.createProduct([img, name, price]).then(() => {
            res.status(200).send(console.log(req.body))
        })
    },

    deleteProduct: (req, res) => {
        let { id } = req.params

        let index = inventory.findIndex(product => Number(product.id) === Number(id))

        inventory.splice(index, 1)
        res.send(inventory)
    },

    updateProduct: (req, res) => {
        let { name, price, imageUrl } = req.body
        let product = {
            id: id,
            name,
            price,
            img
        }

        let index = inventory.findIndex(product => Number(product.id) === Number(id))

        inventory.splice(index, 1, product)
        res.send(inventory)
    }


}
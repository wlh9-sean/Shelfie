const getInventory = async (req, res) => {
    try {
        const db = req.app.get('db')
        const inventory = await db.get_inventory()
        res.send(inventory)
    } catch (error) {
        console.log('Error fetching inventory', error)
        res.status(500).send(error)
    }
}

const createProduct = (req, res) => {
    const {name, price, img} = req.body
    const db = req.app.get('db')
    db.create_product([name, price, img]).then(() => {
        res.status(200).send('Product Created')
    })
}

module.exports={
    getInventory,
    createProduct
}


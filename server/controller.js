const getInventory = (req, res) => {
    const db = req.app.get('db')
    db.get_inventory().then((products) => {
        res.status(200).send(products)
    }).catch(err => console.log(err))
    console.log(db)
}

module.exports={
    getInventory,
}


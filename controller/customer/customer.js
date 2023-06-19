const { app, express, Port } = require('../../common/common')
const { insertData } = require('../../model/users')
app.use(express);
exports.createCustomer = async (req, res) => {
    const data = {
        card_no: req.body.card_no,
        package_fair: req.body.package_fair,
        user_name: req.body.user_name,
        box_company_name: req.body.box_company_name,
        box_type: req.body.box_type,
        customer_fair: req.body.customer_fair,
        customer_address: req.body.customer_address,
        customer_due_fair: req.body.customer_due_fair,
        activate_duration_day: req.body.activate_duration_day
    }
    try {
        const res1 = await insertData(data)
        // console.log('res1', res1);
        if (!res1) {
            res.status(400).json(res1)
        } else {
            res.send({ "status": true, "message": "User register successfully." })
        }
    } catch (error) {
        console.log('error>>>>>>>>>', error);
        throw new Error(error)
    }

}
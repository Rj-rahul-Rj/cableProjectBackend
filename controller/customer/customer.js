const { app , express ,Port } = require('../../common/common')

exports.createCustomer = async (req, res) =>{
    const data = {
        card_no : req.body.card_no,
        package_fair : req.body.package_fair,
        user_name : req.body.user_name,
        box_company_name : req.body.box_company_name,
        box_type : req.body.box_type,
        customer_fair : req.body.customer_fair,
        customer_address : req.body.customer_address,
        customer_due_fair : req.body.customer_due_fair,
        activate_duration_day : req.body.activate_duration_day,
        status : req.body.status
    }
    res.send(data);
}
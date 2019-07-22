const fs = require('fs');

module.exports = {
    addDataPage: (req, res) => {
        res.render('Add.ejs', {
			isAdded: false
        });
    },
    addData: (req, res) => {
	
        let complainant = req.body.complainant;
		let name = req.body.name;
        let branch = req.body.branch;
		let fieldClass = req.body.fieldClass;
		let mobileNumber = req.body.mobileNumber;
		let email = req.body.email;
		let message = req.body.fieldComplaint;
   
        let insertQuery = "INSERT INTO `grievance` VALUES('"+ complainant +"', '" + name + "', '" + branch + "', '" + fieldClass + "', '" + mobileNumber + "', '" + email + "', '" + message +"');";

		
        db.query(insertQuery, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            } else {
                 res.render('Add.ejs', {
					isAdded: true
				});	
            }
        });
		
		
    },
};

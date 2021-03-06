var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var response = {};

var employee = [{
		id: 1,
		firstName: 'Sanjai',
		lastName: 'kumar',
		email: 'sanjaikumars@virtusapolaris.com',
		position: 'Consultant'
	},{
		id: 2,
		firstName: 'Suresh',
		lastName: 'kumar',
		email: 'sureshkumars@virtusapolaris.com',
		position: 'Associate-Consultant'
	},{
		id: 3,
		firstName: 'Mahesh',
		lastName: 'jeyagopal',
		email: 'maheshjeyagopal@virtusapolaris.com',
		position: 'Senior-Consultant'
	},{
		id: 4,
		firstName: 'Rajesh',
		lastName: 'kumar',
		email: 'rajeshjekumar@virtusapolaris.com',
		position: 'Senior-Consultant'
	},{
		id: 5,
		firstName: 'Anitha',
		lastName: 'jeyagopal',
		email: 'anithajeyagopal@virtusapolaris.com',
		position: 'Consultant'
	},{
		id: 6,
		firstName: 'Deepika',
		lastName: 'gayathri',
		email: 'deepikagayathri@virtusapolaris.com',
		position: 'Senior-Consultant'
	},{
		id: 7,
		firstName: 'Sathish',
		lastName: 'kumar',
		email: 'sathishkumar@virtusapolaris.com',
		position: 'Tech-Lead'
	},{
		id: 8,
		firstName: 'Srini',
		lastName: 'vasan',
		email: 'srinivasan@virtusapolaris.com',
		position: 'Architech'
	},{
		id: 9,
		firstName: 'Ritesh',
		lastName: 'sagar',
		email: 'riteshsagar@virtusapolaris.com',
		position: 'Associate-Consultant'
	},{
		id: 10,
		firstName: 'Rajesh',
		lastName: 'jeyagopal',
		email: 'rajeshjeyagopal@virtusapolaris.com',
		position: 'Consultant'
	}];
	
	var fruitDetails = [{
		id: 1,
		basePrice: 7.99,
		totalPrice: 7.99,
		kg: 1,
		withOutDiscountPrice: 10.00,
		name: 'fresh sweet lime (500 gm)',
		imageUrl: 'images/32.png'
	},{
		id: 2,
		basePrice: 7.99,
		totalPrice: 7.99,
		kg: 1,
		withOutDiscountPrice: 10.00,
		name: 'fresh mango dasheri (1 kg)',
		imageUrl: 'images/10.png'
	},{
		id: 3,
		basePrice: 7.99,
		totalPrice: 7.99,
		kg: 1,
		withOutDiscountPrice: 10.00,
		name: 'fresh apple red (1 kg)',
		imageUrl: 'images/11.png'
	},{
		id: 4,
		basePrice: 7.99,
		totalPrice: 7.99,
		kg: 1,
		withOutDiscountPrice: 10.00,
		name: 'fresh muskmelon (1 kg)',
		imageUrl: 'images/34.png'
	},{
		id: 5,
		basePrice: 7.99,
		totalPrice: 7.99,
		kg: 1,
		withOutDiscountPrice: 10.00,
		name: 'fresh strawberry (1 pc)',
		imageUrl: 'images/36.png'
	},{
		id: 6,
		basePrice: 7.99,
		totalPrice: 7.99,
		kg: 1,
		withOutDiscountPrice: 10.00,
		name: 'Fortune SUnflower Oil',
		imageUrl: 'images/1.png'
	},{
		id: 7,
		basePrice: 7.99,
		totalPrice: 7.99,
		kg: 1,
		withOutDiscountPrice: 10.00,
		name: 'Fortune SUnflower Oil',
		imageUrl: 'images/1.png'
	}];
	
	var dryfruitDetails = [{
		id: 1,
		basePrice: 450,
		totalPrice: 450,
		kg: 1,
		withOutDiscountPrice: 500.00,
		name: 'Almonds  (1 kg)',
		imageUrl: 'images/Almonds.jpg'
	},{
		id: 2,
		basePrice: 300,
		totalPrice: 300,
		kg: 1,
		withOutDiscountPrice: 400.00,
		name: 'Cashewnut (1 kg)',
		imageUrl: 'images/Cashews.jpg'
	},{
		id: 3,
		basePrice: 100,
		totalPrice: 100,
		kg: 1,
		withOutDiscountPrice: 150.00,
		name: 'Dry Fig (1 kg)',
		imageUrl: 'images/Figs.jpg'
	},{
		id: 4,
		basePrice: 45,
		totalPrice: 45,
		kg: 1,
		withOutDiscountPrice: 50.00,
		name: 'Peanuts (1 kg)',
		imageUrl: 'images/Peanuts.jpg'
	},{
		id: 5,
		basePrice: 550,
		totalPrice: 550,
		kg: 1,
		withOutDiscountPrice: 600.00,
		name: 'Pista (1 kg)',
		imageUrl: 'images/Pistachios.jpg'
	},{
		id: 6,
		basePrice: 150,
		totalPrice: 150,
		kg: 1,
		withOutDiscountPrice: 200.00,
		name: 'Raisins (1 kg)',
		imageUrl: 'images/Raisins.jpg'
	},{
		id: 7,
		basePrice: 600,
		totalPrice: 600,
		kg: 1,
		withOutDiscountPrice: 100.00,
		name: 'Walnuts (1 kg)',
		imageUrl: 'images/Walnuts.jpg'
	}];
	
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname));

app.get('/employee', function (req, res) {
	if (response.firstName && response.id && response.flag) { // delete
	console.log('==============Entering inside for delete===============');
		for(var i=0; i<employee.length; i++) {
			if(employee[i].id == response.id) {
				employee.splice( i, 1 );
			}
		}
	} else if (response.firstName && response.id) { //edit
		console.log('==============Entering inside for edit===============');
		for(var i=0; i<employee.length; i++) {
			if(employee[i].id == response.id) {
				employee[i] = response;
			}
		}
	} else if (response.firstName) { //add
	console.log('==============Entering inside for add===============');
		var maxID = Math.max.apply(null, employee.map(function(item) {
			return item.id;
		}));
		
		
		if (isFinite(maxID)) {
			response.id = maxID + 1;
		} else {			
			response.id = 1;
		}
		
		employee.push(response);	
	} else {
		console.log('======================PAGE ONLOAD======================');
	}

	console.log('Final Data: '+employee);
    response = {};
	res.send({ data : employee });
});

app.get('/productDetails', function (req, res) {
	res.send({ data : productDetails });
});

app.get('/fruitDetails', function (req, res) {
	res.send({ data : fruitDetails });
});

app.get('/dryfruitDetails', function (req, res) {
	res.send({ data : dryfruitDetails });
});

app.post('/employee/add', function (req, res) {
	response = req.body;
	res.send({ message : 'success' });
});

app.post('/employee/edit', function (req, res) {
	response = req.body;
	res.send({ message : 'success' });
});

app.post('/employee/delete', function (req, res) {
	response = req.body;
	response.flag = 'delete';
	res.send({ message : 'success' });
});


app.listen(PORT, function () {
  console.log('Server listening on '+PORT);
  console.log('__dirname '+__dirname);
  
});


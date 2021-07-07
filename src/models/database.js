const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/DogCatVotes', {useNewUrlParser: true});


const NumOfClicks = new mongoose.Schema({
	btnClicks: Number
})



const click = mongoose.model('click', NumOfClicks)
// This File Is Getting A ERROR

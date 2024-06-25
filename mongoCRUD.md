require('dotenv').config();

const mongoose = require('mongoose');

let personSchema = new mongoose.Schema(
  {
    name: String,
    age: Number,
    favoriteFoods: [String]
  }
);

let Person = mongoose.model("Person", personSchema);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const createAndSavePerson = (done) => {
  let document = new Person({
    name: 'Rashid khan',
    age: 20,
    favoriteFoods: ['Apple', 'Orange', 'Mango']
  });

  document.save((err, data) => {
    if (err) {
      done(null);
    }
    else {
      done(null, data);
    }
  });
};

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople,(err,data)=>{
  if(err){
    done(null);
  }  else {
    done(null , data);
  }
  });
};

const findPeopleByName = (personName, done) => {

  Person.find({name : personName},(err,data)=>{
    if(err){
      done(null)
    }else {
      done(null , data);
    }
  });

};

const findOneByFood = (food, done) => {
  Person.findOne({favoriteFoods:food},(err,data)=>{
    if(err){
      done(null);
    } else {
      done(null , data);
    }
  })
};

const findPersonById = (personId, done) => {
  Person.findById({_id:personId},(err,data)=>{
    if(err){
      done(null);
    } else {
      done(null, data);
    }
  });
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";
  Person.findById({_id:personId},(err,person)=>{
    if(err){
      done(null);
    }
    person.favoriteFoods.push(foodToAdd);
    person.save((err,person)=>{
      if(err){
        done(null);
      }
       else {
        done(null , person);
      }
    })

  })

};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;
  Person.findOneAndUpdate({name:personName},{new:true}, (err,person)=>{
    if(err){
      done(null);
    }
    person.age = ageToSet;
    done(null , person);
  })
};

const removeById = (personId, done) => {
  Person.findByIdAndDelete({_id:personId},(err,person)=>{
    if(err){
      done(null);
    } else {
      done(null , person);
    }
  })
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";
Person.remove({name:nameToRemove},(err,data)=>{
  if(err) {
    done(null)
  } else {
    done(null , data);
  }
})
};

const queryChain = (done) => {
  const foodToSearch = "burrito";
  Person.find({favoriteFoods:foodToSearch}).
  sort({name:1}).
  limit(2).select('-age').exec((err,data)=>{
    if(err){
      done(null);
    } else {
      done(null, data);
    }
  })
};
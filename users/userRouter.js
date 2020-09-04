const express = require('express');
const Users = require('./userDb');

const router = express.Router();

//WORKING
router.post('/', validateUser, (req, res) => {

  Users.insert(req.body)
    .then(user => {
      res.status(201).json({ user });
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: 'There was an error while saving the user to the database.' });
    });
});


router.post('/:id/posts', (req, res) => {



});


//WORKING
router.get('/', (req, res) => {
  Users.get()
    .then(users =>
      res.status(200).json(users))
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'The users information could not be retrieved.' })
    })
});

//WORKING without validateUserId
router.get('/:id', validateUserId, (req, res) => {

  Users.getById(req.params.id)
    .then(user => {
      res.status(200).json({ user });
    })
    .catch(err => {
      console.log(err);
      res.status().json({ message: 'There was an error retrieving the user info.' });
    });
});



router.get('/:id/posts', (req, res) => {
  // do your magic!
});

router.delete('/:id', (req, res) => {
  // do your magic!
});

router.put('/:id', (req, res) => {
  // do your magic!
});

//custom middleware

function validateUserId(req, res, next) {
  if (req.params.id == id) {
    next();
  } else if (req.params.id !== id) {
    res.status(400).json({ message: 'invalid user id' });
  };
};

function validateUser(req, res, next) {
  if (req.body) {
    next();
  } else if (!req.body.length) {
    res.status(400).json({ message: 'missing user data' });
  } else if (!req.body.name) {
    res.status(400).json({ message: 'missing required name field' })
  }
};


function validatePost(req, res, next) {
  // do your magic!
}

module.exports = router;

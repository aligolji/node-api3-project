const express = require('express');
const Users = require('./userDb');

const router = express.Router();

router.post('/', validateUser, (req, res) => {
  const { name } = req.body;
  const newUser = { name };


  Users.insert(newUser)
    .then(newUser => {
      res.status(201).json({ newUser });
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: 'There was an error while saving the user to the database.' });
    });
});

router.post('/:id/posts', (req, res) => {
  // do your magic!
});

router.get('/', (req, res) => {
  // do your magic!
});

router.get('/:id', (req, res) => {
  // do your magic!
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
  // do your magic!

  //store user object as req.user
  // //add to every request requiring user id
  // if (id is valid) {
  //   res.status(200).json({ 'something' })
  // } else {
  //   res.status(400).json({ message: 'invalid user id' });
  // }

}

function validateUser() {
  return (req, res, next) => {
    // add to 'router.post' request?
    if (req.body) {
      next();
    } else if (!req.body) {
      res.status(400).json({ message: 'missing user data' });
    } else if (!req.body.name) {
      res.status(400).json({ message: 'missing required name field' })
    }
  };
};

function validatePost(req, res, next) {
  // do your magic!
}

module.exports = router;

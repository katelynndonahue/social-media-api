const router = require('express').Router();

const {
    getUsers,
    createUser,
    getSingleUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend,
} = require('../../controllers/userController');

// api/users
router.route('/')
.get(getUsers)
.post(createUser);

// api/users by id/
router.route('/:id')
.get(getSingleUser)
.put(updateUser)
.delete(deleteUser);

router.route('/:userId/friends/:friendId')
.post(addFriend)
.delete(deleteFriend);

module.exports = router;

const express = require('express');
const router = express.Router();
const {
    getPeople,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson
} = require('../controller/people')
//we commented because there is an efficient way of writing this code
// router.get('/',getPeople)
// //post method
// router.post('/', createPerson)
// router.post('/postman', createPersonPostman)
// //put method
// router.put('/:id',updatePerson)
// //delete method
// router.delete('/:id',deletePerson)
// most preferable way
router.route('/').get(getPeople).post(createPerson);
router.route('/postman').post(createPersonPostman);
router.route('/:id').put(updatePerson).delete(deletePerson);
 
module.exports = router  
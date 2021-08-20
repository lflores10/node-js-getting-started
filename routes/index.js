var express = require('express');
var router = express();

const Insta = require('scraper-instagram');

// const AdminApi = require('./clases/instagram');


router.route('/').get(async (req, res) => {
    // res.redirect('..');
    // res.json({
    //     success: false,
    //     msj: 'Ocurrió un error'
    // });
    
    const InstaClient = new Insta();

    InstaClient.authBySessionId('199687519%3AHbmcnfomFQxgNX%3A16')
	.then(account => {
        res.json(account);
    })
	.catch(err => console.error(err));
});

router.route('/').post(async (req, res) => {
    var data = {};
    data = req.body; 
    var action = data.action;

    // 199687519%3AHbmcnfomFQxgNX%3A16
    const InstaClient = new Insta();

    InstaClient.authBySessionId('199687519%3AHbmcnfomFQxgNX%3A16')
	.then(account => {
        res.json(account);
    })
	.catch(err => console.error(err));

    // if ('token' in data) {

    //     db.model('roles').findOne({ _id: data.token }, (err, u) => {
    //         if (u) {
    //             var api;
                
    //             // switch (u.role) {
    //                 api = new AdminApi(db, u, data, req, res); 
    //                 // case "user" : api = new UserApi(db, u, data, res);  break;
    //                 // default:                        
    //                     // break;
    //             // }
                 
    //             if (action in api)
    //                 api[action]();
    //             else
    //         }
    //     });

    // } else {

    //     var User = db.model('roles');

    //     switch (action) {
    //         case 'register':
    //             if (data.email.trim().length > 3 && data.name.trim().length > 3 && data.pass.trim().length > 4) {

    //                 User.findOne({ email: data.email.trim() }, (err, u) => {
    //                     if (err) throw err;

    //                     if (u) {
    //                         res.json({
    //                             success: false,
    //                             msj: 'Ya existe una cuenta con este email'
    //                         });
    //                     } else {

    //                         var newRegister = new User({
    //                             name: data.name.trim(),
    //                             email: data.email,
    //                             pass: md5(data.pass)
    //                         })

    //                         newRegister.save((err) => {
    //                             if (err) {
    //                                 res.json({
    //                                     success: false,
    //                                     msj: 'Ocurrió un error'
    //                                 });
    //                             }
    //                             User.findOne({ email: data.email.trim() }, (err, u) => {
    //                                 if (err) throw err;
    //                                 u.token = u._id;
    //                                 res.json({
    //                                     success: true,
    //                                     msj: 'OK',
    //                                     user: u,
    //                                 });
    //                             });
    //                         })
    //                     }
    //                 })

    //             } else {
    //                 res.json({
    //                     success: false,
    //                     msj: 'Campos incompletos'
    //                 });
    //             }
    //             break;

    //         case 'login':

    //             User.findOne({
    //                     email: data.email.trim(),
    //                     pass: md5(data.pass.trim())
    //                     }, (err, u) => {
    //                 if (err) throw err;

    //                 if (u) {
    //                     u.token = u._id;
    //                     res.json({
    //                         success: true,
    //                         user: u,
    //                     });
    //                 } else {
    //                     res.json({
    //                         success: false,
    //                         msj: 'Usuario no registrado o Password Invalido'
    //                     });
    //                 }
    //             });

    //             break;
    //         default:
    //             res.json({
    //                 success: false,
    //                 msj: 'Access denied'
    //             });
    //             break;
    //     }
    // }
})



module.exports = router;
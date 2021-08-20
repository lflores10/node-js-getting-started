'use strict'

class InstagramApi {

    constructor(db,user,data,res){

        this.db = db;
        this.user = user;
        this.data = data;
        this.response = res;

    }

    // async getUserData() {

    //     var data = {}

    //     data['interets'] = await this.db.collection('interets').find({}).toArray();
    //     data['in_categories'] = await this.db.collection('interpretes.categories').find({}).toArray();
    //     data['in_tipos'] = await this.db.collection('interpretes.tiposrvs').find({}).toArray();
    //     data['notifications'] = await this.db.collection('notifications').find({ read:false, token: `${this.user._id}` }).toArray();

    //     return this.response.json({
    //         success:true,
    //         data: this.user,
    //         extra: data
    //     });
        

    // }

    // sendNotificationsByService(){
        
    //     var db = this.db;
    //     var response = this.response;

    //     db.collection('lsa.services').find({ pending: true }).toArray(async function(err, rows)  {
            
    //         var list = await db.collection('users').find({
    //             lsa: {
    //                 user_type:'2'
    //             },
    //         });
            
    //     });

    // }

    // registerLSARequest(){

    //     var response = this.response;
    //     this.data.pending = true;
    //     this.db.collection('lsa.services').insertOne(this.data, function(err, resp) {
            
    //         var request_id = resp.insertedId;
            
    //         /// send the response
    //         response.json({
    //             success: true,
    //             msj: 'OK',
    //             id: request_id,
    //         });

    //         // sending notifcations if exists
    //         this.sendNotificationsByService();


    //     });

    // }

    // updateFirebaseToken(){

    //     this.db.collection('users').updateOne({_id:this.user._id}, { $set : {'firebase_token':this.data.firebaseToken, 'token' : this.data.token}});
    //     this.response.json({
    //         success:false
    //     });

    // }

    // updateUserData(){

    //     this.db.collection('users').updateOne({_id:this.user._id}, { $set : this.data.userData }, (e,r)=>{

    //         this.db.collection('users').findOne({ _id: this.user._id }, (e1,r1)=> {

    //             this.response.json({
    //                 success:true,
    //                 user: r1
    //             });

    //         });

    //     });

    // }

    // getMenu() {

    //     this.db.collection('categories').find({status:'1'}).toArray((err, result)=>{

    //         if(err){
    //             this.response.json({
    //                 success:false,
    //                 data: []
    //             });
    //             return;
    //         }

    //         var list = [];

    //         var list_lsa = [

    //             {
    //                 title:'Solicitar',
    //                 module: 'lsa:request'
    //             },
    //             {
    //                 title:'Mis solicitudes',
    //                 module: 'lsa:list:user'
    //             },
    //             {
    //                 title:'Notificaciones',
    //                 module: 'lsa:list:notifications'
    //             },

    //         ];

    //         if(this.user.lsa){

    //             if(this.user.lsa.user_type=='2'){

    //                 list_lsa = [
    //                     {
    //                         title:'Solicitudes',
    //                         module: 'lsa:list:interpreter'
    //                     },
    //                     {
    //                         title:'Notificaciones',
    //                         module: 'lsa:list:notifications'
    //                     },
    //                 ];

    //             }

    //             list.push({
    //                 _id: Date.now,
    //                 title:'LSA',
    //                 title_short : 'LSA',
    //                 posts:[],
    //                 subitems: list_lsa
    //             });

    //         }

    //         for(let i in result){

    //             this.db.collection('posts').find({
    //                 categories:{$all: [`${result[i]._id}`]},
    //                 status:'1'
    //             }).limit(10).toArray((err1,res1)=>{
                    
    //                 result[i]['posts'] = [];
    //                 if(res1.length>0)
    //                     result[i]['posts'] = res1;
                    
    //                 list.push(result[i]);
    //                 if(i==(result.length-1)){
    //                     this.response.json({
    //                         success:true,
    //                         data: list
    //                     });
    //                 }

    //             });

    //         }

    //         if(result.length==0){

    //             this.response.json({
    //                 success:true,
    //                 data: list
    //             });

    //         }

    //     });

    // }

    // getLocations(){

    //     this.response.json({
    //         success:false,
    //         data: []
    //     });

    // }

}

module.exports = InstagramApi ;

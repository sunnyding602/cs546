const userCollection = require("./userCollection");
const bcrypt = require("bcrypt");
let exportedMethods = {
    getAllUsers() {
        return userCollection().then((users) => {
            return users
                .find()
                .toArray();
        });
    },
    getUser(id) {
        return userCollection().then((users) => {
            return users.findOne({_id: id})
        });
    },
    createUser(id, sessionId, pwd, name) {
        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(pwd, salt);
        
        return userCollection().then((users) => {
            return users.insertOne({_id: id, sessionId: sessionId, hashedPassword: hash, profile: {name}});         
        }).then((user) => {
            return this.getUser(user.insertedId);
        }).catch((err)=>{
            console.error(err);
            return Promise.reject(err);
        });
    },
    findOneUser(uname,pwd) {
        if(!uname || !pwd) {
            return Promise.reject("Provide valid username and password");
        }
        
        return userCollection().then((users)=> {
            
            return users.findOne({profile:{name: uname}});
        }).then((user)=> {
            
            // if(!user.password || user.password == null)
            //     return Promise.reject("Wrong");
            if(bcrypt.compareSync(pwd, user.hashedPassword)) {
                
                return user;
            }else {
                
                return Promise.reject ("wrong password");
            }
        });  
    },

    updateSessionId(id, sessionId) {
        let userId = id;
       
        return userCollection().then((users)=> {
            return users.updateOne({_id: userId}, {$set:{sessionId:sessionId}}).then(()=> {
                return this.getUser(userId);
            })
        });

        
    },
    // updateUserInfo(id,updateinfo) {
    //     let userId = id;
    //     let updateprofile = {info:updateinfo};
       
    //     return userCollection().then((users)=> {
    //         return users.updateOne({_id: userId},{$set:{profile: updateprofile}}).then(()=> {
    //             return this.getUser(userId); 
    //         });
    //     });
    // },

    deleteUser(id) {
        let userId = id;
        return userCollection().then((users)=>{
            
            return users.deleteOne({_id:id}).then((execResult, err)=>{
               if(err == null && execResult.deletedCount == 1) {
                    console.log("delete success");
                    return true;
                }else {
                    return Promise.reject ("cannot delete item" + err);
                }
            });
        });
    }
}

module.exports = exportedMethods;
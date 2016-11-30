/**
 * Created by Amit on 30/11/2016.
 */

var getNode = function(s){
    return document.querySelector(s);
}

username = getNode('.chat-name');
username.addEventListener('keydown',function(event){
    name = this.value;
        //set user name and password as typed in .chat-name
        var params = {'login': name,'password':name};
        if (event.which ===13 ){
            console.log('clicked');
            QB.createSession(function (err,result) {
                console.log('seassion created',err,result);
            })
            QB.users.create(params,function(err,user){
               if(user){
                   console.log("registration success");
                   QB.login(params,function (err,user) {
                      if(user){
                          console.log('login success');
                          this.style.visibility="hidden";
                      } else{
                          console.log('login failure');
                      }
                   });
               } else{
                   console.log('registration error');
               }
            });
        }
});

import User from 'discourse/models/user';
//import { default as computed, observes } from 'ember-addons/ember-computed-decorators';

const currentUsername = Discourse.User.current().username; 

var tokenID = "HeidiTest\u003Aheiditest123";

var url2 = "https://www.c-labs.com/activate-axoom/?" + tokenID + "\u0026" + "currentUser=" + currentUsername;

export default {
  actions: {
    toggleBody() {
      this.toggleProperty('isShowingBody');
    },
 callAPI(){
 var tokenID = "HeidiTest\u003Aheiditest123";
        var flag;//keeps track if a call is valid
        var activationKey = document.getElementById('activationText').value;
        var url = url2 + "\u0026" + "ark=" + activationKey;
        fetch(url)
        .then(response => {
            if (response.ok) {
            flag = true;             
            return response.json();
            }
            else{
                flag = false; 
            }
        })
        .then(data => {
            if (flag == false){
                document.getElementById('activationText').value = ""; //clears out the value of text input
                document.getElementById('output').innerHTML = "activation site is currently not available";
                return Promise.reject('something went wrong!')
            }
            else{
                document.getElementById('activationKeyUsed').innerHTML = activationKey; 
                var activationOutput = document.getElementById('output');
                if (data.ActivationKey){
                activationOutput.innerHTML = data.ActivationKey;
                }
                else {
                    activationOutput.innerHTML = "wrong key input"; 
                }
            }
        })
        .catch(error => 
        {
            console.log('error is', error);
            document.getElementById('activationText').value = ""; //clears out the value of text input
            document.getElementById('output').innerHTML = "activation site is currently not available";
            return Promise.reject('something went wrong!')
        });
}
}
};

//you will need to put your password, State, LGA, email, 
import React, {Component} from 'react';
import 'axios'
import Axios from 'axios';

class Signup extends Component{
    constructor(props){ 
        super(props)
        this.state ={

        }

    }

    fetcher(e) {
        e.preventDefault() 
        Axios.get('http://locationsng-api.herokuapp.com/api/v1/lgas')
        .then(res=>{
            console.log(res.data)
        })
        
    }

    render(){
        return(
            <div className="container">
            <h2 className="pt-3 text-center">Login</h2>
            <form>
                <div class="input-group mb-3 input-group-sm">
                    <div class="input-group-prepend">
                        <span class="input-group-text">Email Address</span>
                    </div>
                    <input type="email" class="form-control" id="Input1" placeholder="name@example.com"/>
                </div>

                <div class="input-group mb-3 input-group-sm">
                    <div class="input-group-prepend">
                        <span class="input-group-text">State</span>
                    </div>
                    <input type="text" class="form-control" id="Input1" onFocus={fetcher} placeholder="State"/>
                </div> 

                <div class="input-group mb-3 input-group-sm">
                    <div class="input-group-prepend">
                        <span class="input-group-text">LGA</span>
                    </div>
                    <input type="text" class="form-control" id="Input1" onFocus={fetcher} placeholder="Local Government Area"/>
                </div> 

                <div class="input-group mb-3 input-group-sm">
                    <div class="input-group-prepend">
                        <span class="input-group-text">Password</span>
                    </div>
                    <input type="password" class="form-control" id="Input1" placeholder="Password"/>
                </div>
            </form> 
        </div>
        )
    }

}
export default Signup

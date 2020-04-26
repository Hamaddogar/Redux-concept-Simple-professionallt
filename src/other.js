import React from 'react';
import {ALL_DATA}  from '../src/store/action/actionTypes'
import {store} from '../src/store/store'
import { connect } from 'react-redux';
class Other extends React.Component {

    state = {
       userName: '',
        Passwordname: ''
    }

    userName = (e) => {
        this.setState({  userName: e.target.value })
    }


    fatherName = (e) => {
        this.setState({ Passwordname: e.target.value })
    }


    myfunct = () => {
        let  getstate  = this.state
        store.dispatch({
           
            type: ALL_DATA,
            payload:  getstate
        })


    }

    render() {
         setTimeout(() => {
             
             console.log(this.props)
         }, 5000);


        return (
            <div>

                <div>



                    <input placeholder="User Name" onChange={this.userName} />
                    <input type="password" placeholder="password" onChange={this.fatherName} />

                    <button onClick={this.myfunct}>Submit</button>




                </div>
            </div>

        )

    }




}



 const mapStateToProps = state => ({ datared: state })

 export default (connect(mapStateToProps)(Other));
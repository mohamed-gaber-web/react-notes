import React, { Component } from 'react';
import { add_Note, remove_Note, clear_Notes } from './actions';
import { connect } from "react-redux";
import moment from 'moment';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


class App extends Component {

    state = {
        title: "",
        date: new Date()
    }
    render() {
        return (
            <div className="container">
                {/* <img src="" /> */}

                <div className="form">
                    <h3> Write Anything Please ? </h3>

                    <div className="form-group">
                        <input
                            type="text"
                            value={this.state.title}
                            className="form-control"
                            placeholder="WRITE ANYTHING"
                            onChange={(e) => this.setState({ title: e.target.value })}
                        />
                    </div>

                    <div className="form-group">

                        <DatePicker
                            selected={this.state.date}
                            onChange={date => this.setState({ date })}
                            showTimeSelect
                            timeFormat="HH:mm"
                            timeCaption="time"
                            dateFormat="MMMM d, yyyy h:mm aa"
                            value={this.state.date}
                            className="form-control"
                            value="Enter Date"
                        />
                    </div>

                    <button
                        className="btn btn-primary btn-block"
                        onClick={
                            () => {
                                this.props.add_Note(this.state.title, this.state.date)
                                this.setState({ title: '', date: '' })
                            }
                        }>
                        Add Note
                    </button>

                    <button
                        className="btn btn-danger btn-block"
                        onClick={this.props.clear_Notes}>
                        Clear All Notes
                 </button>
                </div>

                <div className="reminders">
                    {
                        this.props.Reminders ?

                            this.props.Reminders.map(item => {
                                return (
                                    <div className='item' key={item.id}>
                                        <h3> {item.title} </h3>
                                        <span> {moment(new Date(item.date)).fromNow()} </span>
                                        <button
                                            className="close-b"
                                            type="button"
                                            onClick={() => this.props.remove_Note(item.id)}>
                                                X
                                        </button>
                                    </div>
                                );
                            })
                            : null}
                </div>

            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {

        Reminders: state
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         add_Note: () => dispatch(add_Note())
//     }
// }

export default connect(mapStateToProps, { add_Note, remove_Note, clear_Notes })(App);


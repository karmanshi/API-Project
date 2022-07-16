import React from "react";
import TestService from "../services/TestService";
import { Navigate } from "react-router-dom";

class ListData extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [],
            redirect: null
        }
    }
    componentWillMount() {
        this.GetData();
    }

    GetData = async () => {
        this.setState({ IsLoading: true })
        await TestService.GetData()
            .then(response => {
                this.setState({
                    data: response.data
                });
                localStorage.setItem('data', JSON.stringify(response.data))
            })
            .catch(e => {
                console.log(e);
            });
    }
    SummaryButtonClick = async (e) => {
        this.setState({ redirect: '/Summary?id=' + e.target.id })
    }
    render() {
        if (this.state.redirect) {
            return <Navigate to={this.state.redirect} />
        }
        return (
            <div>
                <div className="card" style={{ width: '100%' }}>
                    <div className="card-body">
                        <h5 className="card-title">List</h5>
                        <table className="table" width="100%" >
                            <thead className="header">
                                <tr >
                                    <th>Sl. No.</th>
                                    <th>Name</th>
                                    <th>Type</th>
                                    <th>Language</th>
                                    <th>Genres</th>
                                    <th>Status</th>
                                    <th>Runtime</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {

                                    this.state.data?.map((item, index) => (
                                        <tr key={index}>
                                            <td >
                                                {index + 1}.
                                            </td>
                                            <td >
                                                {item.show.name}
                                            </td>
                                            <td>
                                                {item.show.type}
                                            </td>
                                            <td>
                                                {item.show.language}
                                            </td>
                                            <td>
                                                {item.show.genres.join(', ')}
                                            </td>
                                            <td>
                                                {item.show.status}
                                            </td>
                                            <td>
                                                {item.show.runtime}
                                            </td>
                                            <td>
                                                <input id={item.show.id} type="button" onClick={this.SummaryButtonClick} value="Summary"></input>
                                            </td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}
export default ListData;
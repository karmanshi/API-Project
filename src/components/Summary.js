import React from "react";
import * as qs from 'query-string';
import { Navigate } from "react-router-dom";
class Summary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Item: { show: {} },
            redirect: null
        }
    }
    componentDidMount() {
        const parsed = qs.parse(window.location.search);
        var data = localStorage.getItem('data');
        this.setState({ Item: JSON.parse(data).filter(x => x.show.id == parseInt(parsed.id))[0] })
    }
    BackButtonClick = async (e) => {
        this.setState({ redirect: '/' })
    }
    render() {
        if (this.state.redirect) {
            return <Navigate to={this.state.redirect} />
        }
        return (
            <div>
                <div className="card" style={{ width: '100%' }}>
                    <div className="card-body">
                        <h5 className="card-title">Summary</h5>
                        <table>
                            <tr>
                                <td>
                                    Name:
                                </td>
                                <td>
                                    {this.state.Item.show.name}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Type:
                                </td>
                                <td>
                                    {this.state.Item.show.type}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Language:
                                </td>
                                <td>
                                    {this.state.Item.show.language}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Genres:
                                </td>
                                <td>
                                    {this.state.Item.show.genres?.join(', ')}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Status:
                                </td>
                                <td>
                                    {this.state.Item.show.status}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Runtime:
                                </td>
                                <td>
                                    {this.state.Item.show.runtime}
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={2}>
                                    <input type="button" onClick={this.BackButtonClick} value="Back"></input>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}
export default Summary;
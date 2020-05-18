import React, {Component, Fragment} from "react";
import "./Issue.css"
import AppUrls from "../../../AppUrls";

export  default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            issue:{}
        }
    }

    async componentDidMount() {
        const {match} = this.props;
        let issue_url_arr = match.url.split("/");
        const issue = await (await fetch(AppUrls.get_issues_url() + `/${issue_url_arr[2]}`)).json()

        this.setState({issue});
    }

    render() {
        const {issue} = this.state;
        if(issue.id) {
            const {comments} = issue;
            let comments_list = comments.map(({id, description, user_name}) => (
                <div key={id} className="comment-desc create-margin">
                    <div className="comment-heading" ><span>Commented by <span className="comment-user"> {user_name} </span> </span></div>
                    <p className="content-pad" >{description}</p>
                </div>
            ))
            return (
                <Fragment>
                    <div>
                        <h1>{issue.title} <span> #{issue.id}</span></h1>
                    </div>
                    <div>
                        <span>{issue.created_by_user.user_name} </span> opened this issue <span>{issue.time_past} ago</span>
                        <span> {issue.comments.length} comments </span>
                    </div>
                    <hr/>
                    <div className="row" >
                        <div className="col-md-8">
                            <p className="issue-desc content-pad">
                                {issue.description}
                            </p>
                        </div>
                    </div>
                    <div className="row" >
                        <div className="col-md-8">
                            <div>
                                {comments_list}
                            </div>
                        </div>
                    </div>
                </Fragment>
            );
        }else{
            return <Fragment></Fragment>
        }
    }
}

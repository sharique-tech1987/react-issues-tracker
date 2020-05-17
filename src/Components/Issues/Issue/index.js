import React, {Component, Fragment} from "react";
import "./Issue.css"

export  default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            issue:{}
        }
    }

    async componentDidMount() {
        const {match} = this.props;
        const issue = await (await fetch(`http://localhost:3004${match.url}`)).json()

        this.setState({issue});
    }

    render() {
        const {issue} = this.state;
        // console.log("======= Test");
        // console.log(issue);
        if(issue.id) {
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
                            <p className="issue-desc">
                                {issue.description}
                            </p>
                        </div>
                    </div>
                </Fragment>
            );
        }else{
            return <Fragment></Fragment>
        }
    }
}

// export default Issue;


// export default ({match}) => (
//     console.log("=======My") ||
//         console.log(match) ||
//     <Fragment>
//     </Fragment>
// )
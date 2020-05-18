import React,{Fragment} from 'react';
import {Link, Route} from "react-router-dom";
import "./Issues.css"

export default ({list:issues_list, issues_status}) => (
    <Fragment>
        <h2>Issues</h2>

        <hr/>

        <div className="btn-group">
            <button type="button" className="btn btn-default active">{issues_status.open} Open</button>
            <button type="button" className="btn btn-default">{issues_status.closed} Closed</button>
        </div>

        <div className="padding"></div>

        <div className="row">
            <div className="col-md-12">
                <ul className="list-group fa-padding">
                    {
                        issues_list.map(issue => (
                            <li key={issue.id} className="list-group-item" data-toggle="modal" data-target="#issue">
                                <div className="media">
                                    <i className={`fa ${issue.category.icon_class} pull-left`}></i>
                                    <div className="media-body">
                                        <Link to={`/issues/${issue.id}`}>
                                            <strong>{issue.title}</strong>
                                        </Link>
                                        {
                                            issue.priorities.map(({id, class:cls, label}) => (
                                                <span key={id} className={`label label-${cls} priority-style`}>{label.toUpperCase()}</span>
                                            ))
                                        }
                                        <span className="number pull-right"># {issue.id}</span>
                                        <p className="info">Opened by <a href="#">{issue.created_by_user.user_name}</a> {issue.time_past} ago <i
                                            className="fa fa-comments"></i> <a href="#">{issue.comments.length} comments</a></p>
                                    </div>
                                </div>
                            </li>

                        ))
                    }


                </ul>




            </div>
        </div>






    </Fragment>
)



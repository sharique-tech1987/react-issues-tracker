import React,{Component, Fragment} from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import "./App.css"
import Issues from './Components/Issues'
import Issue from "./Components/Issues/Issue";
import AppUrls from "./AppUrls";

class App extends Component {
  state = {
    issues: [],
    issues_status: {}
  }

  async componentDidMount() {
    const issues = await (await fetch(AppUrls.get_issues_url())).json()
    const issues_status = await (await fetch(AppUrls.get_issues_status_url())).json()

    this.setState({issues, issues_status});
  }

  render() {
    const {issues, issues_status} = this.state;

    return (
        <BrowserRouter>
          <Fragment>
            <div className="container">
              <section className="content">
                <div className="row">
                  <div className="col-md-12">
                    <div className="grid support-content">
                      <div className="grid-body">
                        <Route exact path={`/`}  render={
                          (props) => <Issues {...props} list={issues} issues_status={issues_status} />
                        } />
                        <Route exact path={`/issues/:issueId`}  render={
                          (props) => <Issue {...props} />
                        } />

                      </div>


                    </div>
                  </div>
                </div>
              </section>
            </div>
          </Fragment>
        </BrowserRouter>
    );
  }
}

export default App;

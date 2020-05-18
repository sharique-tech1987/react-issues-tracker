class AppUrls{
    static base_url = "http://localhost:3004";

    static get_issues_url = () => this.base_url + "/issues";

    static get_issues_status_url = () => this.base_url + "/issues_status";
}

export default AppUrls;
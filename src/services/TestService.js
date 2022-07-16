import http from "../http-common";
class TestService {  
  async GetData() {   
    return await http.get("https://api.tvmaze.com/search/shows?q=all",);
  }   
}
export default new TestService()

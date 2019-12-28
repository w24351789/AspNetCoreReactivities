using Newtonsoft.Json;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;
using WebMVC.Infrastructure;
using WebMVC.Services.Interface;
using WebMVC.ViewModels;

namespace WebMVC.Services
{
    public class ActivitiesService : IActivitiesService
    {
        public HttpClient Client { get; }

        private readonly string _srviceBaseUrl;
        public ActivitiesService(HttpClient client)
        {
            Client = client;
            _srviceBaseUrl = "http://localhost:5000/api/activities";
        }

        

        /*public async Task<IEnumerable<Activity>> GetActivities()
        {
            var responseString = await Client.GetAsync("");

            responseString.EnsureSuccessStatusCode();
            
            using (var responseStream = await responseString.Content.ReadAsStreamAsync())
            {
                
                return await JsonSerializer.DeserializeAsync<IEnumerable<Activity>>(responseStream);
            }
        }*/
        public async Task<IEnumerable<Activity>> GetActivities()
        {
            var uri = API.Activity.GetActivities(_srviceBaseUrl);

            var responseString = await Client.GetStringAsync(uri);

            var response = JsonConvert.DeserializeObject<IEnumerable<Activity>>(responseString);

            return response;
            
        }

        public async Task<Activity> GetActivity(string id)
        {
            var uri = API.Activity.GetActivity(_srviceBaseUrl, id);
            var responseString = await Client.GetStringAsync(uri);

            var response = JsonConvert.DeserializeObject<Activity>(responseString);

            return response;
        }

        
    }
}

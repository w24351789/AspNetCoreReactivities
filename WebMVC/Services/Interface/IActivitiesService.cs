using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebMVC.ViewModels;

namespace WebMVC.Services.Interface
{
    public interface IActivitiesService
    {
        Task<IEnumerable<Activity>> GetActivities();
        Task<Activity> GetActivity(string Id);
        
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebMVC.Infrastructure
{
    public static class API
    {
        public static class Activity
        {
            public static string GetActivities(string baseUrl) => $"{baseUrl}";
            public static string GetActivity(string baseUrl, string Id) => $"{baseUrl}/{Id}";
            public static string CreateActivity(string baseUrl) => $"{baseUrl}";
        }
    }
}

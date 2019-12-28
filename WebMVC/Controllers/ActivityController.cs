using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebMVC.ViewModels;
using WebMVC.Services;

namespace WebMVC.Controllers
{
    public class ActivityController : Controller
    {
        private readonly ActivitiesService _activitiesService;

        public ActivityController(ActivitiesService activitiesService)
        {
            _activitiesService = activitiesService;
        }

        // GET: Activity
        public async Task<IActionResult> Index()
        {
            var activities = await _activitiesService.GetActivities();
            return View(activities);
        }

        // GET: Activity/Details/136cd7fe-511e-421c-b45d-f172c90264db
        public async Task<IActionResult> Details(string id)
        {
            var activity = await _activitiesService.GetActivity(id);
            return View(activity);
        }

        // GET: Activity/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Activity/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(IFormCollection collection)
        {
            try
            {
                // TODO: Add insert logic here

                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: Activity/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: Activity/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                // TODO: Add update logic here

                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: Activity/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: Activity/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                // TODO: Add delete logic here

                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }
    }
}
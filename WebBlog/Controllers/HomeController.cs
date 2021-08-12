using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using WebBlog.Models;

namespace WebBlog.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        Context dbBlog = new Context();

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            ViewBag.registro = dbBlog.Posts;
            return View();
        }


        public IActionResult Published(Post post)
        {
            Random random = new Random();
            post.Id = random.Next();
            post.Id = random.Next(0, 1000);
            post.Date = DateTime.UtcNow;
            dbBlog.Add(post);//add to bd
            int result = dbBlog.SaveChanges();

            return RedirectToAction(nameof(Index));
        }

        [Route("/Home/readMore/{idPost}")]
        public IActionResult ReadMore(int idPost)
        {

            ViewBag.Data = dbBlog.Posts.FirstOrDefault(x => x.Id == idPost);
            return View("Post");
            

        }
       
        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}

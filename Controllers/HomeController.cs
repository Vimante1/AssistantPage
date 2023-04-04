using AssistantPage.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace AssistantPage.Controllers
{
    
    public class HomeController : Controller
    {
        [Route("/assistant")]
        public ViewResult Home ()
        {
           
            return View();
        }
    }
}
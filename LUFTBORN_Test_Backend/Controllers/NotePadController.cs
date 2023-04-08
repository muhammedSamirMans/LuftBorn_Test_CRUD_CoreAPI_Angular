using LB_Domain.Models;
using LB_Service.IService.Notepad;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace LUFTBORN_Test_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NotePadController : ControllerBase
    {
        private readonly INotePadService notePadService;
        public NotePadController(INotePadService notePadService)
        {
            this.notePadService = notePadService;
        }   
        [HttpGet]
        [Route("GetAll")]
        public IActionResult GetAll()
        { 
            return Ok(notePadService.GetAll());
        }
        [HttpPost]
        [Route("GetById")]
        public IActionResult GetById([FromBody] int id)
        {
            return Ok(notePadService.GetById(id));
        }
        [HttpPost]
        [Route("Create")]
        public IActionResult Create([FromBody] NotePad notePad)
        {
            return Ok(notePadService.Create(notePad));
        }
        [HttpPost]
        [Route("Update")]
        public IActionResult Update([FromBody] NotePad notePad)
        {
            return Ok(notePadService.Update(notePad));
        }
        [HttpPost]
        [Route("Remove")]
        public IActionResult Remove([FromBody] int Id)
        {
            return Ok(notePadService.Remove(Id));
        }
    }
}
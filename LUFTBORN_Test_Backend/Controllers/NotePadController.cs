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
            List<NotePad> notePads = new List<NotePad>();
            try
            {
                notePads = notePadService.GetAll();
                return Ok(new 
                { 
                    Status = 200,
                    Message = "Success",
                    Response =  new {notePads} 
                });
            }
            catch
            {
                return Ok(new
                {
                    Status = 500,
                    Message = "Server Error",
                    Response = new { notePads }
                });
            }
           
        }
        [HttpPost]
        [Route("GetById")]
        public IActionResult GetById([FromBody] int id)
        {
            NotePad notePad = new NotePad();
            try
            {
                notePad = notePadService.GetById(id);
                return Ok(new
                {
                    Status = 200,
                    Message = "Success",
                    Response = new { notePad }
                });
            }
            catch
            {
                return Ok(new
                {
                    Status = 500,
                    Message = "Server Error",
                    Response = new { notePad }
                });
            } 
        }
        [HttpPost]
        [Route("Create")]
        public IActionResult Create([FromBody] NotePad notePad)
        {
            try
            {
                if (ModelState.IsValid)
                    if (notePadService.Create(notePad))
                        return Ok(new { Status = 200, Message = "Success", Response = new { data = true } });
                return Ok(new { Status = 403, Message = "Validation Error", Response = new { data = false } });
            }
            catch
            {
                return Ok(new 
                {
                    Status = 500,
                    Message = "Server Error",
                    Response = new { data = false }
                });
            } 
        }
        [HttpPost]
        [Route("Update")]
        public IActionResult Update([FromBody] NotePad notePad)
        {
            try
            {
                if (ModelState.IsValid)
                    if (notePadService.Update(notePad))
                        return Ok(new { Status = 200, Message = "Success", Response = new { data = true } });
                return Ok(new { Status = 403, Message = "Validation Error", Response = new { data = false } });
            }
            catch
            {
                return Ok(new
                {
                    Status = 500,
                    Message = "Server Error",
                    Response = new { data = false }
                });
            } 
        }
        [HttpPost]
        [Route("Remove")]
        public IActionResult Remove([FromBody] int Id)
        {
            try
            {
                if (Id > 0)
                    if (notePadService.Remove(Id))
                        return Ok(new { Status = 200, Message = "Success", Response = new { data = true } });
                return Ok(new { Status = 403, Message = "Validation Error", Response = new { data = false } });
            }
            catch
            {
                return Ok(new
                {
                    Status = 500,
                    Message = "Server Error",
                    Response = new { data = false }
                });
            } 
        }
    }
}
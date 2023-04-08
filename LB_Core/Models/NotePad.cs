using LB_Domain.Models.BaseEntity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LB_Domain.Models
{
    public class NotePad:BaseModel
    {
        [Required]
        public string Title { get; set; } = "";
        [Required]
        public DateTime Date { get; set; }
        [Required]
        public string Describtion { get; set; } = "";
    }
}

using LB_Domain.Models.BaseEntity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LB_Domain.Models
{
    public class NotePad:BaseModel
    {
        public string Title { get; set; } = "";
        public DateTime Date { get; set; }
        public string Describtion { get; set; } = "";
    }
}

using LB_Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LB_Service.IService.Notepad
{
    public interface INotePadService
    {
        public List<NotePad> GetAll();
        public NotePad GetById(int Id);
        public bool Create(NotePad notePad);
        public bool Update(NotePad notePad);
        public bool Remove(int Id);

    }
}

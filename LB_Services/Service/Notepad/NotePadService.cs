using LB_Domain.Models;
using LB_Repository.IRepository;
using LB_Service.IService.Notepad;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LB_Service.Service.Notepad
{
    public class NotePadService:INotePadService
    {
        private readonly INotePadRepository notePadRepository;
        public NotePadService(INotePadRepository notePadRepository)
        {
            this.notePadRepository = notePadRepository;
        }
        public List<NotePad> GetAll()
        {
            List<NotePad> result = notePadRepository.FindAll().OrderByDescending(n => n.Id).ToList();
            return result;
        }
        public bool Create(NotePad notePad)
        {
            try
            {
                notePad.CreationDate = DateTime.Now;
                notePad.ModifictionDate = DateTime.Now;
                notePad.IsDeleted = false;
                notePadRepository.Create(notePad);
                notePadRepository.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }

        public bool Update(NotePad notePad)
        {
            try
            {
                NotePad oldEnitity = GetById(notePad.Id); 
                notePad.ModifictionDate = DateTime.Now; 
                notePad.IsDeleted = oldEnitity.IsDeleted; 
                notePad.CreationDate = oldEnitity.CreationDate; 
                notePadRepository.Update(notePad);
                notePadRepository.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }
        public bool Remove(int id)
        {
            try
            {
                NotePad notePad = GetById(id);
                if (notePad == null)
                    return false;
                notePadRepository.Delete(notePad);
                notePadRepository.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }
        public NotePad GetById(int Id)
        {
            return notePadRepository.FindByCondition(n => n.Id == Id).FirstOrDefault();
        }
    }
}

using LB_Domain.Models;
using LB_Repository.Context;
using LB_Repository.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LB_Repository.Repository
{
    public class NotePadRepository:RepositoryBase<NotePad>, INotePadRepository
    {
        private readonly ApplicationDbContext _context;
        public NotePadRepository(ApplicationDbContext context) : base(context)
        {
            _context = context;
        }


    }
}

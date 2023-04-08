using LB_Repository.Context;
using LB_Repository.IRepository;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace LB_Repository.Repository
{
    public abstract class RepositoryBase<T> : IRepositoryBase<T> where T : class
    {
        protected ApplicationDbContext ApplicationDbContext { get; set; }
        protected RepositoryBase(ApplicationDbContext applicationDbContext)
        {
            ApplicationDbContext = applicationDbContext;
        }
        public IQueryable<T> FindAll() => ApplicationDbContext.Set<T>().AsNoTracking();
        public IQueryable<T> FindByCondition(Expression<Func<T, bool>> expression) => ApplicationDbContext.Set<T>().Where(expression).AsNoTracking();
        public void Create(T entity) => ApplicationDbContext.Set<T>().Add(entity);
        public void Update(T entity) => ApplicationDbContext.Set<T>().Update(entity);
        public void Delete(T entity) => ApplicationDbContext.Set<T>().Remove(entity);
        public void SaveChanges() => ApplicationDbContext.SaveChanges(); 
    }
}

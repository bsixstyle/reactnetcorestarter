using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Entities;
using WebApi.Helpers;

namespace WebApi.Services
{
    public interface ISupplierSerivce
    {
        IEnumerable<Supplier> GetSupplier();
        Task<Supplier> GetById(string id, string userId);
        Task<Supplier> Create(Supplier supplier);
        Task<Supplier> Update(Supplier supplier);
        Task Delete(string id, string userId);
    }
    public class SupplierSerivce : ISupplierSerivce
    {
        private readonly DataContext _context;

        public SupplierSerivce(DataContext context)
        {
            _context = context;
        }

        async Task<Supplier> ISupplierSerivce.Create(Supplier supplier)
        {
            _context.Add(supplier);
            await _context.SaveChangesAsync();
            return supplier;
        }

        async Task ISupplierSerivce.Delete(string id, string userId)
        {
            var _supplier = await GetSupplierById(id, userId);

            if (_supplier != null)
            {
                _context.Remove(_supplier);
                await _context.SaveChangesAsync();
            }
        }

        async Task<Supplier> ISupplierSerivce.GetById(string id, string userId)
        {
            return await GetSupplierById(id, userId);
        }

        IEnumerable<Supplier> ISupplierSerivce.GetSupplier()
        {
            return _context.Supplier;
        }

        async Task<Supplier> ISupplierSerivce.Update(Supplier supplier)
        {
            _context.Entry(supplier).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return supplier;
        }

        private async Task<Supplier> GetSupplierById(string id, string userId)
        {
            return await _context.Supplier.FirstOrDefaultAsync(o => o.Id == id && o.UserId == userId);
        }

    }
}

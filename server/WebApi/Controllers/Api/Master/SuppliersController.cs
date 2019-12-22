using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApi.Entities;
using WebApi.Helpers;

namespace WebApi.Controllers.Api.Master
{
    [Route("[controller]")]
    [Authorize]
    [ApiController]
    public class SuppliersController : ControllerBase
    {
        private readonly DataContext _context;

        public SuppliersController(DataContext context)
        {
            _context = context;
        }

        // GET: api/Suppliers
        //[HttpGet]
        //public async Task<ActionResult<IEnumerable<Supplier>>> GetSupplier([FromQuery]Parameters parameters)
        //{
        //    var suppliers = _context.Supplier.AsQueryable();
        //    var total = await suppliers.CountAsync();
        //    int skip = (parameters.PageNo - 1) * parameters.PageSize;

        //    if (!string.IsNullOrEmpty(parameters.Filter))
        //    {
        //        suppliers = suppliers.Where(o => o.Name.ToLower().Trim().Equals(parameters.Filter));
        //    }

        //    var _suppliers = await suppliers
        //        .OrderBy(c => c.Id)
        //        .Skip(skip)
        //        .Take(parameters.PageSize)
        //        .ToListAsync();

        //    return Ok(new PagedResult<Supplier>(_suppliers, parameters.Filter, parameters.PageNo, parameters.PageSize, total));
        //}

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Supplier>>> GetSupplier(string filter, int? totalRendered)
        {
            var _supplier = _context.Supplier.Where(o => o.UserId == User.Identity.Name).AsQueryable();

            _supplier = (string.IsNullOrEmpty(filter)) ? _supplier : _supplier.Where(o => o.Name.ToLower().Trim().Contains(filter.ToLower().Trim()));
            _supplier = (totalRendered == null) ? _supplier.Take(10) : _supplier.Skip(totalRendered.Value).Take(10);

            return await _supplier.ToListAsync();
        }

        // GET: api/Suppliers/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Supplier>> GetSupplier(string id)
        {
            var supplier = await _context.Supplier.FindAsync(id);

            if (supplier == null)
            {
                return NotFound();
            }

            return supplier;
        }

        // PUT: api/Suppliers/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSupplier(string id, Supplier supplier)
        {
            if (id != supplier.Id)
            {
                return BadRequest();
            }

            _context.Entry(supplier).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SupplierExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Suppliers
        [HttpPost]
        public async Task<ActionResult<Supplier>> PostSupplier(Supplier supplier)
        {
            _context.Supplier.Add(supplier);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSupplier", new { id = supplier.Id }, supplier);
        }

        // DELETE: api/Suppliers/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Supplier>> DeleteSupplier(string id)
        {
            var supplier = await _context.Supplier.FindAsync(id);
            if (supplier == null)
            {
                return NotFound();
            }

            _context.Supplier.Remove(supplier);
            await _context.SaveChangesAsync();

            return supplier;
        }

        private bool SupplierExists(string id)
        {
            return _context.Supplier.Any(e => e.Id == id);
        }
    }
}

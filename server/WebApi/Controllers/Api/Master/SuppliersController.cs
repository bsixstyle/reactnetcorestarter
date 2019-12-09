using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using WebApi.Entities;
using WebApi.Helpers;
using WebApi.Services;

namespace WebApi.Controllers.Api.Master
{
    [Route("[controller]")]
    [ApiController]
    [Authorize]
    public class SuppliersController : ControllerBase
    {
        private ISupplierSerivce _supplier;

        public SuppliersController(ISupplierSerivce supplier)
        {
            _supplier = supplier;
        }

        // GET: /Suppliers
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Supplier>>> GetSupplier()
        {
            var suppliers = _supplier.GetSupplier().AsQueryable();
            return await suppliers.ToListAsync();
        }

        // GET: /Suppliers/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Supplier>> GetSupplier(string id)
        {
            var supplier = await _supplier.GetById(id, User.Identity.Name);

            if (supplier == null)
            {
                return NotFound();
            }

            return supplier;
        }

        // PUT: /Suppliers/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSupplier(string id, Supplier supplier)
        {
           
            if (id != supplier.Id)
            {
                return BadRequest();
            }

            try
            {
                // can add additional security 

                if (User.Identity.Name == supplier.UserId)
                {
                    await _supplier.Update(supplier);
                }
            }
            catch (AppException ex)
            {
                return BadRequest(new { message = ex.Message });
            }

            return Ok();
        }

        // POST: /Suppliers
        [HttpPost]
        public async Task<ActionResult<Supplier>> PostSupplier(Supplier supplier)
        {
            if (User.Identity.Name == supplier.UserId)
            {
                await _supplier.Create(supplier);
            }               
            return CreatedAtAction("GetSupplier", new { id = supplier.Id }, supplier);
        }

        // DELETE: /Suppliers/5
        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteSupplier(string id)
        {
            try
            {
                await _supplier.Delete(id, User.Identity.Name);
            }
            catch (AppException ex)
            {
                return BadRequest(new { message = ex.Message });
            }


            return Ok();
        }
    }
}

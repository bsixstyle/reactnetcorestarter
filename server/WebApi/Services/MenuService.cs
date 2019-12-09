using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Entities;
using WebApi.Helpers;

namespace WebApi.Services
{
    public interface IMenuService
    {
        Task<List<Menu>> GetMenuByRoleId(string roleId);
    }

    public class MenuService : IMenuService
    {
        private readonly DataContext _context;

        public MenuService(DataContext context)
        {
            _context = context;
        }

        async Task<List<Menu>> IMenuService.GetMenuByRoleId(string roleId)
        {
            var _menu = await _context.RoleDetail.Where(o => o.RoleId == roleId).Select(o => o.Menu).OrderBy(o => o.Index).ToListAsync();
            return _menu;
        }
    }
}

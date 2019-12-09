using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Entities;

namespace WebApi.Helpers
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }

        public DbSet<Menu> Menu { get; set; }
        public DbSet<Role> Role { get; set; }
        public DbSet<RoleDetail> RoleDetail { get; set; }
        public DbSet<Subscription> Subscription { get; set; }
        public DbSet<SubscriptionType> SubscriptionType { get; set; }
        public DbSet<Supplier> Supplier { get; set; }
}
}
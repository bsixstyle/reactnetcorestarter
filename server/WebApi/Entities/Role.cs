using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Entities
{
    public class Role
    {
        [Key]
        [StringLength(36)]
        public string Id { get; set; }


        [StringLength(36)]
        [Required]
        public string Name { get; set; }

        public List<RoleDetail> Details { get; set; }
    }
}

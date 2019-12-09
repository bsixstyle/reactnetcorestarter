using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Entities
{
    public class Menu
    {
        [StringLength(36)]
        [Key]
        public string Id { get; set; }


        [StringLength(36), MinLength(3)]
        [Required]
        public string Name { get; set; }


        [StringLength(128), MinLength(3)]
        [Required]
        public string Action { get; set; }

        [ForeignKey("Parrent")]
        [StringLength(36)]
        public string ParentId { get; set; }
        public Menu Parent { get; set; }

        [Range(0, 999)]
        public int Index { get; set; }
    }
}

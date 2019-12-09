using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApi.Entities
{
    public class RoleDetail
    {
        [Key]
        [StringLength(36)]
        public string Id { get; set; }

        [ForeignKey("Role")]
        [StringLength(36)]
        [Required]
        public string RoleId { get; set; }
        public Role Role { get; set; }


        [ForeignKey("Menu")]
        [StringLength(36)]
        [Required]
        public string MenuId { get; set; }
        public Menu Menu { get; set; }
    }
}
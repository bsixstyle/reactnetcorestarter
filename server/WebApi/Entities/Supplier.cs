using System.ComponentModel.DataAnnotations;

namespace WebApi.Entities
{
    public class Supplier
    {
        [StringLength(36)]
        [Key]
        public string Id { get; set; }

        [StringLength(36)]
        public string Name { get; set; }

        [StringLength(36)]
        [DataType(DataType.PhoneNumber)]
        public string Phone { get; set; }

        [StringLength(360)]
        public string Address { get; set; }

        [StringLength(36)]
        public string UserId { get; set; }
    }
}

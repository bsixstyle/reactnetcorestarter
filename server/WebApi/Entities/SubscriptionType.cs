using System.ComponentModel.DataAnnotations;

namespace WebApi.Entities
{
    public class SubscriptionType
    {
        [Key]
        [StringLength(36)]
        public string Id { get; set; }

        [StringLength(36)]
        [Required]
        public string Name { get; set; }

        [Range(1, 12)]
        [Required]
        public int MonthInterval { get; set; }
    }
}
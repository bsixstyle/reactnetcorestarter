using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Entities
{
    public class Subscription
    {
        [Key]
        [StringLength(36)]
        public string Id { get; set; }

        [StringLength(36)]
        [Required]
        public string Name { get; set; }

        [Required]
        [Range(1, 9999)]
        public int Limit { get; set; }


        [ForeignKey("Role")]
        [StringLength(36)]
        [Required]
        public string RoleId { get; set; }
        public Role Role { get; set; }

        [ForeignKey("SubscriptionType")]
        [Required]
        public string SubscriptionTypeId { get; set; }

        public SubscriptionType SubscriptionType { get; set; }
    }
}

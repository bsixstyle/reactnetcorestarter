using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Entities
{
    public class User
    {
        [Key]
        [StringLength(36)]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public string Id { get; set; }

        [StringLength(36)]
        public string UserName { get; set; }
        

        [StringLength(36)]
        public string FirstName { get; set; }

        [StringLength(36)]
        public string LastName { get; set; }

        [StringLength(36)]
        public string ParrentId { get; set; }

        [ForeignKey("Subscription")]
        [StringLength(36)]
        public string SubscriptionId { get; set; }
        public Subscription Subscription { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
    }
}

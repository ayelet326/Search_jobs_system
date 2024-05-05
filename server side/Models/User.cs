using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace JobSearch.Models;
public class User
{
    [Key]
    public int UserId { get; set; }
    [Required]
    [MaxLength(50)]
    public string? UserName { get; set; }
    [Required]
    [MaxLength(50)]
    public string? Password { get; set; }
    [Required]
    [ForeignKey("JobFields")]
    public int? JobFieldId { get; set; }

    [Required]
    public int? CVsSentCount{ get; set; } = 0;
    [Required]
    public List<int>? IdJobsCvsSent{ get; set; }

}
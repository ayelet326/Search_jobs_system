using System.ComponentModel.DataAnnotations;

namespace JobSearch.Models;
public class JobField
{
    [Key]
    public int JobFieldId { get; set; }
    [Required]
    [MaxLength(50)]
    public string? JobFieldName { get; set; }
}
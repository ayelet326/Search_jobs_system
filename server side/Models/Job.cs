using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace JobSearch.Models;
public class Job
{
    [Key]
    public int JobId { get; set; }
    [Required]
    [MaxLength(50)]
    public string? JobName { get; set; }
    [Required]
    [ForeignKey("JobFields")]
    public int? JobFieldId { get; set; }
    [Required]
    public int? HouresScope { get; set; }
    [Required]
    [MaxLength(50)]
    public string? Area { get; set; }
    [Required]
    public List<string>? Requirements { get; set; }
    [Required]
    public Boolean? HomeWorking  { get; set; }
}


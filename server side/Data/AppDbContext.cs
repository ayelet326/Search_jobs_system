using JobSearch.Models;
using Microsoft.EntityFrameworkCore;
namespace JobSearch.Data;
public class AppDbContext : DbContext
{
    public AppDbContext(){}
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
    public DbSet<JobField> JobFields { get; set; }
    public DbSet<User> Users { get; set; }
    public DbSet<Job> Jobs { get; set; }
}
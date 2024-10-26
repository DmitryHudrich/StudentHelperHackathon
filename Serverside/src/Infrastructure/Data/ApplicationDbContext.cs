using System.Reflection;
using StudentHelper.Application.Common.Interfaces;
using StudentHelper.Domain.Entities;
using StudentHelper.Infrastructure.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace StudentHelper.Infrastructure.Data;

public class ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : IdentityDbContext<ApplicationUser>(options), IApplicationDbContext {
    public DbSet<Branch> Branches { get; set; } = null!;
    public DbSet<TopicContact> Contacts { get; set; } = null!;
    public DbSet<Topic> Topics { get; set; } = null!;
    public DbSet<University> Universities { get; set; } = null!;

    protected override void OnModelCreating(ModelBuilder builder) {
        base.OnModelCreating(builder);
        builder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
    }
}

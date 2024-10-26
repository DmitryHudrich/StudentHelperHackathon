using System.Reflection;
using StudentHelper.Application.Common.Interfaces;
using StudentHelper.Domain.Entities;
using StudentHelper.Infrastructure.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace StudentHelper.Infrastructure.Data;

public class ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : IdentityDbContext<ApplicationUser>(options), IApplicationDbContext {
    public DbSet<Branch> Branches { get; } = null!;
    public DbSet<Contact> Contacts { get; } = null!;
    public DbSet<Theme> Themes { get; } = null!;
    public DbSet<University> Universities { get; } = null!;
    public DbSet<User> Userss { get; } = null!; // User is a name that caused naming error.

    protected override void OnModelCreating(ModelBuilder builder) {
        base.OnModelCreating(builder);
        builder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
    }
}

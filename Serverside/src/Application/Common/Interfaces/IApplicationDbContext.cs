using StudentHelper.Domain.Entities;

namespace StudentHelper.Application.Common.Interfaces;

public interface IApplicationDbContext {
    DbSet<Branch> Branches { get; set; }
    DbSet<Contact> Contacts { get; set; }
    DbSet<Theme> Themes { get; set; }
    DbSet<University> Universities { get; set; }
    DbSet<User> Userss { get; set; }

    Task<Int32> SaveChangesAsync(CancellationToken cancellationToken = default);
    Int32 SaveChanges();
}


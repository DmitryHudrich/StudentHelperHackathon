using StudentHelper.Domain.Entities;

namespace StudentHelper.Application.Common.Interfaces;

public interface IApplicationDbContext {
    DbSet<Branch> Branches { get; }
    DbSet<Contact> Contacts { get; }
    DbSet<Theme> Themes { get; }
    DbSet<University> Universities { get; }
    DbSet<User> Userss { get; }

    Task<Int32> SaveChangesAsync(CancellationToken cancellationToken = default);
    Int32 SaveChanges();
}

